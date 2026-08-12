# Payment Flow — DodoPayments Integration

## Overview

DodoPayments acts as **Merchant of Record** — meaning they handle payment processing, tax compliance, fraud protection, and currency conversion. We don't touch card details directly.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PAYMENT FLOW                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Step 1: Customer clicks "Get Instant Access — $27"                │
│     │                                                                │
│     ▼                                                                │
│  Step 2: CheckoutSheet opens → enters email → clicks "Pay Now"     │
│     │                                                                │
│     ▼                                                                │
│  Step 3: POST /api/checkout/dodo                                    │
│     │                                                                │
│     ├──→ Creates DodoPayments payment session                       │
│     ├──→ Returns checkout_url                                      │
│     │                                                                │
│     ▼                                                                │
│  Step 4: Customer redirected to DodoPayments checkout              │
│     │                                                                │
│     ├──→ Enters card details                                        │
│     ├──→ Clicks "Pay"                                               │
│     │                                                                │
│     ▼                                                                │
│  Step 5: DodoPayments processes payment                            │
│     │                                                                │
│     ├──→ Webhook fires → /api/webhook/dodo-payments                │
│     │    ├── Creates order in database                              │
│     │    ├── Generates 24h download token                           │
│     │    └── Sends download email via Brevo                         │
│     │                                                                │
│     └──→ Redirects to /checkout/success?payment_id=xxx            │
│          ├── Shows "Download Your Book Now" button                  │
│          └── Calls /api/checkout/dodo-success for immediate link   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Test Mode vs Live Mode

| Feature | Test Mode | Live Mode |
|---------|-----------|-----------|
| API Key | `iPnH8sMUv...` | `oV12pyj2C...` |
| Webhook | `whsec_iVw...` | `whsec_KUIq...` |
| Environment | `test_mode` | `live_mode` |
| API Endpoint | `test.dodopayments.com` | `live.dodopayments.com` |
| Product ID | `pdt_0Nl0tDPCDBQkR4G2I6lfS` ($0.50) | `pdt_0Nl23SnmF2NApxxJ6hrQK` ($27) |
| Card charges | No real charges | Real $27 charge |
| Test cards | `4242 4242 4242 4242` | N/A (real cards) |

---

## Switching Test ↔ Live

### Commands (copy-paste ready):

**Switch to Test Mode:**
```bash
cd "C:/Users/mdsal/OneDrive/Desktop/Femin-Clone/femin-bloom-clone"
npx vercel env rm DODO_PAYMENTS_API_KEY production --yes
npx vercel env rm DODO_PAYMENTS_WEBHOOK_SECRET production --yes
npx vercel env rm DODO_PAYMENTS_ENVIRONMENT production --yes
npx vercel env rm NEXT_PUBLIC_DODO_PRODUCT_ID production --yes

echo "iPnH8sMUvxXDM9Ao.VzjZvy_G4KZS_P4pBVz_4pgrfxqIEgqS89LWMnqgzncyCseu" | npx vercel env add DODO_PAYMENTS_API_KEY production
echo "whsec_iVweZosnjtIOkSpbAWs04RVDKIpJf9TF" | npx vercel env add DODO_PAYMENTS_WEBHOOK_SECRET production
echo "test_mode" | npx vercel env add DODO_PAYMENTS_ENVIRONMENT production
echo "pdt_0Nl0tDPCDBQkR4G2I6lfS" | npx vercel env add NEXT_PUBLIC_DODO_PRODUCT_ID production
npx vercel --prod --yes
```

**Switch to Live Mode:**
```bash
cd "C:/Users/mdsal/OneDrive/Desktop/Femin-Clone/femin-bloom-clone"
npx vercel env rm DODO_PAYMENTS_API_KEY production --yes
npx vercel env rm DODO_PAYMENTS_WEBHOOK_SECRET production --yes
npx vercel env rm DODO_PAYMENTS_ENVIRONMENT production --yes
npx vercel env rm NEXT_PUBLIC_DODO_PRODUCT_ID production --yes

echo "oV12pyj2C_NwVHuQ._h0ZFTXHlkoIli-8hUQ_SUmfMFEDTgtEieFKfAdEI1Uvsd9h" | npx vercel env add DODO_PAYMENTS_API_KEY production
echo "whsec_KUIqU8JgSFjf3Q9LhGS7jmprQuhGC/JL" | npx vercel env add DODO_PAYMENTS_WEBHOOK_SECRET production
echo "live_mode" | npx vercel env add DODO_PAYMENTS_ENVIRONMENT production
echo "pdt_0Nl23SnmF2NApxxJ6hrQK" | npx vercel env add NEXT_PUBLIC_DODO_PRODUCT_ID production
npx vercel --prod --yes
```

---

## Webhook Events

| Event | What Happens |
|-------|-------------|
| `payment.succeeded` | Order created, download email sent |
| `payment.failed` | Logged (no order created) |
| `payment.cancelled` | Logged (no order created) |
| `payment.processing` | Logged (waiting) |
| `refund.succeeded` | Order marked as 'refunded' |
| `refund.failed` | Logged (refund failed) |

---

## Error Handling

| Scenario | What Happens |
|----------|-------------|
| DodoPayments API down | CheckoutSheet shows error message |
| Invalid API key | 401 error, fallback message |
| Invalid product ID | 422 error, fallback message |
| Webhook fails | Order not created, customer gets no email |
| Email fails | Order still created, download link lost |
| PDF file missing | Runtime generation fallback (slow) |
