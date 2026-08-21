# Attribution — tracing a sale back to the Instagram post that made it

Deployed 2026-08-21 (commit `9257d56`). This document is the operational record:
what exists, why, and how to verify it.

## The chain

```
brief_id (post) -> comment_id -> private-reply DM -> ?ref=<code>
  -> AttributionClick row -> Dodo payment metadata -> webhook -> Order.attributionRef
```

Before this change the chain broke at its first step: nothing on the site read
query parameters, the Dodo checkout call sent no metadata, and `Order` had no
attribution column. A sale could never be linked to the post that produced it.

## Files

| File | Role |
|---|---|
| `src/lib/attribution.ts` | ref/post sanitizers, dual persistence (localStorage + cookie), Dodo metadata builder |
| `src/components/AttributionCapture.tsx` | captures `?ref=` on any entry page; mounted in `layout.tsx` inside `Suspense` |
| `src/app/api/attribution/click/route.ts` | logs a click; no personal data |
| `src/app/api/attribution/report/route.ts` | token-gated funnel report consumed by Cortex |
| `src/app/api/checkout/dodo/route.ts` | forwards re-validated metadata to Dodo |
| `src/app/api/webhook/dodo-payments/route.ts` | reads metadata back, persists it on the Order |
| `src/components/CheckoutSheet.tsx` | reads attribution at pay time |
| `prisma/migrations/20260821120000_attribution/` | 3 nullable Order columns + AttributionClick table + 3 indexes |

## Environment

`CORTEX_REPORT_TOKEN` — bearer token for `GET /api/attribution/report`. **The
route returns 503 when it is unset**, by design: an unauthenticated endpoint
exposing revenue would be worse than a missing feature. Set in Vercel production
and in local `.env`. Cortex must hold the same value.

## Database notes

- Production had **no `_prisma_migrations` table** before this deploy: the schema
  had been created with `prisma db push`. `20260802113517_init` was therefore
  baselined with `prisma migrate resolve --applied` before
  `prisma migrate deploy` could run. Doing this in the wrong order would have
  attempted a full `CREATE TABLE` script against a live database with real
  orders, failed, and left a failed-migration record blocking all future deploys.
- `schema.prisma` `directUrl` reads `env("DIRECT_URL")`. It previously read
  `DATABASE_URL_UNPOOLED`, which exists in neither `.env` nor Vercel — migrations
  would have run through the Neon **pooler**, a documented failure mode.
- The migration SQL is **idempotent** (`IF NOT EXISTS` throughout), so it is safe
  to re-run and safe after any future `db push`.
- **`Order.amount` is stored in MINOR units (cents).** A $27 sale is `2700`.
  Verified against production data. The report route returns `revenue` in dollars
  and `revenue_minor` in raw cents.

## Failure behaviour (deliberate)

- Attribution **never blocks a sale.** Storage failures, a blocked cookie, a
  failed click log, or an absent ref all leave checkout working.
- The click endpoint returns **200 even on internal error** — analytics must not
  affect a visitor.
- Webhook order creation **retries without the attribution fields** if the
  columns are missing. Losing an attribution tag is acceptable; losing a paid
  customer's book is not.
- The report route returns **503 unconfigured, 401 on a bad token**.

## Privacy

`AttributionClick` stores only the sanitized `ref`/`post` plus a truncated
user-agent and referer. No IP, no email, no cookie contents. The `ref` is an
opaque hash issued in the DM.

## Verification (run after any redeploy)

```bash
# 401 without a token
curl -s -o /dev/null -w '%{http_code}\n' https://www.fleurite.me/api/attribution/report

# 200 with the token
curl -s -H "Authorization: Bearer $CORTEX_REPORT_TOKEN" \
  'https://www.fleurite.me/api/attribution/report?since_days=30'

# click endpoint accepts a valid ref and rejects a malformed one
curl -s -X POST https://www.fleurite.me/api/attribution/click \
  -H 'Content-Type: application/json' -d '{"ref":"flzzztest01","post":"b999"}'
curl -s -X POST https://www.fleurite.me/api/attribution/click \
  -H 'Content-Type: application/json' -d '{"ref":"not-a-ref"}'

# migration state
npx prisma migrate status
```

Delete any synthetic test clicks afterwards so reporting starts clean.

## Deploy procedure for future schema changes

The repo's general procedure (`docs/DEPLOYMENT.md`) does not mention the
database. For anything touching Prisma:

```bash
npx prisma generate            # regenerate the client from schema.prisma
npx tsc --noEmit               # typecheck against the new client
npm run build                  # confirm the build succeeds locally
npx prisma migrate status      # confirm the DB is in a known state
npx prisma migrate deploy      # apply migrations FIRST
git push origin master
npx vercel --prod --yes        # then deploy the code
```

Migration before code deploy, always: the deployed client expects the columns to
exist, and `postinstall: prisma generate` means Vercel builds a client from the
committed schema regardless of the database's actual state.
