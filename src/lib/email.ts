import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
const FROM_DISPLAY = process.env.EMAIL_FROM || 'Fleurite'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3005'

export interface SendEmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: SendEmailOptions): Promise<boolean> {
  // If Resend is not configured, just log
  if (!resend) {
    console.log(`[Email] Resend not configured. Would send to: ${to}`)
    console.log(`[Email] Subject: ${subject}`)
    console.log(`[Email] HTML: ${html}`)
    return false
  }

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL.includes('<') ? FROM_EMAIL : `${FROM_DISPLAY} <${FROM_EMAIL}>`,
      to: [to],
      subject,
      html,
    })

    if (error) {
      console.error('[Email] Send error:', error)
      return false
    }

    // Log the email
    try {
      const { db } = await import('@/lib/db')
      await db.emailLog.create({
        data: {
          to,
          subject,
          template: subject.includes('verify') ? 'email_verification' : subject.includes('reset') ? 'password_reset' : subject.includes('order') || subject.includes('purchase') || subject.includes('confirmed') ? 'order_confirmation' : subject.includes('welcome') ? 'welcome' : 'other',
          status: 'sent',
        },
      })
    } catch {
      // Non-blocking
    }

    console.log(`[Email] Sent to ${to}: ${data?.id}`)
    return true
  } catch (err) {
    console.error('[Email] Exception:', err)
    return false
  }
}

