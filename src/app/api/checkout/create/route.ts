import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSessionUser } from '@/lib/auth-utils'
import { checkoutCreateSchema, validateBody } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const user = await getSessionUser()
    if (!user) {
      return NextResponse.json({ error: 'Please sign in to proceed with checkout' }, { status: 401 })
    }

    const body = await request.json()
    const validation = validateBody(checkoutCreateSchema, body)
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }
    const { items, amount, customerEmail, customerName } = validation.data

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    const isSimulated = !stripeSecretKey || stripeSecretKey === 'sk_test_placeholder'

    const razorpayKeyId = process.env.RAZORPAY_KEY_ID
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET
    const hasRazorpay = !!(razorpayKeyId && razorpayKeySecret)

    const expiresAt = new Date(Date.now() + 30 * 60 * 1000) // 30 minutes

    // ── Priority: Stripe > Razorpay > Simulated ──────
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
          unit_amount: Math.round(item.price * 100), // Stripe uses cents
        },
        quantity: 1,
      }))

      const origin = request.headers.get('origin') || 'http://localhost:3005'

      const session = await stripeClient.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/checkout?canceled=true`,
        expires_at: Math.floor(expiresAt.getTime() / 1000),
        metadata: {
          userId: user.id,
          customerEmail: customerEmail || user.email,
          customerName: customerName || user.name || '',
          itemsJson: JSON.stringify(items),
        },
      })

      // Create checkout session record in DB
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
    } else if (hasRazorpay) {
      // ── Razorpay Checkout ──────────────────────────────
      return NextResponse.json({
        success: true,
        mode: 'razorpay',
        razorpayKey: razorpayKeyId,
        sessionId: 'pending',
      })
    } else {
      // ── Simulated Checkout ────────────────────────────────
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
