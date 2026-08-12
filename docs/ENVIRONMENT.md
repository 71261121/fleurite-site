# Environment Variables — fleurite.me

## Overview

All configuration is managed through environment variables. Some are set in `.env` (local development), others in Vercel dashboard (production).

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ENVIRONMENT VARIABLES                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DATABASE       2 variables   (Neon PostgreSQL)                     │
│  PAYMENTS       4 variables   (DodoPayments)                        │
│  EMAILS         1 variable    (Brevo SMTP)                          │
│  SECURITY       1 variable    (JWT secret)                          │
│  PUBLIC         1 variable    (Base URL)                            │
│                                                                      │
│  Total: 9 variables                                                  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Database Variables

### DATABASE_URL
```env
DATABASE_URL="postgresql://user:pass@host/dbname?sslmode=require"
```
**Source:** Neon Dashboard → Connection Details → Pooled connection
**Required:** Yes
**Used by:** `src/lib/db.ts` (Prisma client)

### DIRECT_URL
```env
DIRECT_URL="postgresql://user:pass@host/dbname?sslmode=require"
```
**Source:** Neon Dashboard → Connection Details → Direct connection
**Required:** Yes (for Prisma migrations)
**Used by:** `prisma/schema.prisma`

---

## Payment Variables (DodoPayments)

### DODO_PAYMENTS_API_KEY
```env
DODO_PAYMENTS_API_KEY="xkeysib-..."
```
**Source:** DodoPayments Dashboard → Settings → SMTP & API → API Keys
**Required:** Yes
**Test key format:** `iPnH8sMUv...`
**Live key format:** `oV12pyj2C...`
**Used by:** `src/app/api/checkout/dodo/route.ts`

### DODO_PAYMENTS_WEBHOOK_SECRET
```env
DODO_PAYMENTS_WEBHOOK_SECRET="whsec_..."
```
**Source:** DodoPayments Dashboard → Settings → Webhooks → Endpoint
**Required:** Yes
**Used by:** `src/app/api/webhook/dodo-payments/route.ts`

### DODO_PAYMENTS_ENVIRONMENT
```env
DODO_PAYMENTS_ENVIRONMENT="test_mode"  # or "live_mode"
```
**Source:** Manual set
**Required:** Yes
**Controls:** API endpoint selection (test.dodopayments.com vs live.dodopayments.com)
**Used by:** `src/app/api/checkout/dodo/route.ts`

### DODO_PAYMENTS_RETURN_URL
```env
DODO_PAYMENTS_RETURN_URL="https://www.fleurite.me/checkout/success"
```
**Source:** Manual set
**Required:** Yes
**Used by:** `src/app/api/checkout/dodo/route.ts`

---

## Product Variable

### NEXT_PUBLIC_DODO_PRODUCT_ID
```env
NEXT_PUBLIC_DODO_PRODUCT_ID="pdt_0Nl23SnmF2NApxxJ6hrQK"
```
**Source:** DodoPayments Dashboard → Products
**Required:** Yes
**Test product:** `pdt_0Nl0tDPCDBQkR4G2I6lfS` ($0.50)
**Live product:** `pdt_0Nl23SnmF2NApxxJ6hrQK` ($27)
**Used by:** `src/components/CheckoutSheet.tsx`

---

## Email Variable

### BREVO_API_KEY
```env
BREVO_API_KEY="xkeysib-..."
```
**Source:** Brevo Dashboard → Settings → SMTP & API → API Keys
**Required:** Yes
**Free tier:** 300 emails/day
**Used by:** `src/lib/email.ts`

---

## Security Variable

### JWT_SECRET
```env
JWT_SECRET="your-secret-key-here"
```
**Source:** Generate random string
**Required:** Yes
**Used by:** `src/lib/auth-utils.ts`

---

## Public Variable

### NEXT_PUBLIC_BASE_URL
```env
NEXT_PUBLIC_BASE_URL="https://www.fleurite.me"
```
**Source:** Manual set
**Required:** Yes
**Used by:** Email templates, download URLs

---

## Switching Between Test and Live

### Test Mode:
```bash
echo "test_mode" | npx vercel env add DODO_PAYMENTS_ENVIRONMENT production
echo "pdt_0Nl0tDPCDBQkR4G2I6lfS" | npx vercel env add NEXT_PUBLIC_DODO_PRODUCT_ID production
echo "iPnH8sMUv..." | npx vercel env add DODO_PAYMENTS_API_KEY production
echo "whsec_iVw..." | npx vercel env add DODO_PAYMENTS_WEBHOOK_SECRET production
npx vercel --prod --yes
```

### Live Mode:
```bash
echo "live_mode" | npx vercel env add DODO_PAYMENTS_ENVIRONMENT production
echo "pdt_0Nl23SnmF2NApxxJ6hrQK" | npx vercel env add NEXT_PUBLIC_DODO_PRODUCT_ID production
echo "oV12pyj2C..." | npx vercel env add DODO_PAYMENTS_API_KEY production
echo "whsec_KUIq..." | npx vercel env add DODO_PAYMENTS_WEBHOOK_SECRET production
npx vercel --prod --yes
```
