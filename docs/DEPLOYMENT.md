# Deployment Guide — fleurite.me

## Prerequisites

- Node.js 18+ installed
- Vercel account (vercel.com)
- Neon database (neon.tech)
- DodoPayments account (dodopayments.com)
- Brevo account (brevo.com)
- Namecheap domain (fleurite.me)

---

## First-Time Setup

### 1. Clone and Install
```bash
git clone https://github.com/71261121/fleurite-site.git
cd fleurite-site
npm install
```

### 2. Environment Variables
```bash
cp .env.example .env
# Edit .env with all required variables (see docs/ENVIRONMENT.md)
```

### 3. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 4. Deploy to Vercel
```bash
npx vercel --prod --yes
```

### 5. Set Vercel Environment Variables
```bash
# Add each variable to Vercel production environment
echo "value" | npx vercel env add VARIABLE_NAME production
```

---

## Domain Configuration

### Namecheap DNS Records
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | Automatic |
| CNAME | www | cname.vercel-dns.com | Automatic |

### DodoPayments Domain Verification
1. Dashboard → Settings → Senders, domains, IPs
2. Add domain: fleurite.me
3. Select "Manual" setup
4. Add 4 DNS records to Namecheap:
   - TXT: @ → brevo-code:xxx
   - CNAME: brevo1._domainkey → b1.fleurite-me.dkim.brevo.com
   - CNAME: brevo2._domainkey → b2.fleurite-me.dkim.brevo.com
   - TXT: _dmarc → v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com
5. Click "Verify records" → "Authenticate domain"

### Brevo Domain Verification
1. Dashboard → Settings → Senders, domains, IPs
2. Add domain: fleurite.me
3. Follow same DNS record process as DodoPayments

---

## Deploying Updates

```bash
# Make changes
git add -A
git commit -m "description of changes"
git push origin master

# Deploy to production
npx vercel --prod --yes
```

---

## Environment Switching (Test ↔ Live)

### Switch to Test Mode:
```bash
npx vercel env rm DODO_PAYMENTS_API_KEY production --yes
npx vercel env rm DODO_PAYMENTS_WEBHOOK_SECRET production --yes
npx vercel env rm DODO_PAYMENTS_ENVIRONMENT production --yes
npx vercel env rm NEXT_PUBLIC_DODO_PRODUCT_ID production --yes

echo "iPnH8sMUv..." | npx vercel env add DODO_PAYMENTS_API_KEY production
echo "whsec_iVw..." | npx vercel env add DODO_PAYMENTS_WEBHOOK_SECRET production
echo "test_mode" | npx vercel env add DODO_PAYMENTS_ENVIRONMENT production
echo "pdt_0Nl0tDPCDBQkR4G2I6lfS" | npx vercel env add NEXT_PUBLIC_DODO_PRODUCT_ID production

npx vercel --prod --yes
```

### Switch to Live Mode:
```bash
npx vercel env rm DODO_PAYMENTS_API_KEY production --yes
npx vercel env rm DODO_PAYMENTS_WEBHOOK_SECRET production --yes
npx vercel env rm DODO_PAYMENTS_ENVIRONMENT production --yes
npx vercel env rm NEXT_PUBLIC_DODO_PRODUCT_ID production --yes

echo "oV12pyj2C..." | npx vercel env add DODO_PAYMENTS_API_KEY production
echo "whsec_KUIq..." | npx vercel env add DODO_PAYMENTS_WEBHOOK_SECRET production
echo "live_mode" | npx vercel env add DODO_PAYMENTS_ENVIRONMENT production
echo "pdt_0Nl23SnmF2NApxxJ6hrQK" | npx vercel env add NEXT_PUBLIC_DODO_PRODUCT_ID production

npx vercel --prod --yes
```

---

## Updating the Book

```bash
# 1. Generate new PDF (any tool)
# 2. Replace the file:
cp new-book.pdf private/the-avoidants-unwritten-rules.pdf
# 3. Commit and deploy
git add private/the-avoidants-unwritten-rules.pdf
git commit -m "feat: update book to v2"
git push origin master
npx vercel --prod --yes
```
