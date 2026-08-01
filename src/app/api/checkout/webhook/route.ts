import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    if (!stripeSecretKey || stripeSecretKey === 'sk_test_placeholder') {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 503 })
    }

    const stripe = (await import('stripe')).default
    const stripeClient = new stripe(stripeSecretKey, {
      apiVersion: '2026-07-29.dahlia',
    })

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
    if (!webhookSecret) {
      console.error('[Webhook] STRIPE_WEBHOOK_SECRET not configured')
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 503 })
    }

    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      console.warn('[Webhook] Request missing stripe-signature header')
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    let event: any
    try {
      event = stripeClient.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('[Webhook] Signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object, stripeClient)
        break

      case 'checkout.session.expired':
        await handleCheckoutExpired(event.data.object)
        break

      default:
        console.log(`[Webhook] Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('[Webhook] Unhandled error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}

async function handleCheckoutCompleted(session: any, _stripeClient: any) {
  const userId = session.metadata?.userId
  const itemsJson = session.metadata?.itemsJson

  if (!userId) {
    console.error('[Webhook] Missing userId in session metadata for completed checkout')
    return
  }

  // Update checkout session status
  if (session.id) {
    await db.checkoutSession.updateMany({
      where: { stripeSessionId: session.id },
      data: { status: 'completed' },
    }).catch(err => console.error('[Webhook] Failed to update checkout session:', err))
  }

  if (!itemsJson) {
    console.warn(`[Webhook] No itemsJson in metadata for session ${session.id}`)
    return
  }

  try {
    const items = JSON.parse(itemsJson)

    // Idempotency: check if order already exists for this session
    const existingOrder = await db.order.findFirst({
      where: {
        stripePaymentIntentId: session.payment_intent,
      },
      select: { id: true },
    })
    if (existingOrder) {
      console.log(`[Webhook] Order already exists (${existingOrder.id}) for payment_intent ${session.payment_intent}, skipping duplicate.`)
      return
    }

    const date = new Date()
    const dateStr = date.getFullYear().toString() +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      date.getDate().toString().padStart(2, '0')
    const orderNum = `FL-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`
    const totalAmount = session.amount_total ? session.amount_total / 100 : items.reduce((sum: number, i: { price: number }) => sum + i.price, 0)

    const order = await db.order.create({
      data: {
        orderNumber: orderNum,
        userId,
        status: 'paid',
        amount: totalAmount,
        currency: session.currency || 'usd',
        paymentMethod: 'stripe',
        stripePaymentIntentId: session.payment_intent || null,
        paidAt: new Date(),
        customerEmail: session.metadata?.customerEmail || session.customer_email || '',
        customerName: session.metadata?.customerName || '',
        items: {
          create: items.map((item: { productId?: string; productName: string; price: number }) => ({
            productName: item.productName,
            price: item.price,
            productId: item.productId,
          })),
        },
      },
    })

    // Add to library (idempotent upsert)
    for (const item of items) {
      if (item.productId) {
        await db.libraryItem.upsert({
          where: { userId_productId: { userId, productId: item.productId } },
          create: { userId, productId: item.productId, accessType: 'purchased' },
          update: {},
        })
      }
    }

    // Send order confirmation & download email (non-blocking)
    const customerEmail = session.metadata?.customerEmail || session.customer_email
    const customerName = session.metadata?.customerName
    if (customerEmail) {
      import('@/lib/email').then(({ sendEmail, getOrderConfirmationHtml }) => {
        sendEmail({
          to: customerEmail,
          subject: `Order Confirmed: ${orderNum} — Fleurite™`,
          html: getOrderConfirmationHtml({
            name: customerName || undefined,
            orderNumber: orderNum,
            items: items.map((i: { productName: string; price: number }) => ({ productName: i.productName, price: i.price })),
            total: totalAmount,
            currency: session.currency || 'usd',
          }),
        }).catch(err => console.error('[Webhook] Order confirmation email error:', err))
      })

      import('@/lib/download-email').then(({ createAndSendDownloadEmail }) => {
        createAndSendDownloadEmail({
          orderNumber: orderNum,
          customerEmail,
          customerName: customerName || undefined,
          productNames: items.map((i: { productName: string }) => i.productName),
        }).catch(err => console.error('[Webhook] Download email error:', err))
      })
    }

    console.log(`[Webhook] Order ${orderNum} created for user ${userId}`)
  } catch (parseErr) {
    console.error('[Webhook] Error processing completed checkout:', parseErr)
  }
}

async function handleCheckoutExpired(session: any) {
  if (session.id) {
    await db.checkoutSession.updateMany({
      where: { stripeSessionId: session.id, status: 'pending' },
      data: { status: 'expired' },
    }).catch(err => console.error('[Webhook] Failed to update expired checkout session:', err))
    console.log(`[Webhook] Checkout session expired: ${session.id}`)
  }
}
