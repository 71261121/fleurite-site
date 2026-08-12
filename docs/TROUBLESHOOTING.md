# Troubleshooting — fleurite.me

## Build Errors

### "Module not found" errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npx prisma generate
```

### TypeScript errors
```bash
# Check for type errors
npx tsc --noEmit

# Clear build cache
rm -rf .next
npm run build
```

### Prisma errors
```bash
# Regenerate client
npx prisma generate

# Push schema changes
npx prisma db push

# If migration issues
npx prisma migrate reset
```

---

## Deployment Issues

### Vercel build fails
- Check `npm run build` passes locally first
- Verify all environment variables are set in Vercel dashboard
- Check Vercel build logs for specific errors

### Environment variables not working
```bash
# List all variables
npx vercel env ls

# Verify specific variable
npx vercel env ls | grep DODO_PAYMENTS_API_KEY
```

### Domain not resolving
- Check Namecheap DNS records (A record @ → 76.76.21.21)
- Check Vercel domain settings
- DNS propagation can take 24-48 hours

---

## Payment Issues

### DodoPayments checkout not working
1. Check `DODO_PAYMENTS_API_KEY` is set correctly
2. Check `DODO_PAYMENTS_ENVIRONMENT` is `test_mode` or `live_mode`
3. Check `NEXT_PUBLIC_DODO_PRODUCT_ID` exists in DodoPayments dashboard
4. Test with: `curl -X POST https://www.fleurite.me/api/checkout/dodo -H "Content-Type: application/json" -d '{"product_cart":[{"product_id":"pdt_xxx","quantity":1}],"customer":{"email":"test@test.com","name":"Test"},"return_url":"https://www.fleurite.me/checkout/success"}'`

### Webhook not firing
1. Check `DODO_PAYMENTS_WEBHOOK_SECRET` matches dashboard
2. Check webhook URL is `https://www.fleurite.me/api/webhook/dodo-payments`
3. Check DodoPayments dashboard → Webhooks → Activity tab

### Test mode vs live mode confusion
- Test: `test.dodopayments.com` + test API key + test product
- Live: `live.dodopayments.com` + live API key + live product
- Switch: See docs/ENVIRONMENT.md for exact commands

---

## Email Issues

### Emails not sending
1. Check `BREVO_API_KEY` is set
2. Check Brevo domain verification (fleurite.me)
3. Check Brevo dashboard → Transactional → Logs
4. Check daily limit (300/day on free tier)

### Emails going to spam
- Complete domain verification in Brevo
- Add SPF, DKIM, DMARC DNS records
- Wait 24-48 hours for DNS propagation

### Download link not working
- Token expires after 24 hours
- Check token exists in VerificationToken table
- Check order status is 'paid'

---

## PDF Issues

### PDF not downloading
- Check `private/the-avoidants-unwritten-rules.pdf` exists
- Check file size (should be ~125KB)
- Check download route: `GET /api/download?token=xxx&action=file`

### PDF missing from private/
- Re-generate PDF externally
- Copy to `private/the-avoidants-unwritten-rules.pdf`
- Commit and deploy

---

## Database Issues

### Connection refused
- Check `DATABASE_URL` in .env
- Check Neon dashboard for database status
- Check `DIRECT_URL` for migrations

### Prisma client not generated
```bash
npx prisma generate
```

### Migration failed
```bash
npx prisma db push --accept-data-loss
```

---

## Common Vercel Issues

### "Not authorized" error
```bash
npx vercel login
```

### Build cache issues
```bash
npx vercel --prod --yes --force
```

### Environment variables not updating
```bash
# Remove and re-add
npx vercel env rm VARIABLE_NAME production --yes
echo "new_value" | npx vercel env add VARIABLE_NAME production
npx vercel --prod --yes
```
