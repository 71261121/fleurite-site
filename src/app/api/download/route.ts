import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const action = searchParams.get('action')

    if (!token) {
      return NextResponse.json(
        { error: 'Download token is required' },
        { status: 400 }
      )
    }

    // Find verification token
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        token,
        type: 'download_token',
      },
    })

    if (!verificationToken) {
      return NextResponse.json(
        { error: 'Invalid or expired download link' },
        { status: 400 }
      )
    }

    // Check expiration (24 hours)
    if (verificationToken.expires < new Date()) {
      await db.verificationToken.deleteMany({
        where: { token, type: 'download_token' },
      }).catch(() => {})
      return NextResponse.json(
        { error: 'This download link has expired (24-hour limit exceeded)' },
        { status: 400 }
      )
    }

    // Find order by orderNumber stored in identifier
    const order = await db.order.findFirst({
      where: {
        orderNumber: verificationToken.identifier,
        status: 'paid',
      },
    })

    if (!order) {
      return NextResponse.json(
        { error: 'Associated order not found or not paid' },
        { status: 404 }
      )
    }

    // If action=file is requested, serve the static book PDF
    if (action === 'file') {
      const fs = await import('fs')
      const path = await import('path')
      const pdfPath = path.join(process.cwd(), 'private', 'the-avoidants-unwritten-rules.pdf')

      if (!fs.existsSync(pdfPath)) {
        return NextResponse.json(
          { error: 'Book file not found. Contact support.' },
          { status: 404 }
        )
      }

      const pdfBuffer = fs.readFileSync(pdfPath)
      return new Response(pdfBuffer as unknown as BodyInit, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="the-avoidants-unwritten-rules.pdf"`,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
    }

    // Return order details
    return NextResponse.json(
      {
        success: true,
        order: {
          orderNumber: order.orderNumber,
          paidAt: order.paidAt,
          amount: order.amount,
        },
        expiresAt: verificationToken.expires.toISOString(),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Download API] Error:', error)
    return NextResponse.json(
      { error: 'Failed to verify download token' },
      { status: 500 }
    )
  }
}