export function getEmailVerificationHtml(verificationUrl: string, name?: string): string {
  const greeting = name ? `Hi ${name}` : 'Hi there'
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify your email</title>
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
        <h2 style="color:#1a1a1a;margin:0 0 16px 0;font-size:22px;">Verify Your Email</h2>
        <p style="color:#666;line-height:1.6;margin:0 0 24px 0;">${greeting},<br/><br/>
          Welcome to Fleurite! To get started, please verify your email address.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align:center;padding:20px 0;">
              <a href="${verificationUrl}"
                   style="display:inline-block;background-color:#9B1B4E;color:white;text-decoration:none;padding:14px 36px;border-radius:12px;font-weight:600;font-size:16px;">
                Verify Email
              </a>
            </td>
          </tr>
        </table>
        <p style="color:#999;font-size:13px;line-height:1.5;margin:24px 0 0 0;text-align:center;">
          If the button doesn't work, copy and paste this link:<br/>
          <a href="${verificationUrl}" style="color:#9B1B4E;word-break:break-all;">${verificationUrl}</a>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:center;padding-top:30px;color:#999;font-size:12px;">
        <p>This link expires in 24 hours.</p>
        <p>With care, the Fleurite team</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function getPasswordResetHtml(resetUrl: string, name?: string): string {
  const greeting = name ? `Hi ${name}` : 'Hi there'
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset your password</title>
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
        <h2 style="color:#1a1a1a;margin:0 0 16px 0;font-size:22px;">Reset Your Password</h2>
        <p style="color:#666;line-height:1.6;margin:0 0 24px 0;">${greeting},<br/><br/>
          We received a request to reset your password. Click the button below to choose a new one.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align:center;padding:20px 0;">
              <a href="${resetUrl}"
                   style="display:inline-block;background-color:#9B1B4E;color:white;text-decoration:none;padding:14px 36px;border-radius:12px;font-weight:600;font-size:16px;">
                Reset Password
              </a>
            </td>
          </tr>
        </table>
        <p style="color:#999;font-size:13px;line-height:1.5;margin:24px 0 0 0;text-align:center;">
          If the button doesn't work, copy and paste this link:<br/>
          <a href="${resetUrl}" style="color:#9B1B4E;word-break:break-all;">${resetUrl}</a>
        </p>
        <p style="color:#e74c3c;font-size:13px;margin:16px 0 0 0;">
          If you didn't request this, you can safely ignore this email.
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:center;padding-top:30px;color:#999;font-size:12px;">
        <p>This link expires in 1 hour.</p>
        <p>With care, the Fleurite team</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

/* ──────────────────────────────────────────────────────────────
   Welcome Email (post-registration)
   ────────────────────────────────────────────────────────────── */
export function getWelcomeHtml(name?: string): string {
  const greeting = name ? `Hi ${name}` : 'Hi there'
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Fleurite</title>
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
        <h2 style="color:#1a1a1a;margin:0 0 16px 0;font-size:22px;">Welcome to Your Healing Journey</h2>
        <p style="color:#666;line-height:1.7;margin:0 0 20px 0;">${greeting},<br/><br/>
          Thank you for joining <strong style="color:#9B1B4E;">Fleurite</strong>. You've taken a beautiful step toward understanding yourself more deeply and building the relationships you deserve.
        </p>
        <div style="background:#FDF2F8;border-radius:12px;padding:20px;margin:0 0 24px 0;border-left:4px solid #9B1B4E;">
          <p style="color:#2D1B2E;margin:0 0 8px 0;font-weight:600;font-size:15px;">What you can do now:</p>
          <ul style="color:#6B4C5A;margin:0;padding-left:20px;line-height:1.8;font-size:14px;">
            <li>Browse our <a href="${BASE_URL}/guides" style="color:#9B1B4E;font-weight:500;">healing guides</a> and workbooks</li>
            <li>Read expert <a href="${BASE_URL}/stories" style="color:#9B1B4E;font-weight:500;">articles and stories</a> on attachment</li>
            <li>Track your daily mood and practice gratitude</li>
            <li>Start journaling your healing journey</li>
          </ul>
        </div>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align:center;padding:16px 0;">
              <a href="${BASE_URL}/guides"
                   style="display:inline-block;background-color:#9B1B4E;color:white;text-decoration:none;padding:14px 36px;border-radius:12px;font-weight:600;font-size:16px;">
                Explore Guides
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="text-align:center;padding-top:30px;color:#999;font-size:12px;line-height:1.6;">
        <p>Remember: healing isn't linear, and every step counts.</p>
        <p>With care, the Fleurite team</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

/* ──────────────────────────────────────────────────────────────
   Order Confirmation Email
   ────────────────────────────────────────────────────────────── */
export function getOrderConfirmationHtml(params: {
  name?: string
  orderNumber: string
  items: { productName: string; price: number }[]
  total: number
  currency?: string
}): string {
  const { name, orderNumber, items, total, currency = 'USD' } = params
  const greeting = name ? `Hi ${name}` : 'Hi there'
  const fmt = (n: number) => `$${n.toFixed(2)}`
  const currencySymbol = currency === 'usd' ? '$' : '$'

  const itemsHtml = items.map(item => `
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #F0DDE5;color:#2D1B2E;font-size:14px;">${item.productName}</td>
            <td style="padding:12px 0;border-bottom:1px solid #F0DDE5;color:#2D1B2E;font-size:14px;text-align:right;font-weight:600;">${currencySymbol}${item.price.toFixed(2)}</td>
          </tr>`).join('')

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Order is Confirmed</title>
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
          <div style="display:inline-block;background:#FDF2F8;border-radius:50%;width:60px;height:60px;line-height:60px;text-align:center;font-size:28px;">&#10003;</div>
          <h2 style="color:#1a1a1a;margin:12px 0 4px 0;font-size:22px;">Your Order is Confirmed!</h2>
          <p style="color:#999;font-size:13px;">Order ${orderNumber}</p>
        </div>
        <p style="color:#666;line-height:1.7;margin:0 0 24px 0;">${greeting},<br/><br/>
          Thank you for your purchase! Your download link is in the separate email we just sent. If you need help, contact <a href="mailto:support@fleurite.me" style="color:#9B1B4E;font-weight:500;">support@fleurite.me</a>.
        </p>
        <div style="background:#FFFBF7;border-radius:12px;padding:20px;margin:0 0 24px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:0 0 8px 0;color:#999;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;font-weight:600;">Item</td>
              <td style="padding:0 0 8px 0;color:#999;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;font-weight:600;text-align:right;">Price</td>
            </tr>
            ${itemsHtml}
            <tr>
              <td style="padding:16px 0 0 0;font-weight:700;font-size:16px;color:#9B1B4E;">Total</td>
              <td style="padding:16px 0 0 0;font-weight:700;font-size:16px;color:#9B1B4E;text-align:right;">${currencySymbol}${total.toFixed(2)}</td>
            </tr>
          </table>
        </div>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align:center;padding:16px 0;">
              <a href="${BASE_URL}/library"
                   style="display:inline-block;background-color:#9B1B4E;color:white;text-decoration:none;padding:14px 36px;border-radius:12px;font-weight:600;font-size:16px;">
                Go to My Library
              </a>
            </td>
          </tr>
        </table>
        <div style="margin-top:24px;padding-top:20px;border-top:1px solid #F0DDE5;">
          <p style="color:#999;font-size:13px;line-height:1.6;margin:0 0 8px 0;">
            <strong>30-Day Money-Back Guarantee</strong> — If you're not satisfied, contact us within 30 days for a full refund. No questions asked.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="text-align:center;padding-top:30px;color:#999;font-size:12px;line-height:1.6;">
        <p>Thank you for choosing to invest in yourself.</p>
        <p>With care, the Fleurite team</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

/* ──────────────────────────────────────────────────────────────
   Referral Notification Email
   ────────────────────────────────────────────────────────────── */
export function getReferralRewardHtml(params: {
  referrerName?: string
  referredName?: string
  rewardDescription?: string
}): string {
  const { referrerName, referredName, rewardDescription = 'a 10% discount on your next purchase' } = params
  const greeting = referrerName ? `Hi ${referrerName}` : 'Hi there'
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Someone used your referral link!</title>
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
          <div style="display:inline-block;background:#FDF2F8;border-radius:50%;width:60px;height:60px;line-height:60px;text-align:center;font-size:28px;">&#127881;</div>
          <h2 style="color:#1a1a1a;margin:12px 0 4px 0;font-size:22px;">You Earned a Reward!</h2>
          <p style="color:#999;font-size:14px;">Your referral made a difference</p>
        </div>
        <p style="color:#666;line-height:1.7;margin:0 0 24px 0;">${greeting},<br/><br/>
          Great news! <strong style="color:#9B1B4E;">${referredName || 'Someone'}</strong> joined Fleurite using your referral link. As a thank-you, you've earned <strong style="color:#D4A574;">${rewardDescription}</strong>.
        </p>
        <div style="background:#FFFBF7;border-radius:12px;padding:20px;margin:0 0 24px 0;border-left:4px solid #D4A574;">
          <p style="color:#2D1B2E;margin:0;font-size:14px;line-height:1.7;">
            <strong>How to use your reward:</strong><br/>
            Your discount will be automatically applied at checkout on your next purchase. Share your referral link with more friends to earn additional rewards!
          </p>
        </div>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align:center;padding:16px 0;">
              <a href="${BASE_URL}/dashboard/referral"
                   style="display:inline-block;background-color:#9B1B4E;color:white;text-decoration:none;padding:14px 36px;border-radius:12px;font-weight:600;font-size:16px;">
                View Referral Stats
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="text-align:center;padding-top:30px;color:#999;font-size:12px;line-height:1.6;">
        <p>Keep spreading the love. Every referral counts.</p>
        <p>With care, the Fleurite team</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

/* ──────────────────────────────────────────────────────────────
   Newsletter Welcome Email
   ────────────────────────────────────────────────────────────── */
export function getNewsletterWelcomeHtml(name?: string): string {
  const greeting = name ? `Hi ${name}` : 'Hi there'
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to the Fleurite community</title>
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
        <h2 style="color:#1a1a1a;margin:0 0 16px 0;font-size:22px;">You're In!</h2>
        <p style="color:#666;line-height:1.7;margin:0 0 20px 0;">${greeting},<br/><br/>
          Welcome to the <strong style="color:#9B1B4E;">Fleurite</strong> community. You'll receive curated insights on attachment healing, relationship growth, and emotional wellness — straight to your inbox.
        </p>
        <div style="background:#FDF2F8;border-radius:12px;padding:20px;margin:0 0 20px 0;">
          <p style="color:#2D1B2E;margin:0;font-size:14px;line-height:1.7;">
            <strong>Here's what to expect:</strong><br/>
            &#8226; Weekly articles on attachment science and healing<br/>
            &#8226; Early access to new guides and resources<br/>
            &#8226; Exclusive reflections and journaling prompts<br/>
            &#8226; Community stories and real healing journeys
          </p>
        </div>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align:center;padding:16px 0;">
              <a href="${BASE_URL}/stories"
                   style="display:inline-block;background-color:#9B1B4E;color:white;text-decoration:none;padding:14px 36px;border-radius:12px;font-weight:600;font-size:16px;">
                Read Latest Articles
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="text-align:center;padding-top:30px;color:#999;font-size:12px;line-height:1.6;">
        <p>You can unsubscribe anytime. We respect your inbox.</p>
        <p>With care, the Fleurite team</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}
