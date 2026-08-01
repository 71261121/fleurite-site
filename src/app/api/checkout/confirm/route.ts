import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSessionUser } from '@/lib/auth-utils'
import { validateBody, checkoutConfirmSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const user = await getSessionUser()
    if (!user) {
      return NextResponse.json({ error: 'Please sign in to confirm checkout' }, { status: 401 })
    }

    const body = await request.json()
    const validation = validateBody(checkoutConfirmSchema, body)
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    const { sessionId, items, amount, customerEmail, customerName } = validation.data

    // Look up the checkout session
    const checkoutSession = await db.checkoutSession.findUnique({
      where: { id: sessionId },
    })

    if (!checkoutSession) {
      return NextResponse.json({ error: 'Checkout session not found' }, { status: 404 })
    }

    if (checkoutSession.userId !== user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    if (checkoutSession.status === 'completed') {
      return NextResponse.json({ error: 'Checkout already completed' }, { status: 400 })
    }

    // Check expiration
    if (checkoutSession.expiresAt && checkoutSession.expiresAt < new Date()) {
      await db.checkoutSession.update({
        where: { id: sessionId },
        data: { status: 'expired' },
      })
      return NextResponse.json({ error: 'Checkout session has expired' }, { status: 400 })
    }

    // Verify Stripe session if applicable
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    const isSimulated = !stripeSecretKey || stripeSecretKey === 'sk_test_placeholder'

    if (!isSimulated && checkoutSession.stripeSessionId) {
      const stripe = (await import('stripe')).default
      const stripeClient = new stripe(stripeSecretKey, {
        apiVersion: '2026-07-29.dahlia',
      })

      const stripeSession = await stripeClient.checkout.sessions.retrieve(
        checkoutSession.stripeSessionId
      )

      if (stripeSession.payment_status !== 'paid') {
        return NextResponse.json({ error: 'Payment not completed' }, { status: 400 })
      }
    }

    const orderItems = items || []
    if (orderItems.length === 0) {
      return NextResponse.json({ error: 'No items to create order' }, { status: 400 })
    }

    // Create order number
    const date = new Date()
    const dateStr = date.getFullYear().toString() +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      date.getDate().toString().padStart(2, '0')
    const orderNum = `SL-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`

    // Create the order
    const order = await db.order.create({
      data: {
        orderNumber: orderNum,
        userId: user.id,
        status: 'paid',
        amount: amount || checkoutSession.amount,
        currency: checkoutSession.currency,
        paymentMethod: isSimulated ? 'simulated' : 'stripe',
        paidAt: new Date(),
        customerEmail: customerEmail || user.email,
        customerName: customerName || user.name || '',
        items: {
          create: orderItems.map((item: { productId: string; productName: string; price: number }) => ({
            productName: item.productName,
            price: item.price,
            productId: item.productId,
          })),
        },
      },
      include: { items: true },
    })

    // Add to library
    for (const item of orderItems) {
      await db.libraryItem.upsert({
        where: { userId_productId: { userId: user.id, productId: item.productId } },
        create: {
          userId: user.id,
          productId: item.productId,
          accessType: 'purchased',
        },
        update: {},
      })
    }

    // Mark checkout session as completed
    await db.checkoutSession.update({
      where: { id: sessionId },
      data: { status: 'completed' },
    })

    // Send download email (non-blocking)
    const recipientEmail = customerEmail || user.email
    const recipientName = customerName || user.name || undefined
    if (recipientEmail) {
      import('@/lib/download-email').then(({ createAndSendDownloadEmail }) => {
        createAndSendDownloadEmail({
          orderNumber: orderNum,
          customerEmail: recipientEmail,
          customerName: recipientName,
          productNames: orderItems.map((i: { productName: string }) => i.productName),
        }).catch(err => console.error('[Checkout Confirm] Download email error:', err))
      })
    }

    return NextResponse.json({ success: true, order }, { status: 201 })
  } catch (error) {
    console.error('Checkout confirmation error:', error)
    return NextResponse.json({ error: 'Failed to confirm checkout' }, { status: 500 })
  }
}
