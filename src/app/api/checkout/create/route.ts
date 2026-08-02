import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { checkoutCreateSchema, validateBody } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validation = validateBody(checkoutCreateSchema, body)
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }
    const { items, amount, customerEmail, customerName } = validation.data

    // Auto-create or find guest user (email optional — Stripe collects it)
    const email = customerEmail || `guest-${Date.now()}@fleurite.me`
    const user = await db.user.upsert({
      where: { email: email.toLowerCase() },
      create: {
        email: email.toLowerCase(),
        name: customerName || 'Guest Customer',
        role: 'user',
      },
      update: {
        name: customerName || undefined,
      },
    })

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    const isSimulated = !stripeSecretKey || stripeSecretKey === 'sk_test_placeholder'

    const expiresAt = new Date(Date.now() + 30 * 60 * 1000) // 30 minutes

    if (!isSimulated) {
      // ── Real Stripe Checkout ──────────────────────────────
      const stripe = (await import('stripe')).default
      const stripeClient = new stripe(stripeSecretKey, {
        apiVersion: '2026-07-29.dahlia',
      })

      const lineItems = items.map((item: { productName: string; price: number }) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.productName,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: 1,
      }))

      const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3005'

      const session = await stripeClient.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}?canceled=true`,
        expires_at: Math.floor(expiresAt.getTime() / 1000),
        metadata: {
          userId: user.id,
          customerEmail: email.toLowerCase(),
          customerName: customerName || '',
          itemsJson: JSON.stringify(items),
        },
      })

      const checkoutSession = await db.checkoutSession.create({
        data: {
          userId: user.id,
          stripeSessionId: session.id,
          amount,
          currency: 'USD',
          status: 'pending',
          expiresAt,
        },
      })

      return NextResponse.json({
        success: true,
        mode: 'stripe',
        sessionId: checkoutSession.id,
        stripeUrl: session.url,
        stripeSessionId: session.id,
      })
    } else {
      // ── Simulated Checkout (no real payment) ────────────────
      const checkoutSession = await db.checkoutSession.create({
        data: {
          userId: user.id,
          amount,
          currency: 'USD',
          status: 'pending',
          expiresAt,
        },
      })

      return NextResponse.json({
        success: true,
        mode: 'simulated',
        sessionId: checkoutSession.id,
      })
    }
  } catch (error) {
    console.error('Checkout creation error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
