/**
 * Core type definitions for Fleurite book content.
 * Shared by all content parts and the PDF renderer.
 */

export type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "script"; when: string; say: string; why?: string }
  | { type: "reader_map"; title: string; items: Array<{ situation: string; page: string }> }
  | { type: "divider" }

export type Chapter = {
  part?: string
  number?: string
  title: string
  blocks: Block[]
}

export type Book = {
  slug: string
  title: string
  subtitle: string
  author: string
  brand: string
  year: number
  frontMatter: Block[]
  chapters: Chapter[]
}