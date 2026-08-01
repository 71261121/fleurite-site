# Fleurite — Relationship Clarity System

A premium e-commerce landing page for women navigating anxious attachment patterns in relationships.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** Prisma + Neon PostgreSQL
- **Payments:** Stripe + Razorpay (dual integration)
- **Email:** Resend
- **State:** Zustand (cart with localStorage persist)
- **UI:** Radix UI + shadcn components
- **Styling:** Tailwind CSS 4

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your database and API keys

# Generate Prisma client
npx prisma generate

# Run development server
npm run dev
```

## Environment Variables

See `.env.example` for required variables:
- `DATABASE_URL` / `DIRECT_URL` — Neon PostgreSQL
- `STRIPE_SECRET_KEY` — Stripe payments
- `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` — Razorpay payments (optional)
- `RESEND_API_KEY` — Email delivery
- `JWT_SECRET` — Authentication

## Deployment

Deployed on Vercel with Neon database.

## License

Private — All rights reserved.
