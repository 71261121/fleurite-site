import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * Attribution report — the answer to "which post actually sold?".
 *
 * Returns per-ref click and order counts plus revenue, so Cortex can join a
 * `?ref=` code back to the comment, the DM and the post that produced it.
 *
 * Protected by a bearer token rather than a session: the caller is a local
 * script, not a browser. Without CORTEX_REPORT_TOKEN set, the route is disabled
 * entirely — an unauthenticated endpoint exposing revenue would be worse than a
 * missing feature.
 */
export async function GET(request: NextRequest) {
  const expected = process.env.CORTEX_REPORT_TOKEN
  if (!expected) {
    return NextResponse.json(
      { error: 'reporting disabled: CORTEX_REPORT_TOKEN is not configured' },
      { status: 503 },
    )
  }
  const provided = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '')
  if (provided !== expected) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const sinceParam = request.nextUrl.searchParams.get('since_days')
  const sinceDays = Math.min(365, Math.max(1, Number(sinceParam) || 30))
  const since = new Date(Date.now() - sinceDays * 24 * 60 * 60 * 1000)

  try {
    const [clicks, orders] = await Promise.all([
      db.attributionClick.groupBy({
        by: ['ref', 'post'],
        where: { createdAt: { gte: since } },
        _count: { _all: true },
      }),
      db.order.findMany({
        where: {
          attributionRef: { not: null },
          createdAt: { gte: since },
        },
        select: {
          attributionRef: true,
          attributionPost: true,
          status: true,
          amount: true,
          currency: true,
          createdAt: true,
        },
      }),
    ])

    // Aggregate in the app rather than SQL: the volumes here are tiny, and
    // keeping the shape explicit makes the join to Cortex's DM ledger obvious.
    const byRef = new Map<string, {
      ref: string
      post: string | null
      clicks: number
      orders: number
      refunded: number
      revenue: number
      currency: string
    }>()

    const ensure = (ref: string, post: string | null) => {
      const existing = byRef.get(ref)
      if (existing) {
        if (!existing.post && post) existing.post = post
        return existing
      }
      const created = {
        ref, post, clicks: 0, orders: 0, refunded: 0, revenue: 0, currency: 'USD',
      }
      byRef.set(ref, created)
      return created
    }

    for (const row of clicks) {
      ensure(row.ref, row.post ?? null).clicks += row._count._all
    }
    for (const order of orders) {
      const entry = ensure(order.attributionRef as string, order.attributionPost ?? null)
      if (order.status === 'refunded') {
        entry.refunded += 1
      } else {
        entry.orders += 1
        entry.revenue += order.amount
      }
      entry.currency = order.currency || entry.currency
    }

    const rows = [...byRef.values()].sort((a, b) => b.revenue - a.revenue)
    const totals = rows.reduce(
      (acc, row) => ({
        clicks: acc.clicks + row.clicks,
        orders: acc.orders + row.orders,
        refunded: acc.refunded + row.refunded,
        revenue: acc.revenue + row.revenue,
      }),
      { clicks: 0, orders: 0, refunded: 0, revenue: 0 },
    )

    return NextResponse.json({
      since_days: sinceDays,
      generated_at: new Date().toISOString(),
      totals: {
        ...totals,
        conversion_rate: totals.clicks ? totals.orders / totals.clicks : null,
      },
      rows,
    })
  } catch (error) {
    console.error('[Attribution] report failed:', error)
    return NextResponse.json({ error: 'report query failed' }, { status: 500 })
  }
}
