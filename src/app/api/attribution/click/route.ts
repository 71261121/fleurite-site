import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { sanitizePost, sanitizeRef } from '@/lib/attribution'

/**
 * Records a click on an attributed DM link.
 *
 * Deliberately permissive in what it returns and strict in what it stores: a
 * malformed or missing ref is a silent no-op rather than an error, because this
 * endpoint sits on the critical path of a landing-page view and must never
 * surface a failure to a visitor.
 *
 * Only the sanitized ref/post plus coarse request context are persisted. No IP,
 * no cookies, no personal data — the ref itself is the only identifier, and it
 * is already an opaque hash issued in the DM.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const ref = sanitizeRef(body?.ref)
    if (!ref) {
      return NextResponse.json({ recorded: false, reason: 'no valid ref' })
    }
    const post = sanitizePost(body?.post) || null

    await db.attributionClick.create({
      data: {
        ref,
        post,
        // Truncated so a hostile client cannot bloat the row.
        userAgent: (request.headers.get('user-agent') || '').slice(0, 300) || null,
        referer: (request.headers.get('referer') || '').slice(0, 300) || null,
      },
    })
    return NextResponse.json({ recorded: true })
  } catch (error) {
    console.error('[Attribution] click log failed:', error)
    // Still a 200: the visitor's experience must not depend on our analytics.
    return NextResponse.json({ recorded: false })
  }
}
