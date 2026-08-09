import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { validateBody, checkoutConfirmSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validation = validateBody(checkoutConfirmSchema, body)
    if (!validation.success) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    const { sessionId, items, amount, customerEmail, customerName } = validation.data

    // Look up the checkout session
    const checkoutSession = await db.checkoutSession.findUnique({
      where: { id: sessionId },
      include: { user: true },
    })

    if (!checkoutSession) {
      return NextResponse.json({ error: 'Checkout session not found' }, { status: 404 })
    }

    if (checkoutSession.status === 'completed') {
      return NextResponse.json({ error: 'Checkout already completed' }, { status: 400 })
    }

    // Check expiration
    if (checkoutSession.expiresAt && checkoutSession.expiresAt < new Date()) {
      await db.checkoutSession.update({
        where: { id: checkoutSession.id },
        data: { status: 'expired' },
      })
      return NextResponse.json({ error: 'Checkout session has expired' }, { status: 400 })
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
    const orderNum = `FL-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`

    // Create the order
    const order = await db.order.create({
      data: {
        orderNumber: orderNum,
        userId: checkoutSession.userId,
        status: 'paid',
        amount: amount || checkoutSession.amount,
        currency: checkoutSession.currency,
        paymentMethod: 'dodo',
        paidAt: new Date(),
        customerEmail: customerEmail || checkoutSession.user?.email || '',
        customerName: customerName || checkoutSession.user?.name || '',
        items: {
          create: orderItems.map((item: { productId?: string; productName: string; price: number }) => ({
            productName: item.productName,
            price: item.price,
            productId: item.productId,
          })),
        },
      },
      include: { items: true },
    })

    // Mark checkout session as completed
    await db.checkoutSession.update({
      where: { id: checkoutSession.id },
      data: { status: 'completed' },
    })

    // Send download email
    const recipientEmail = customerEmail || checkoutSession.user?.email
    const recipientName = customerName || checkoutSession.user?.name || undefined
    let downloadUrl: string | null = null
    if (recipientEmail) {
      try {
        const { createAndSendDownloadEmail } = await import('@/lib/download-email')
        downloadUrl = await createAndSendDownloadEmail({
          orderNumber: orderNum,
          customerEmail: recipientEmail,
          customerName: recipientName,
          productNames: orderItems.map((i: { productName: string }) => i.productName),
        })
      } catch (err) {
        console.error('[Checkout Confirm] Download email error:', err)
      }
    }

    return NextResponse.json({ success: true, order, orderNumber: orderNum, downloadUrl }, { status: 201 })
  } catch (error) {
    console.error('Checkout confirmation error:', error)
    return NextResponse.json({ error: 'Failed to confirm checkout' }, { status: 500 })
  }
}
