const BREVO_API_KEY = process.env.BREVO_API_KEY || null

const FROM_EMAIL = 'noreply@fleurite.me'
const FROM_DISPLAY = 'Fleurite'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3005'

export interface SendEmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: SendEmailOptions): Promise<boolean> {
  // If Brevo is not configured, just log
  if (!BREVO_API_KEY) {
    console.log(`[Email] Brevo not configured. Would send to: ${to}`)
    console.log(`[Email] Subject: ${subject}`)
    return false
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: FROM_DISPLAY, email: FROM_EMAIL },
        to: [{ email: to }],
        subject,
        htmlContent: html,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('[Email] Brevo error:', response.status, data)
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

    console.log(`[Email] Sent to ${to}: ${data.messageId}`)
    return true
  } catch (err) {
    console.error('[Email] Exception:', err)
    return false
  }
}
