import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSessionUser } from '@/lib/auth-utils'
import { validateBody, razorpayCreateSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const user = await getSessionUser()
    if (!user) {
      return NextResponse.json({ error: 'Please sign in to proceed' }, { status: 401 })
    }

    const body = await request.json()
    const validation = validateBody(razorpayCreateSchema, body)
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    const { items, amount, customerEmail, customerName } = validation.data

    const keyId = process.env.RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET

    if (!keyId || !keySecret) {
      return NextResponse.json({ error: 'Razorpay not configured' }, { status: 503 })
    }

    const Razorpay = (await import('razorpay')).default
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    })

    // Convert USD to INR (multiply by ~83, Razorpay uses paise)
    const amountInPaise = Math.round(amount * 83 * 100)

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `sl_${Date.now()}`,
      notes: {
        userId: user.id,
        customerEmail: customerEmail || user.email,
        customerName: customerName || user.name || '',
        itemsJson: JSON.stringify(items),
      },
    })

    // Create checkout session in DB (reuse stripeSessionId field for razorpay order id)
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000)
    await db.checkoutSession.create({
      data: {
        userId: user.id,
        stripeSessionId: order.id,
        amount,
        currency: 'INR',
        status: 'pending',
        expiresAt,
      },
    })

    return NextResponse.json({
      success: true,
      mode: 'razorpay',
      razorpayOrderId: order.id,
      razorpayKey: keyId,
      amount: amountInPaise,
      currency: 'INR',
      customerName: customerName || user.name || '',
      customerEmail: customerEmail || user.email,
      sessionId: order.id,
    })
  } catch (error) {
    console.error('Razorpay order creation error:', error)
    return NextResponse.json({ error: 'Failed to create Razorpay order' }, { status: 500 })
  }
}
