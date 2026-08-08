/**
 * Branded PDF generator for Fleurite books.
 * Turns a structured `Book` (see src/content/book.ts) into a real, typeset
 * PDF buffer. Uses PDFKit's built-in Times/Helvetica fonts so there are no
 * external font-file dependencies at runtime.
 *
 * FIXES (2026-08-08):
 *  - Footer written via `pageAdded` event (canonical pattern) — the old
 *    switchToPage loop wrote footers below the content boundary (y=794 vs
 *    maxY=770), which made PDFKit auto-add ~2 phantom pages per footer.
 *  - Chapter openers: part/number live in the dark block; title renders on
 *    white below it (no more overflow/overlap of long titles).
 *  - Script cards & quotes: measured with heightOfString + page-break guard
 *    so a block never orphans across pages.
 */

import PDFDocument from "pdfkit"
import type { Book, Block, Chapter } from "@/content/book"

// Fleurite palette (matches the site design tokens)
const PINE = "#2f4a3c"
const PINE_SOFT = "#436a51"
const PINE_DARK = "#1e3228"
const CLAY = "#c6764f"
const INK = "#23271f"
const MUTE = "#5f6b5c"
const OAT = "#f4efe4"

// Section tint colors for chapter openers
const SECTION_COLORS: Record<string, string> = {
  see: PINE_DARK,
  calm: "#4a3728",
  stand: "#2d3a4a",
  choose: "#3a2d4a",
}

const PAGE = { margin: 72 } // 1 inch

/** Max Y a text line may occupy before PDFKit would auto-add a page. */
function contentBottom(doc: PDFKit.PDFDocument): number {
  return doc.page.height - PAGE.margin
}

function drawDivider(doc: PDFKit.PDFDocument) {
  doc.moveDown(0.6)
  const y = doc.y
  const cx = doc.page.width / 2
  doc.save()
  doc.fillColor(CLAY)
  // three small diamonds as an ornamental break
  for (let i = -1; i <= 1; i++) {
    const x = cx + i * 16
    doc.moveTo(x, y).lineTo(x + 3, y + 3).lineTo(x, y + 6).lineTo(x - 3, y + 3).fill()
  }
  doc.restore()
  doc.moveDown(1)
  doc.fillColor(INK)
}

