# Fleurite.me — Relationship Coaching Digital Product Platform

## What Is This?

A complete digital product business built with Next.js 16. Sells a psychology-backed digital book called **"The Avoidant's Unwritten Rules"** for $27 USD. Handles payment, delivery, and customer communication — all automated.

---

## Tech Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    FLEURITE.ME STACK                         │
├─────────────────────────────────────────────────────────────┤
│  Frontend:     Next.js 16 (App Router) + Tailwind CSS v4   │
│  Backend:      Next.js API Routes (6 routes)                │
│  Database:     Prisma ORM → Neon PostgreSQL                 │
│  Payments:     DodoPayments (Merchant of Record)            │
│  Emails:       Brevo SMTP API (300/day free tier)           │
│  Hosting:      Vercel (Serverless)                          │
│  Domain:       fleurite.me (Namecheap DNS)                  │
│  Language:     TypeScript                                   │
│  State:        Zustand (checkout sheet)                     │
│  Animations:   Framer Motion                                │
└─────────────────────────────────────────────────────────────┘
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env with your keys (see docs/ENVIRONMENT.md)

# 3. Set up database
npx prisma db push

# 4. Run development server
npm run dev

# 5. Open browser
open http://localhost:3000
```

---

## Project Structure

```
fleurite-site/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── layout.tsx               # Root layout (fonts, SEO, CheckoutGateway)
│   │   ├── page.tsx                 # Homepage sales page
│   │   ├── globals.css              # Tailwind + custom styles
│   │   ├── about/page.tsx           # About page
│   │   ├── contact/page.tsx         # Contact form
│   │   ├── privacy/page.tsx         # Privacy policy
│   │   ├── products/page.tsx        # Products comparison
│   │   ├── checkout/success/        # Post-payment page
│   │   └── api/                     # 6 API routes
│   ├── components/                   # 16 React components
│   ├── lib/                         # Utilities, email, DB, store
│   └── middleware.ts                # Security headers
├── prisma/                          # Database schema
├── private/                         # PDF book file (protected)
├── public/                          # Static assets (images, favicon)
└── docs/                            # This documentation
```

---

## Key Commands

| Command | What It Does |
|---------|--------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npx prisma db push` | Push schema changes to database |
| `npx prisma generate` | Regenerate Prisma client |
| `npx vercel --prod --yes` | Deploy to Vercel production |

---

## How It Makes Money

```
Customer sees landing page → Clicks "Get Instant Access — $27"
    → Enters email → Clicks "Pay Now"
    → DodoPayments checkout page
    → Pays $27 with card
    → Success page shows "Download Your Book Now" button
    → Email sent with download link
    → Customer downloads PDF book
```

**Revenue model:** One-time $27 payment per customer. No subscriptions. No recurring billing.

---

## Documentation

| File | What It Covers |
|------|---------------|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | System architecture, data flow, component hierarchy |
| [docs/API.md](docs/API.md) | All 6 API routes with request/response specs |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | How to deploy to Vercel |
| [docs/ENVIRONMENT.md](docs/ENVIRONMENT.md) | All environment variables explained |
| [docs/DATABASE.md](docs/DATABASE.md) | Prisma schema and models |
| [docs/PAYMENT_FLOW.md](docs/PAYMENT_FLOW.md) | DodoPayments integration details |
| [docs/EMAIL_FLOW.md](docs/EMAIL_FLOW.md) | Brevo email delivery system |
| [docs/BOOK_DELIVERY.md](docs/BOOK_DELIVERY.md) | How the PDF gets to customers |
| [docs/COMPONENTS.md](docs/COMPONENTS.md) | All 16 React components explained |
| [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) | Common issues and fixes |
| [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) | Development guidelines |

---

## License

Private project — Fleurite.me
