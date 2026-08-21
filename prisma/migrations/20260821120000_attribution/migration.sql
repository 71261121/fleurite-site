-- Attribution: trace a sale back to the Instagram DM link that produced it.
-- Columns are nullable so every existing order remains valid; a null ref simply
-- means the purchase was organic or predates attribution.

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "attributionRef" TEXT,
ADD COLUMN     "attributionPost" TEXT,
ADD COLUMN     "attributionSource" TEXT;

-- CreateTable
CREATE TABLE "AttributionClick" (
    "id" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "post" TEXT,
    "userAgent" TEXT,
    "referer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttributionClick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Order_attributionRef_idx" ON "Order"("attributionRef");

-- CreateIndex
CREATE INDEX "AttributionClick_ref_idx" ON "AttributionClick"("ref");

-- CreateIndex
CREATE INDEX "AttributionClick_createdAt_idx" ON "AttributionClick"("createdAt");
