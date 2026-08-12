# System Architecture — fleurite.me

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        FLEURITE.ME ARCHITECTURE                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐          │
│  │   CUSTOMER    │    │   VERCEL      │    │  DODOPAYMENTS │          │
│  │   (Browser)   │───→│   (Hosting)   │───→│  (Payments)   │          │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘          │
│         │                    │                    │                  │
│         ▼                    ▼                    ▼                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐          │
│  │   Next.js     │    │   Prisma      │    │   Brevo       │          │
│  │   (App Router)│───→│   (ORM)       │───→│   (Emails)    │          │
│  └──────────────┘    └──────┬───────┘    └──────────────┘          │
│                              │                                       │
│                              ▼                                       │
│                       ┌──────────────┐                              │
│                       │   Neon DB     │                              │
│                       │   (PostgreSQL)│                              │
│                       └──────────────┘                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Request Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CUSTOMER JOURNEY                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. Customer visits fleurite.me                                      │
│     │                                                                │
│     ▼                                                                │
│  2. Reads landing page (Hero → Pain Points → Reviews → Product)     │
│     │                                                                │
│     ▼                                                                │
│  3. Clicks "Get Instant Access — $27"                               │
│     │                                                                │
│     ▼                                                                │
│  4. CheckoutSheet opens (email input + "Pay Now")                   │
│     │                                                                │
│     ▼                                                                │
│  5. POST /api/checkout/dodo → DodoPayments API                      │
│     │                                                                │
│     ▼                                                                │
│  6. Customer redirected to DodoPayments checkout page               │
│     │                                                                │
│     ▼                                                                │
│  7. Customer pays $27                                                │
│     │                                                                │
│     ├──→ Success page (/checkout/success?payment_id=xxx)            │
│     │    └── Shows "Download Your Book Now" button                   │
│     │                                                                │
│     └──→ Webhook fires (POST /api/webhook/dodo-payments)            │
│          ├── Creates order in database                               │
│          ├── Generates 24h download token                            │
│          └── Sends download email via Brevo                          │
│                                                                      │
│  8. Customer downloads PDF from email link                           │
│     └── GET /api/download?token=xxx&action=file                     │
│         └── Serves private/the-avoidants-unwritten-rules.pdf        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
src/app/layout.tsx (Root Layout)
├── CheckoutGateway (global checkout sheet)
│   └── CheckoutSheet (slide-over checkout UI)
├── {children} (page content)
│   └── src/app/page.tsx (Homepage)
│       ├── AnnouncementBar (top urgency bar)
│       ├── Header (sticky nav + CTA)
│       ├── Hero (headline + book cover)
│       ├── ProblemAgitation (pain points)
│       ├── SocialProof (testimonials)
│       ├── ProductBreakdown (4 pillars)
│       ├── CreatorBio (Lena's story)
│       ├── FAQ (8 questions)
│       └── Footer (links + legal)
├── StickyBar (bottom CTA on scroll)
└── Footer
```

## Database Schema

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DATABASE MODELS                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  User ──────────┐                                                    │
│  (id, email,    │                                                    │
│   name, role)   │                                                    │
│                 ├──→ Order ──────────→ OrderItem                     │
│                 │    (id, orderNumber,  (id, productName,           │
│                 │     userId, status,    price, productId)           │
│                 │     amount, currency,                              │
│                 │     paymentMethod,                                 │
│                 │     paidAt, customerEmail)                         │
│                 │                                                    │
│                 ├──→ CheckoutSession                                 │
│                 │    (id, userId, stripeSessionId,                   │
│                 │     amount, status, expiresAt)                     │
│                 │                                                    │
│                 └──→ LibraryItem                                     │
│                      (id, userId, productId, accessType)            │
│                                                                      │
│  VerificationToken                                                   │
│  (identifier, token, expires, type)                                  │
│                                                                      │
│  EmailLog                                                             │
│  (to, subject, template, status)                                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Payment Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PAYMENT FLOW                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  CheckoutSheet.tsx                                                  │
│       │                                                              │
│       ├──→ POST /api/checkout/dodo                                  │
│       │         │                                                    │
│       │         ├──→ DodoPayments API (live.dodopayments.com)       │
│       │         │    Creates payment with payment_link: true         │
│       │         │    Returns checkout_url                           │
│       │         │                                                    │
│       │         └──→ Customer redirected to checkout_url            │
│       │                                                              │
│       ├──→ Customer pays on DodoPayments page                       │
│       │                                                              │
│       ├──→ Webhook fires: POST /api/webhook/dodo-payments           │
│       │         │                                                    │
│       │         ├──→ Creates Order in DB (status: paid)              │
│       │         ├──→ Creates 24h download token                     │
│       │         ├──→ Sends download email via Brevo                 │
│       │         └──→ Logs to EmailLog                               │
│       │                                                              │
│       └──→ Success page (/checkout/success?payment_id=xxx)          │
│                 │                                                    │
│                 ├──→ POST /api/checkout/dodo-success                 │
│                 │    Returns downloadUrl                             │
│                 │                                                    │
│                 └──→ Shows "Download Your Book Now" button          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Email Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    EMAIL FLOW                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Webhook/Confirm Route                                              │
│       │                                                              │
│       └──→ createAndSendDownloadEmail()                             │
│                 │                                                    │
│                 ├──→ Generate 24h download token (crypto.randomBytes)│
│                 ├──→ Store token in VerificationToken table          │
│                 ├──→ Build HTML email (getDownloadEmailHtml)         │
│                 ├──→ Send via Brevo API (POST /v3/smtp/email)       │
│                 └──→ Log to EmailLog table                          │
│                                                                      │
│  Email Content:                                                      │
│  ┌──────────────────────────────────────────────────────┐           │
│  │ Subject: Your Fleurite Guide is Ready               │           │
│  │                                                      │           │
│  │ "Hi {name},                                         │           │
│  │  Your book is ready. Click below to download."     │           │
│  │                                                      │           │
│  │  [Download Your Guide] → /api/download?token=xxx   │           │
│  │                                                      │           │
│  │  Link expires in 24 hours.                         │           │
│  └──────────────────────────────────────────────────────┘           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Security Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SECURITY LAYERS                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Layer 1: Middleware (middleware.ts)                                 │
│  ├── X-Frame-Options: DENY                                         │
│  ├── X-Content-Type-Options: nosniff                                │
│  ├── Referrer-Policy: strict-origin-when-cross-origin               │
│  ├── X-XSS-Protection: 1; mode=block                                │
│  ├── Permissions-Policy: camera=(), microphone=()                   │
│  └── Strict-Transport-Security: max-age=31536000                    │
│                                                                      │
│  Layer 2: PDF Protection                                            │
│  ├── PDF stored in private/ (not public/)                           │
│  ├── Only served via /api/download?token=xxx&action=file            │
│  ├── Token verified against DB (VerificationToken table)            │
│  ├── 24-hour expiry enforced                                        │
│  └── Order must be status='paid'                                    │
│                                                                      │
│  Layer 3: Payment Security                                          │
│  ├── DodoPayments = Merchant of Record (handles fraud)              │
│  ├── Server-side price validation (ignores client amount)           │
│  └── Webhook signature verification                                 │
│                                                                      │
│  Layer 4: API Security                                              │
│  ├── POST /api/download removed (dead code)                         │
│  ├── No unauthenticated endpoints serving paid content              │
│  └── Email validation on checkout                                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Key Design Decisions

### Why DodoPayments (not Stripe)?
- DodoPayments is Merchant of Record = handles tax, fraud, compliance
- Simpler API (one endpoint for checkout)
- Supports 80+ currencies automatically
- Free tier: 300 emails/day via Brevo integration
- Test mode available without verification

### Why static PDF (not runtime generation)?
- Predictable performance (no PDFKit overhead at runtime)
- Simple: replace file = new book version
- No dependencies (pdfkit, book.ts content files removed)
- Fallback path exists if file missing

### Why single-product architecture?
- One book, one price, one checkout flow
- No cart complexity needed
- Simpler webhook handling
- Easier to optimize conversion

### Why no authentication?
- Guest checkout only (no login/register)
- Reduces friction for $27 impulse purchase
- Download token replaces traditional auth
- Email is the only identifier needed
