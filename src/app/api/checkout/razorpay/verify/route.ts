import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSessionUser } from '@/lib/auth-utils'
import crypto from 'crypto'
import { validateBody, razorpayVerifySchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const user = await getSessionUser()
    if (!user) {
      return NextResponse.json({ error: 'Please sign in' }, { status: 401 })
    }

    const body = await request.json()
    const validation = validateBody(razorpayVerifySchema, body)
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      items,
      amount,
      customerEmail,
      customerName,
    } = validation.data

    // Verify signature
    const keySecret = process.env.RAZORPAY_KEY_SECRET
    if (!keySecret) {
      return NextResponse.json(
        { error: 'Razorpay not configured' },
        { status: 503 }
      )
    }

    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest('hex')

    if (expectedSignature !== razorpaySignature) {
      console.warn(`[Razorpay] Signature mismatch for order ${razorpayOrderId} from user ${user.id}`)
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      )
    }

    // Check checkout session
    const checkoutSession = await db.checkoutSession.findUnique({
      where: { stripeSessionId: razorpayOrderId },
    })

    if (!checkoutSession) {
      return NextResponse.json(
        { error: 'Checkout session not found' },
        { status: 404 }
      )
    }

    if (checkoutSession.userId !== user.id) {
      console.warn(`[Razorpay] User ${user.id} tried to verify order belonging to ${checkoutSession.userId}`)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    if (checkoutSession.status === 'completed') {
      return NextResponse.json(
        { error: 'Already completed' },
        { status: 400 }
      )
    }

    const orderItems = items || []
    if (orderItems.length === 0) {
      return NextResponse.json({ error: 'No items' }, { status: 400 })
    }

    // Create order
    const date = new Date()
    const dateStr =
      date.getFullYear().toString() +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      date.getDate().toString().padStart(2, '0')
    const orderNum = `SL-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`

    const order = await db.order.create({
      data: {
        orderNumber: orderNum,
        userId: user.id,
        status: 'paid',
        amount: amount || checkoutSession.amount,
        currency: 'INR',
        paymentMethod: 'razorpay',
        paidAt: new Date(),
        customerEmail: customerEmail || user.email,
        customerName: customerName || user.name || '',
        items: {
          create: orderItems.map(
            (item: { productId: string; productName: string; price: number }) => ({
              productName: item.productName,
              price: item.price,
              productId: item.productId,
            })
          ),
        },
      },
      include: { items: true },
    })

    // Add to library
    for (const item of orderItems) {
      await db.libraryItem.upsert({
        where: {
          userId_productId: {
            userId: user.id,
            productId: item.productId,
          },
        },
        create: {
          userId: user.id,
          productId: item.productId,
          accessType: 'purchased',
        },
        update: {},
      })
    }

    // Mark checkout session completed
    await db.checkoutSession.update({
      where: { id: checkoutSession.id },
      data: { status: 'completed' },
    })

    // Send order confirmation & download email (non-blocking)
    const recipientEmail = customerEmail || user.email
    const recipientName = customerName || user.name || undefined
    if (recipientEmail) {
      import('@/lib/email').then(({ sendEmail, getOrderConfirmationHtml }) => {
        sendEmail({
          to: recipientEmail,
          subject: `Order Confirmed: ${orderNum} — SecureLoop™`,
          html: getOrderConfirmationHtml({
            name: recipientName,
            orderNumber: orderNum,
            items: orderItems.map((i: { productName: string; price: number }) => ({ productName: i.productName, price: i.price })),
            total: amount || checkoutSession.amount,
            currency: 'inr',
          }),
        }).catch(err => console.error('[Razorpay] Order confirmation email error:', err))
      })

      import('@/lib/download-email').then(({ createAndSendDownloadEmail }) => {
        createAndSendDownloadEmail({
          orderNumber: orderNum,
          customerEmail: recipientEmail,
          customerName: recipientName,
          productNames: orderItems.map((i: { productName: string }) => i.productName),
        }).catch(err => console.error('[Razorpay] Download email error:', err))
      })
    }

    return NextResponse.json({ success: true, order }, { status: 201 })
  } catch (error) {
    console.error('Razorpay verification error:', error)
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    )
  }
}
