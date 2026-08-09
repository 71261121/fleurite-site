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
    const { customerEmail, customerName } = validation.data

    // Server-side price — NEVER trust client-supplied amount
    const amount = 27
    const items = [{ productName: "The Avoidant's Unwritten Rules", price: 27 }]

    // Auto-create or find guest user
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

    const expiresAt = new Date(Date.now() + 30 * 60 * 1000) // 30 minutes

    // Create checkout session in DB
    const checkoutSession = await db.checkoutSession.create({
      data: {
        userId: user.id,
        amount,
        currency: 'USD',
        status: 'pending',
        expiresAt,
      },
    })

    // Check if DodoPayments is configured
    const dodoApiKey = process.env.DODO_PAYMENTS_API_KEY
    const hasDodoPayments = dodoApiKey && dodoApiKey !== 'your_api_key_here'

    return NextResponse.json({
      success: true,
      mode: hasDodoPayments ? 'dodo' : 'simulated',
      sessionId: checkoutSession.id,
      customerEmail: email.toLowerCase(),
    })
  } catch (error) {
    console.error('Checkout creation error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
