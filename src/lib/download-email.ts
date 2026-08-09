import { db } from '@/lib/db'
import crypto from 'crypto'
import { sendEmail } from '@/lib/email'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3005'

export interface DownloadEmailParams {
  name?: string
  orderNumber: string
  downloadUrl: string
  productNames?: string[]
}

export function getDownloadEmailHtml(params: DownloadEmailParams): string {
  const { name, orderNumber, downloadUrl, productNames = ['Fleurite Digital Guide'] } = params
  const greeting = name ? `Hi ${name}` : 'Hi there'
  const productList = productNames.join(', ')

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Fleurite Guide is Ready</title>
</head>
<body style="margin:0;padding:0;background-color:#FFFBF7;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <tr>
      <td style="text-align:center;padding-bottom:30px;">
        <h1 style="color:#9B1B4E;font-family:Georgia,serif;font-style:italic;margin:0;font-size:28px;">
          Fleurite
        </h1>
      </td>
    </tr>
    <tr>
      <td style="background:white;border-radius:16px;padding:40px;box-shadow:0 2px 20px rgba(155,27,78,0.08);">
        <div style="text-align:center;margin-bottom:24px;">
          <h2 style="color:#1a1a1a;margin:12px 0 4px 0;font-size:22px;">Your Fleurite Guide is Ready</h2>
          <p style="color:#999;font-size:13px;">Order ${orderNumber}</p>
        </div>
        
        <p style="color:#666;line-height:1.7;margin:0 0 24px 0;">${greeting},<br/><br/>
          Thank you for your purchase of <strong style="color:#9B1B4E;">${productList}</strong>! Your secure download link is ready below.
        </p>

        <div style="background:#FFFBF7;border-radius:12px;padding:24px;margin:0 0 24px 0;text-align:center;border:1px solid #F0DDE5;">
          <p style="color:#2D1B2E;font-size:15px;margin:0 0 16px 0;font-weight:600;">Ready to begin your healing journey?</p>
          <a href="${downloadUrl}"
             style="display:inline-block;background-color:#9B1B4E;color:white;text-decoration:none;padding:14px 36px;border-radius:12px;font-weight:600;font-size:16px;box-shadow:0 4px 12px rgba(155,27,78,0.2);">
            Download Your PDF Guide
          </a>
          <p style="color:#999;font-size:12px;margin:16px 0 0 0;">
            This secure download link expires in 24 hours.
          </p>
        </div>

        <p style="color:#666;font-size:14px;line-height:1.6;margin:0 0 20px 0;">
          If the button above does not work, you can copy and paste this link into your browser:<br/>
          <a href="${downloadUrl}" style="color:#9B1B4E;word-break:break-all;font-size:13px;">${downloadUrl}</a>
        </p>

        <div style="margin-top:24px;padding-top:20px;border-top:1px solid #F0DDE5;">
          <p style="color:#999;font-size:13px;line-height:1.6;margin:0 0 8px 0;">
            <strong>Need assistance?</strong> Contact our support team at <a href="mailto:support@fleurite.me" style="color:#9B1B4E;">support@fleurite.me</a>.
          </p>
          <p style="color:#999;font-size:13px;line-height:1.6;margin:0;">
            <strong>30-Day Money-Back Guarantee</strong> — If you are not completely satisfied, contact us within 30 days for a full refund.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="text-align:center;padding-top:30px;color:#999;font-size:12px;line-height:1.6;">
        <p>
          <a href="${BASE_URL}" style="color:#9B1B4E;text-decoration:none;margin:0 10px;">Home</a> |
          <a href="mailto:support@fleurite.me" style="color:#9B1B4E;text-decoration:none;margin:0 10px;">Support</a> |
          <a href="${BASE_URL}/terms" style="color:#9B1B4E;text-decoration:none;margin:0 10px;">Terms</a>
        </p>
        <p style="margin-top:12px;">With care, the Fleurite team</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function createAndSendDownloadEmail(params: {
  orderNumber: string
  customerEmail: string
  customerName?: string | null
  productNames?: string[]
}): Promise<string | null> {
  try {
    const { orderNumber, customerEmail, customerName, productNames } = params
    if (!customerEmail) return null

    const token = crypto.randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    await db.verificationToken.deleteMany({
      where: {
        identifier: orderNumber,
        type: 'download_token',
      },
    }).catch(() => {})

    await db.verificationToken.create({
      data: {
        identifier: orderNumber,
        token,
        type: 'download_token',
        expires,
      },
    })

    const downloadUrl = `${BASE_URL}/api/download?token=${token}&action=file`

    await sendEmail({
      to: customerEmail,
      subject: 'Your Fleurite Guide is Ready — Fleurite',
      html: getDownloadEmailHtml({
        name: customerName || undefined,
        orderNumber,
        downloadUrl,
        productNames: productNames && productNames.length > 0 ? productNames : ['Fleurite Digital Guide'],
      }),
    }).catch((e) => {
      console.error('[Download Email Error] Resend failing (might need Domain Verification):', e)
    })

    return downloadUrl
  } catch (error) {
    console.error('[Download Email] Failed to create token and send email:', error)
    return null
  }
}
