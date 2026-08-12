# Email Flow — Brevo Integration

## Overview

Brevo handles transactional email delivery. Only ONE email type is sent: the download link after purchase.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    EMAIL FLOW                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Webhook/Confirm Route                                              │
│       │                                                              │
│       └──→ createAndSendDownloadEmail()                             │
│                 │                                                    │
│                 ├──→ Generate 24h download token                    │
│                 │    (crypto.randomBytes(32).toString('hex'))        │
│                 │                                                    │
│                 ├──→ Store token in VerificationToken table         │
│                 │    identifier = orderNumber                        │
│                 │    type = 'download_token'                         │
│                 │                                                    │
│                 ├──→ Build HTML email                               │
│                 │    getDownloadEmailHtml({                          │
│                 │      name, orderNumber, downloadUrl, productNames  │
│                 │    })                                              │
│                 │                                                    │
│                 ├──→ Send via Brevo API                             │
│                 │    POST https://api.brevo.com/v3/smtp/email       │
│                 │    Authorization: Bearer <API_KEY>                │
│                 │    From: Fleurite <noreply@fleurite.me>           │
│                 │                                                    │
│                 └──→ Log to EmailLog table                          │
│                                                                      │
│  Email Content:                                                      │
│  ┌──────────────────────────────────────────────────────┐           │
│  │ Subject: Your Fleurite Guide is Ready               │           │
│  │                                                      │           │
│  │ Hi {name},                                          │           │
│  │                                                      │           │
│  │ Your book is ready. Here's your download link:      │           │
│  │                                                      │           │
│  │ [Download Your Guide]                               │           │
│  │ → /api/download?token=xxx                           │           │
│  │                                                      │           │
│  │ Link expires in 24 hours.                           │           │
│  │                                                      │           │
│  │ — Fleurite team                                     │           │
│  └──────────────────────────────────────────────────────┘           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Brevo Setup

### Domain Verification
1. Dashboard → Settings → Senders, domains, IPs
2. Add domain: fleurite.me
3. Add DNS records (TXT, CNAME ×2, DMARC)
4. Verify in Brevo dashboard

### API Configuration
```env
BREVO_API_KEY="xkeysib-..."
```

### Sender
- From: `Fleurite <noreply@fleurite.me>`
- Reply-To: `support@fleurite.me`

---

## Free Tier Limits

| Limit | Value |
|-------|-------|
| Emails/day | 300 |
| Emails/month | ~9,000 |
| Contacts | Unlimited |
| Templates | 1 |
| Users | 1 |

---

## Email Template

The download email uses `getDownloadEmailHtml()` from `src/lib/download-email.ts`. It includes:
- Product name
- Order number
- Download button (links to `/api/download?token=xxx`)
- 24-hour expiry notice
- Support email link
- Fleurite branding

---

## Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| Email not sent | Brevo API key invalid | Check .env BREVO_API_KEY |
| Email in spam | Domain not verified | Complete DNS verification |
| Email not received | 300/day limit hit | Wait or upgrade plan |
| Email link broken | Token expired (24h) | Generate new token via support |
