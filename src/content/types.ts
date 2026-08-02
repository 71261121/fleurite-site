// Shared content model for Fleurite books, workbook, and lead magnet.
// These structured modules are the single source of truth for both the
// on-site rendering and the generated PDFs.

export interface BookParagraph {
  type: "p"
  text: string
}

export interface BookHeading {
  type: "h"
  text: string
}

export interface BookQuote {
  type: "quote"
  text: string
}

export interface BookList {
  type: "list"
  ordered?: boolean
  items: string[]
}

export interface BookScriptBlock {
  type: "script"
  // The situation the script is for.
  situation: string
  // What to say.
  say: string
  // Why it works (the psychology).
  why: string
}

export interface BookCallout {
  type: "callout"
  label: string
  text: string
}

export type BookBlock =
  | BookParagraph
  | BookHeading
  | BookQuote
  | BookList
  | BookScriptBlock
  | BookCallout

export interface BookChapter {
  number: number
  title: string
  subtitle?: string
  blocks: BookBlock[]
}

export interface BookContent {
  slug: string
  title: string
  subtitle: string
  author: string
  // A short line printed on the cover / opening page.
  tagline: string
  // Front-matter opening note before chapter 1.
  opening: BookBlock[]
  chapters: BookChapter[]
  // Closing note after the final chapter.
  closing: BookBlock[]
}