function renderBlock(doc: PDFKit.PDFDocument, block: Block) {
  const bottom = contentBottom(doc)

  switch (block.type) {
    case "h1":
      doc.moveDown(0.5)
      doc.font("Times-Bold").fontSize(22).fillColor(PINE).text(block.text, { align: "left" })
      doc.moveDown(0.6)
      break

    case "h2":
      doc.moveDown(0.6)
      doc.font("Times-Bold").fontSize(14).fillColor(CLAY).text(block.text)
      doc.moveDown(0.3)
      break

    case "p":
      doc.font("Times-Roman").fontSize(11.5).fillColor(INK).text(block.text, {
        align: "left",
        lineGap: 4,
      })
      doc.moveDown(0.6)
      break

    case "quote": {
      doc.font("Times-Italic").fontSize(15).fillColor(PINE_SOFT)
      const textX = doc.x + 16
      const textW = doc.page.width - PAGE.margin - textX
      const qH = doc.heightOfString(block.text, { width: textW, lineGap: 3, characterSpacing: 0.5 })
      const boxH = qH + 20

      // Page-break guard: keep the whole quote on one page
      if (doc.y + boxH > bottom) doc.addPage()

      const startX = doc.x
      const startY = doc.y
      // OAT background box
      doc.save().fillColor(OAT).rect(startX, startY, doc.page.width - PAGE.margin * 2, boxH).fill().restore()
      // quote text
      doc.text(block.text, startX + 16, startY + 10, { width: textW, lineGap: 3, characterSpacing: 0.5 })
      // CLAY accent bar (full box height)
      doc.save().fillColor(CLAY).rect(startX, startY, 4, boxH).fill().restore()
      doc.x = startX
      doc.y = startY + boxH + 4
      doc.moveDown(0.8)
      break
    }

    case "list":
      doc.font("Times-Roman").fontSize(11.5).fillColor(INK)
      block.items.forEach((item) => {
        if (doc.y + 34 > bottom) doc.addPage()
        const x = doc.x
        doc.save().fillColor(CLAY).circle(x + 3, doc.y + 6, 1.8).fill().restore()
        doc.text(item, x + 14, doc.y, {
          width: doc.page.width - PAGE.margin - (x + 14),
          lineGap: 3,
        })
        doc.x = x
        doc.moveDown(0.45)
      })
      doc.moveDown(0.3)
      break

    case "script": {
      const x = doc.x
      const width = doc.page.width - PAGE.margin - x
      const innerW = width - 28

      // Measure each part so the whole card stays on one page
      const labelH = doc.heightOfString(block.when.toUpperCase(), {
        width: innerW,
        characterSpacing: 0.5,
      })
      const stripH = Math.max(22, labelH + 10)
      const sayH = doc.heightOfString(block.say, { width: innerW, lineGap: 3 })
      const whyH = block.why
        ? doc.heightOfString("WHY IT WORKS: " + block.why, { width: innerW, lineGap: 2 })
        : 0
      const cardH = stripH + 8 + sayH + (block.why ? 6 + whyH : 0) + 14

      // Page-break guard: script cards never split across pages
      if (doc.y + cardH > bottom) doc.addPage()

      const cardY = doc.y
      // 1. OAT card background (full height)
      doc.save().fillColor(OAT).rect(x, cardY, width, cardH).fill().restore()
      // 2. PINE top strip with WHEN label
      doc.save().fillColor(PINE).rect(x, cardY, width, stripH).fill().restore()
      doc.font("Helvetica-Bold").fontSize(8).fillColor(OAT).text(
        block.when.toUpperCase(),
        x + 14,
        cardY + 6,
        { width: innerW, characterSpacing: 0.5 }
      )
      // 3. Script text (italic, PINE_SOFT)
      doc.y = cardY + stripH + 8
      doc.font("Times-Italic").fontSize(12).fillColor(PINE_SOFT).text(block.say, x + 14, doc.y, {
        width: innerW,
        lineGap: 3,
      })
      // 4. WHY separator + why text
      if (block.why) {
        doc.moveDown(0.3)
        const sepY = doc.y
        doc.save().fillColor(CLAY).rect(x + 14, sepY, innerW, 0.5).fill().restore()
        doc.moveDown(0.4)
        doc.font("Helvetica").fontSize(9.5).fillColor(MUTE).text(
          "WHY IT WORKS: " + block.why,
          x + 14,
          doc.y,
          { width: innerW, lineGap: 2 }
        )
      }
      // 5. CLAY left accent bar (full card height)
      const endY = doc.y + 14
      doc.save().fillColor(CLAY).rect(x, cardY, 3, endY - cardY).fill().restore()
      doc.x = x
      doc.y = endY
      doc.moveDown(0.7)
      break
    }

    case "reader_map": {
      const x = doc.x
      const width = doc.page.width - PAGE.margin - x
      const rmH = 24 + block.items.length * 22

      // Page-break guard
      if (doc.y + rmH + 20 > bottom) doc.addPage()

      const startY = doc.y
      // PINE header
      doc.save().fillColor(PINE).rect(x, startY, width, 24).fill().restore()
      doc.font("Helvetica-Bold").fontSize(9).fillColor(OAT).text(
        block.title.toUpperCase(),
        x + 12,
        startY + 6,
        { width: width - 24, characterSpacing: 0.8 }
      )
      let y = startY + 24
      block.items.forEach((item, i) => {
        const bg = i % 2 === 0 ? OAT : "#ffffff"
        doc.save().fillColor(bg).rect(x, y, width, 22).fill().restore()
        doc.font("Times-Roman").fontSize(10).fillColor(INK).text(
          item.situation,
          x + 12,
          y + 5,
          { width: width * 0.6 }
        )
        doc.font("Helvetica-Bold").fontSize(10).fillColor(CLAY).text(
          item.page,
          x + width * 0.6 + 10,
          y + 5,
          { width: width * 0.35, align: "right" }
        )
        doc.y = y + 22
        y += 22
      })
      // Border
      doc.save().strokeColor(PINE).lineWidth(1).rect(x, startY, width, y - startY).stroke().restore()
      doc.moveDown(1)
      break
    }

    case "divider":
      drawDivider(doc)
      break
  }
}

