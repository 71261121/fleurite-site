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
const CLAY = "#c6764f"
const INK = "#23271f"
const MUTE = "#5f6b5c"
const OAT = "#f4efe4"

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
      // clay accent bar
      doc.save().fillColor(CLAY).rect(startX, startY + 2, 3, 0).fill().restore()
      doc.font("Times-Italic").fontSize(13.5).fillColor(PINE_SOFT)
      const barX = startX
      const textX = startX + 16
      const beforeY = doc.y
      doc.text(block.text, textX, doc.y, {
        width: doc.page.width - PAGE.margin - textX,
        lineGap: 3,
      })
      const afterY = doc.y
      doc.save().fillColor(CLAY).rect(barX, beforeY, 3, afterY - beforeY).fill().restore()
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
      const padY = doc.y
      // label
      doc.font("Helvetica-Bold").fontSize(8.5).fillColor(CLAY).text(block.when.toUpperCase(), x + 14, padY + 12, {
        width: width - 28,
        characterSpacing: 0.5,
      })
      doc.moveDown(0.3)
      doc.font("Times-Italic").fontSize(12.5).fillColor(PINE).text(block.say, x + 14, doc.y, {
        width: width - 28,
        lineGap: 3,
      })
      if (block.why) {
        doc.moveDown(0.3)
        doc.font("Helvetica").fontSize(9.5).fillColor(MUTE).text("Why it works: " + block.why, x + 14, doc.y, {
          width: width - 28,
          lineGap: 2,
        })
      }
      const endY = doc.y + 12
      // card background drawn behind: emulate by a left accent + top/bottom rules
      doc.save().fillColor(CLAY).rect(x, padY, 3, endY - padY).fill().restore()
      doc.x = x
      doc.y = endY
      doc.moveDown(0.7)
      break
    }
    case "divider":
      drawDivider(doc)
      break
  }
}

function addChapter(doc: PDFKit.PDFDocument, chapter: Chapter, isFirst: boolean) {
  doc.addPage()
  if (chapter.part) {
    doc.font("Helvetica-Bold").fontSize(9).fillColor(CLAY).text(chapter.part.toUpperCase(), {
      characterSpacing: 1,
    })
    doc.moveDown(0.4)
  }
  if (chapter.number) {
    doc.font("Times-Italic").fontSize(12).fillColor(MUTE).text("Chapter " + chapter.number)
    doc.moveDown(0.1)
  }
  doc.font("Times-Bold").fontSize(26).fillColor(PINE).text(chapter.title, { lineGap: 2 })
  doc.moveDown(0.2)
  // clay underline
  const uy = doc.y
  doc.save().fillColor(CLAY).rect(doc.x, uy, 54, 2).fill().restore()
  doc.moveDown(1)
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
      doc.font("Helvetica").fontSize(10).fillColor("#bcd0c1").text("The Avoidant's Unwritten Rules", 0, doc.page.height - 120, {
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
