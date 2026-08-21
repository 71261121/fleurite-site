import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

const SUPPORT_INBOX = 'support@fleurite.me'
const MAX_MESSAGE_LENGTH = 4000

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { name, email, message } = (body ?? {}) as {
    name?: unknown
    email?: unknown
    message?: unknown
  }

  const cleanName = typeof name === 'string' ? name.trim() : ''
  const cleanEmail = typeof email === 'string' ? email.trim() : ''
  const cleanMessage = typeof message === 'string' ? message.trim() : ''

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return NextResponse.json(
      { error: 'Name, email and message are all required.' },
      { status: 400 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    )
  }

  if (cleanMessage.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` },
      { status: 400 }
    )
  }

  const html = `
    <h2>New contact form message</h2>
    <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br />')}</p>
  `

  // sendEmail returns false when the mail provider is not configured. The
  // submission is still accepted so the visitor is never shown a false failure,
  // but `delivered` reports the real state instead of pretending success.
  const delivered = await sendEmail({
    to: SUPPORT_INBOX,
    subject: `Contact form — ${cleanName}`,
    html,
  })

  return NextResponse.json({ received: true, delivered })
}
