import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Missing session ID' }, { status: 400 })
    }

    let checkoutSession = await db.checkoutSession.findUnique({
      where: { id },
    })

    // Stripe IDs start with "cs_" — try stripeSessionId column
    if (!checkoutSession && id.startsWith('cs_')) {
      checkoutSession = await db.checkoutSession.findUnique({
        where: { stripeSessionId: id },
      })
    }

    if (!checkoutSession) {
      return NextResponse.json({ error: 'Checkout session not found' }, { status: 404 })
    }

    // Check if expired
    if (checkoutSession.expiresAt && checkoutSession.expiresAt < new Date() && checkoutSession.status === 'pending') {
      await db.checkoutSession.update({
        where: { id },
        data: { status: 'expired' },
      })
      return NextResponse.json({
        status: 'expired',
        expiresAt: checkoutSession.expiresAt,
      })
    }

    return NextResponse.json({
      id: checkoutSession.id,
      status: checkoutSession.status,
      amount: checkoutSession.amount,
      currency: checkoutSession.currency,
      createdAt: checkoutSession.createdAt,
      expiresAt: checkoutSession.expiresAt,
    })
  } catch (error) {
    console.error('Checkout status error:', error)
    return NextResponse.json({ error: 'Failed to fetch checkout status' }, { status: 500 })
  }
}
