/**
 * Branded PDF generator for Fleurite books.
 * Turns a structured `Book` (see src/content/book.ts) into a real, typeset
 * PDF buffer. Uses PDFKit's built-in Times/Helvetica fonts so there are no
 * external font-file dependencies at runtime.
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
const SAND = "#f7f2ed"

// Section tint colors for chapter openers
const SECTION_COLORS: Record<string, string> = {
  see: PINE_DARK,
  calm: "#4a3728",
  stand: "#2d3a4a",
  choose: "#3a2d4a",
}

const PAGE = { margin: 72 } // 1 inch

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
      doc.moveDown(0.3)
      const startX = doc.x
      const startY = doc.y
      // oat background box
      doc.save().fillColor(OAT).rect(startX, startY, doc.page.width - PAGE.margin * 2, 0).fill().restore()
      // clay accent bar
      doc.save().fillColor(CLAY).rect(startX, startY + 2, 3, 0).fill().restore()
      doc.font("Times-Italic").fontSize(15).fillColor(PINE_SOFT)
      const barX = startX
      const textX = startX + 16
      doc.text(block.text, textX, doc.y, {
        width: doc.page.width - PAGE.margin - textX,
        lineGap: 3,
        characterSpacing: 0.5,
      })
      const afterY = doc.y
      doc.save().fillColor(CLAY).rect(barX, startY, 4, afterY - startY + 4).fill().restore()
      doc.x = startX
      doc.moveDown(0.8)
      break
    }
    case "list":
      doc.font("Times-Roman").fontSize(11.5).fillColor(INK)
      block.items.forEach((item) => {
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
      const cardY = doc.y

      // 1. OAT card background — full height estimated after content
      // We draw the left CLAY accent bar after content is placed

      // 2. PINE top label strip
      doc.save()
        .fillColor(PINE)
        .rect(x, cardY, width, 22)
        .fill()
        .restore()

      doc.font("Helvetica-Bold").fontSize(8).fillColor(OAT).text(block.when.toUpperCase(), x + 14, cardY + 6, {
        width: width - 28,
        characterSpacing: 0.5,
      })
      doc.y = cardY + 22 + 10

      // 3. Script text (italic, PINE_SOFT)
      doc.font("Times-Italic").fontSize(12).fillColor(PINE_SOFT).text(block.say, x + 14, doc.y, {
        width: width - 28,
        lineGap: 3,
      })

      // 4. Why separator + why text
      if (block.why) {
        doc.moveDown(0.3)
        const sepY = doc.y
        doc.save().fillColor(CLAY).rect(x + 14, sepY, width - 28, 0.5).fill().restore()
        doc.moveDown(0.4)
        doc.font("Helvetica").fontSize(9.5).fillColor(MUTE).text("WHY IT WORKS: " + block.why, x + 14, doc.y, {
          width: width - 28,
          lineGap: 2,
        })
      }

      const endY = doc.y + 14

      // 5. CLAY left accent bar (full card height)
      doc.save().fillColor(CLAY).rect(x, cardY, 3, endY - cardY).fill().restore()

      // 6. OAT background rectangle (behind everything, draw last as transparent overlay approximation)
      // PDFKit limitation: we draw a subtle OAT tint as a border frame instead
      doc.save().strokeColor(OAT).lineWidth(1).rect(x + 4, cardY, width - 4, endY - cardY).stroke().restore()

      doc.x = x
      doc.y = endY
      doc.moveDown(0.7)
      break
    }
    case "reader_map": {
      const x = doc.x
      const width = doc.page.width - PAGE.margin - x
      const startY = doc.y

      // PINE header
      doc.save()
        .fillColor(PINE)
        .rect(x, startY, width, 24)
        .fill()
        .restore()
      doc.font("Helvetica-Bold").fontSize(9).fillColor(OAT)
        .text(block.title.toUpperCase(), x + 12, startY + 6, { width: width - 24, characterSpacing: 0.8 })

      let y = startY + 24
      block.items.forEach((item, i) => {
        const bg = i % 2 === 0 ? OAT : "#ffffff"
        doc.save().fillColor(bg).rect(x, y, width, 22).fill().restore()
        doc.font("Times-Roman").fontSize(10).fillColor(INK)
          .text(item.situation, x + 12, y + 5, { width: width * 0.6, continued: false })
        doc.font("Helvetica-Bold").fontSize(10).fillColor(CLAY)
          .text(item.page, x + width * 0.6 + 10, y + 5, { width: width * 0.35, align: "right" })
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

function addChapter(doc: PDFKit.PDFDocument, chapter: Chapter, isFirst: boolean) {
  doc.addPage()

  // Determine section color from part text
  let sectionTint = PINE_DARK
  const partLower = (chapter.part || "").toLowerCase()
  if (partLower.includes("see")) sectionTint = SECTION_COLORS.see
  else if (partLower.includes("calm")) sectionTint = SECTION_COLORS.calm
  else if (partLower.includes("stand")) sectionTint = SECTION_COLORS.stand
  else if (partLower.includes("choose")) sectionTint = SECTION_COLORS.choose

  // Full-width dark section block at top
  doc.save().fillColor(sectionTint).rect(0, 0, doc.page.width, 80).fill().restore()

  if (chapter.part) {
    doc.font("Helvetica-Bold").fontSize(9).fillColor(OAT).text(chapter.part.toUpperCase(), PAGE.margin, 28, {
      characterSpacing: 1,
      width: doc.page.width - PAGE.margin * 2,
    })
    doc.y = 28
  }
  if (chapter.number) {
    doc.font("Times-Italic").fontSize(11).fillColor("#bcd0c1")
      .text("Chapter " + chapter.number, PAGE.margin, 44, {
        width: doc.page.width - PAGE.margin * 2,
      })
    doc.y = 44
  }
  // Chapter title on dark background
  doc.font("Times-Bold").fontSize(24).fillColor(OAT).text(chapter.title, PAGE.margin, 58, {
    lineGap: 2,
    width: doc.page.width - PAGE.margin * 2,
  })

  doc.y = 90
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
      book.chapters.forEach((ch, i) => addChapter(doc, ch, i === 0))

      // ---- PAGE NUMBERS / FOOTER (skip cover) ----
      const range = doc.bufferedPageRange()
      for (let i = 1; i < range.count; i++) {
        doc.switchToPage(i)
        const bottom = doc.page.height - 48
        doc
          .font("Helvetica")
          .fontSize(8)
          .fillColor(MUTE)
          .text(book.brand + "  ·  " + book.title, PAGE.margin, bottom, {
            align: "left",
            width: doc.page.width - PAGE.margin * 2,
            lineBreak: false,
          })
        doc
          .font("Helvetica")
          .fontSize(8)
          .fillColor(MUTE)
          .text(String(i), PAGE.margin, bottom, {
            align: "right",
            width: doc.page.width - PAGE.margin * 2,
            lineBreak: false,
          })
      }

      doc.end()
    } catch (err) {
      reject(err)
    }
  })
}
