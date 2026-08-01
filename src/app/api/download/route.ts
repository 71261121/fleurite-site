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

    // If action=file is requested, return the PDF download or sample PDF response
    if (action === 'file') {
      const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >> /MediaBox [0 0 612 792] /Contents 4 0 R >>
endobj
4 0 obj
<< /Length 75 >>
stream
BT
/F1 24 Tf
100 700 Td
(Fleurite Digital Guide - Order ${order.orderNumber}) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000272 00000 n 
trailer
<< /Size 5 /Root 1 0 R >>
startxref
377
%%OF`

      return new NextResponse(pdfContent, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="Fleurite-Guide-${order.orderNumber}.pdf"`,
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
