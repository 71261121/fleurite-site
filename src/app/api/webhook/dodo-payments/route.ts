import { NextRequest, NextResponse } from 'next/server'
import { Webhooks } from '@dodopayments/nextjs'
import { db } from '@/lib/db'
import { sanitizePost, sanitizeRef } from '@/lib/attribution'

export const POST = Webhooks({
  webhookKey: process.env.DODO_PAYMENTS_WEBHOOK_SECRET!,

  onPaymentSucceeded: async (payload) => {
    console.log('[DodoWebhook] Payment succeeded:', payload)

    try {
      const data = (payload as any).data || payload
      const customerEmail = data.customer?.email
      const customerName = data.customer?.name
      const amount = data.total_amount || 27
      const paymentId = data.payment_id || 'unknown'

      // Attribution set at checkout is echoed back here. This is the step that
      // finally answers "which post produced this sale". Re-validated because
      // metadata is free-form on Dodo's side.
      const metadata = (data.metadata || {}) as Record<string, unknown>
      const attributionRef = sanitizeRef(metadata.attribution_ref) || null
      const attributionPost = sanitizePost(metadata.attribution_post) || null
      const attributionSource = attributionRef
        ? String(metadata.attribution_source ?? 'unknown').slice(0, 40)
        : null
      if (attributionRef) {
        console.log('[DodoWebhook] attributed sale:', attributionRef, attributionPost)
      }

      if (!customerEmail) {
        console.error('[DodoWebhook] No customer email in payload')
        return
      }

      // Find or create user
      const user = await db.user.upsert({
        where: { email: customerEmail.toLowerCase() },
        create: {
          email: customerEmail.toLowerCase(),
          name: customerName || 'Customer',
          role: 'user',
        },
        update: {
          name: customerName || undefined,
        },
      })

      // Check for duplicate order (idempotency)
      const existingOrder = await db.order.findFirst({
        where: { stripePaymentIntentId: paymentId },
      })
      if (existingOrder) {
        console.log('[DodoWebhook] Order already exists for payment:', paymentId)
        return
      }

      // Create order number
      const date = new Date()
      const dateStr = date.getFullYear().toString() +
        (date.getMonth() + 1).toString().padStart(2, '0') +
        date.getDate().toString().padStart(2, '0')
      const orderNum = `FL-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`

      // Create order.
      //
      // Attribution is written on a best-effort basis. If the attribution
      // columns are not present in the database yet (code deployed ahead of the
      // migration), Prisma throws on the first attempt — and the outer catch
      // would swallow it, leaving a PAID customer with no Order row and no
      // download email. So the write is retried without the attribution fields.
      // Losing an attribution tag is acceptable; losing a paid customer's book
      // is not.
      const baseOrder = {
        orderNumber: orderNum,
        userId: user.id,
        status: 'paid',
        amount: amount || 27,
        currency: 'USD',
        paymentMethod: 'dodo',
        stripePaymentIntentId: paymentId,
        paidAt: new Date(),
        customerEmail: customerEmail.toLowerCase(),
        customerName: customerName || '',
        items: {
          create: [{
            productName: "The Avoidant's Unwritten Rules",
            price: 27,
          }],
        },
      }

      let order
      try {
        order = await db.order.create({
          data: { ...baseOrder, attributionRef, attributionPost, attributionSource },
        })
      } catch (attributionError) {
        console.error(
          '[DodoWebhook] order create with attribution failed; retrying without it '
          + '(is the attribution migration applied?):',
          attributionError,
        )
        order = await db.order.create({ data: baseOrder })
      }

      // Send download email
      try {
        const { createAndSendDownloadEmail } = await import('@/lib/download-email')
        await createAndSendDownloadEmail({
          orderNumber: orderNum,
          customerEmail: customerEmail.toLowerCase(),
          customerName: customerName || undefined,
          productNames: ["The Avoidant's Unwritten Rules"],
        })
        console.log('[DodoWebhook] Download email sent to:', customerEmail)
      } catch (emailError) {
        console.error('[DodoWebhook] Email error:', emailError)
      }

      console.log('[DodoWebhook] Order created:', orderNum)
    } catch (error) {
      console.error('[DodoWebhook] Error processing payment:', error)
    }
  },

  onPaymentFailed: async (payload) => {
    console.log('[DodoWebhook] Payment failed:', (payload as any).data || payload)
  },

  onPaymentCancelled: async (payload) => {
    console.log('[DodoWebhook] Payment cancelled:', (payload as any).data || payload)
  },

  onPaymentProcessing: async (payload) => {
    console.log('[DodoWebhook] Payment processing:', (payload as any).data || payload)
  },

  onRefundSucceeded: async (payload) => {
    console.log('[DodoWebhook] Refund succeeded:', (payload as any).data || payload)
    try {
      const data = (payload as any).data || payload
      const paymentId = data.payment_id
      if (paymentId) {
        await db.order.updateMany({
          where: { stripePaymentIntentId: paymentId },
          data: { status: 'refunded' },
        })
      }
    } catch (error) {
      console.error('[DodoWebhook] Refund error:', error)
    }
  },

  onRefundFailed: async (payload) => {
    console.log('[DodoWebhook] Refund failed:', (payload as any).data || payload)
  },

  onPayload: async (payload) => {
    console.log('[DodoWebhook] Event received:', payload.type)
  },
})
