import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { paymentId } = await request.json()

    if (!paymentId) {
      return NextResponse.json({ error: 'Missing payment ID' }, { status: 400 })
    }

    // Check if order already exists (webhook might have beaten us to it)
    let order = await db.order.findFirst({
      where: { stripePaymentIntentId: paymentId }
    });

    if (order) {
      // Order exists, just generate a fresh download token
      const { createAndSendDownloadEmail } = await import('@/lib/download-email')
      // This will send an email again but it's safe (idempotent for the user)
      const downloadUrl = await createAndSendDownloadEmail({
        orderNumber: order.orderNumber,
        customerEmail: order.customerEmail || 'support@fleurite.me',
        customerName: order.customerName || undefined,
        productNames: ["The Avoidant's Unwritten Rules"],
      })
      
      return NextResponse.json({ 
        success: true, 
        orderNumber: order.orderNumber,
        downloadUrl 
      })
    }

    // If order doesn't exist yet, we can either:
    // 1. Wait/poll for webhook
    // 2. Just return success so the UI shows the "Check your email" message
    
    // For now, return success without download link, so UI falls back to "check email" 
    // message while webhook processes in background
    return NextResponse.json({ 
      success: true, 
      orderNumber: '',
      downloadUrl: ''
    })

  } catch (error) {
    console.error('Dodo success route error:', error)
    return NextResponse.json({ error: 'Failed to process success' }, { status: 500 })
  }
}
