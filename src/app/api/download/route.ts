import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import crypto from 'crypto'
import { sendEmail } from '@/lib/email'
import { getDownloadEmailHtml } from '@/lib/download-email'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3005'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId, email } = body

    if (!orderId || !email) {
      return NextResponse.json(
        { error: 'Order ID and email are required' },
        { status: 400 }
      )
    }

    // Verify payment was completed: find order by orderNumber or ID matching email
    const order = await db.order.findFirst({
      where: {
        OR: [
          { id: orderId, customerEmail: { equals: email, mode: 'insensitive' } },
          { orderNumber: orderId, customerEmail: { equals: email, mode: 'insensitive' } },
        ],
        status: 'paid',
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    if (!order) {
      return NextResponse.json(
        { error: 'Verified paid order not found for this order ID and email' },
        { status: 404 }
      )
    }

    // Generate secure download token
    const token = crypto.randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    // Clean up any existing download tokens for this order
    await db.verificationToken.deleteMany({
      where: {
        identifier: order.orderNumber,
        type: 'download_token',
      },
    }).catch(() => {})

    // Store new download token
    await db.verificationToken.create({
      data: {
        identifier: order.orderNumber,
        token,
        type: 'download_token',
        expires,
      },
    })

    const downloadUrl = `${BASE_URL}/download?token=${token}`

    // Optionally send the download email if requested or as part of generation
    const productNames = order.items.map(i => i.productName)
    await sendEmail({
      to: email,
      subject: 'Your Fleurite Guide is Ready — Fleurite™',
      html: getDownloadEmailHtml({
        name: order.customerName || undefined,
        orderNumber: order.orderNumber,
        downloadUrl,
        productNames: productNames.length > 0 ? productNames : ['Fleurite Digital Guide'],
      }),
    }).catch(err => console.error('[Download API] Failed to send download email:', err))

    return NextResponse.json(
      {
        success: true,
        downloadUrl,
        expiresAt: expires.toISOString(),
        orderNumber: order.orderNumber,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Download API] Error generating download link:', error)
    return NextResponse.json(
      { error: 'Failed to generate download link' },
      { status: 500 }
    )
  }
}

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
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })

    if (!order) {
      return NextResponse.json(
        { error: 'Associated order not found or not paid' },
        { status: 404 }
      )
    }

    // If action=file is requested, serve the static book PDF (product artifact)
    if (action === 'file') {
      const fs = await import('fs')
      const path = await import('path')
      const pdfPath = path.join(process.cwd(), 'public', 'book', 'the-avoidants-unwritten-rules.pdf')

      if (fs.existsSync(pdfPath)) {
        const pdfBuffer = fs.readFileSync(pdfPath)
        return new Response(pdfBuffer as unknown as BodyInit, {
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="the-avoidants-unwritten-rules.pdf"`,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        })
      }

      // Fallback: generate at runtime only if static file missing
      const { generateBookPdf } = await import('@/lib/pdf')
      const { BOOK } = await import('@/content/book')
      const pdfBuffer = await generateBookPdf(BOOK)

      return new Response(pdfBuffer as unknown as BodyInit, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="the-avoidants-unwritten-rules.pdf"`,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
    }

    // Otherwise return order and product preview details
    return NextResponse.json(
      {
        success: true,
        order: {
          orderNumber: order.orderNumber,
          customerName: order.customerName,
          customerEmail: order.customerEmail,
          paidAt: order.paidAt,
          amount: order.amount,
          currency: order.currency,
          items: order.items.map(item => ({
            productName: item.productName,
            price: item.price,
            product: item.product ? {
              name: item.product.name,
              subtitle: item.product.subtitle,
              description: item.product.description,
              benefits: (() => {
                try {
                  return JSON.parse(item.product.benefits)
                } catch {
                  return []
                }
              })(),
              productType: item.product.productType,
              image: item.product.image,
            } : null,
          })),
        },
        expiresAt: verificationToken.expires.toISOString(),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Download API] Error verifying download token:', error)
    return NextResponse.json(
      { error: 'Failed to verify download token' },
      { status: 500 }
    )
  }
}
