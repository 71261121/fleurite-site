-- Attribution: trace a sale back to the Instagram DM link that produced it.
-- Columns are nullable so every existing order remains valid; a null ref simply
-- means the purchase was organic or predates attribution.
--
-- Every statement is idempotent (IF NOT EXISTS). Production's schema was created
-- with `prisma db push`, so there is no `_prisma_migrations` history and this
-- migration will be baselined via `migrate resolve --applied`. Idempotency means
-- re-running it, or running it after a future `db push`, can never fail.

-- AlterTable
ALTER TABLE "Order" ADD COLUMN IF NOT EXISTS "attributionRef" TEXT;
ALTER TABLE "Order" ADD COLUMN IF NOT EXISTS "attributionPost" TEXT;
ALTER TABLE "Order" ADD COLUMN IF NOT EXISTS "attributionSource" TEXT;

-- CreateTable
CREATE TABLE IF NOT EXISTS "AttributionClick" (
    "id" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "post" TEXT,
    "userAgent" TEXT,
    "referer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttributionClick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Order_attributionRef_idx" ON "Order"("attributionRef");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "AttributionClick_ref_idx" ON "AttributionClick"("ref");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "AttributionClick_createdAt_idx" ON "AttributionClick"("createdAt");