function addChapter(doc: PDFKit.PDFDocument, chapter: Chapter) {
  doc.addPage()

  // Determine section tint from part text
  let sectionTint = PINE_DARK
  const partLower = (chapter.part || "").toLowerCase()
  if (partLower.includes("see")) sectionTint = SECTION_COLORS.see
  else if (partLower.includes("calm")) sectionTint = SECTION_COLORS.calm
  else if (partLower.includes("stand")) sectionTint = SECTION_COLORS.stand
  else if (partLower.includes("choose")) sectionTint = SECTION_COLORS.choose

  const width = doc.page.width - PAGE.margin * 2

  // Dark section block (part + chapter number only — title lives below)
  doc.save().fillColor(sectionTint).rect(0, 0, doc.page.width, 80).fill().restore()

  if (chapter.part) {
    doc.font("Helvetica-Bold").fontSize(9).fillColor(OAT).text(
      chapter.part.toUpperCase(),
      PAGE.margin,
      26,
      { width, characterSpacing: 1 }
    )
  }
  if (chapter.number) {
    doc.font("Times-Italic").fontSize(11).fillColor("#bcd0c1").text(
      "Chapter " + chapter.number,
      PAGE.margin,
      46,
      { width }
    )
  }

  // Chapter title on white below the block (long titles wrap freely, no overlap)
  doc.y = 100
  doc.font("Times-Bold").fontSize(24).fillColor(PINE).text(chapter.title, { lineGap: 2 })
  doc.moveDown(0.2)
  const uy = doc.y
  doc.save().fillColor(CLAY).rect(doc.x, uy, 54, 2).fill().restore()
  doc.moveDown(0.8)
  doc.fillColor(INK)

  chapter.blocks.forEach((b) => renderBlock(doc, b))
}

export async function generateBookPdf(book: Book): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        margins: { top: PAGE.margin, bottom: PAGE.margin, left: PAGE.margin, right: PAGE.margin },
        bufferPages: true,
        info: {
          Title: book.title,
          Author: book.author,
          Subject: book.subtitle,
        },
      })

      const chunks: Buffer[] = []
      doc.on("data", (c) => chunks.push(c as Buffer))
      doc.on("end", () => resolve(Buffer.concat(chunks)))
      doc.on("error", reject)

      // ---- FOOTERS via pageAdded (canonical pattern — no phantom pages) ----
      // Every page gets brand + page number at the bottom of the content area.
      // Written BEFORE content flows, then y is reset to the top so content
      // never collides with the footer.
      let pageNum = 0
      doc.on("pageAdded", () => {
        pageNum++
        if (pageNum <= 1) return // skip cover
        const bottom = doc.page.height - PAGE.margin - 14 // within content bounds
        doc.font("Helvetica").fontSize(8).fillColor(MUTE)
        doc.text(book.brand + "  ·  " + book.title, PAGE.margin, bottom, {
          align: "left",
          width: doc.page.width - PAGE.margin * 2,
          lineBreak: false,
        })
        doc.text(String(pageNum - 1), PAGE.margin, bottom, {
          align: "right",
          width: doc.page.width - PAGE.margin * 2,
          lineBreak: false,
        })
        doc.y = PAGE.margin // reset so content starts at the top
      })

      // ---- COVER ----
      doc.save().fillColor(PINE).rect(0, 0, doc.page.width, doc.page.height).fill().restore()
      // clay frame
      doc
        .save()
        .strokeColor(CLAY)
        .lineWidth(1.5)
        .rect(40, 40, doc.page.width - 80, doc.page.height - 80)
        .stroke()
        .restore()
      doc.fillColor(OAT)
      doc.font("Helvetica-Bold").fontSize(11).text(book.brand.toUpperCase(), 0, 120, {
        align: "center",
        characterSpacing: 4,
      })
      doc.moveDown(2)
      doc.font("Times-Bold").fontSize(46).fillColor(OAT).text(book.title, 60, 220, {
        align: "center",
        width: doc.page.width - 120,
        lineGap: 4,
      })
      doc.moveDown(1)
      doc.font("Times-Italic").fontSize(14).fillColor("#dfe9e1").text(book.subtitle, 80, doc.y, {
        align: "center",
        width: doc.page.width - 160,
        lineGap: 3,
      })
      // bottom ornament
      doc.save().fillColor(CLAY)
      const cx = doc.page.width / 2
      for (let i = -1; i <= 1; i++) {
        const x = cx + i * 18
        const yb = doc.page.height - 150
        doc.moveTo(x, yb).lineTo(x + 4, yb + 4).lineTo(x, yb + 8).lineTo(x - 4, yb + 4).fill()
      }
      doc.restore()
      doc.font("Helvetica").fontSize(10).fillColor("#bcd0c1").text(book.title, 0, doc.page.height - 120, {
        align: "center",
        characterSpacing: 2,
      })

      // ---- FRONT MATTER ----
      doc.addPage()
      book.frontMatter.forEach((b) => renderBlock(doc, b))

      // ---- CHAPTERS ----
      book.chapters.forEach((ch) => addChapter(doc, ch))

      doc.end()
    } catch (err) {
      reject(err)
    }
  })
}
