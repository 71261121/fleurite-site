export type {
  BookContent,
  BookChapter,
  BookBlock,
  BookParagraph,
  BookHeading,
  BookQuote,
  BookList,
  BookScriptBlock,
  BookCallout,
} from "./types"

export { bookMain } from "./book-main"
export { bookWorkbook } from "./book-workbook"
export { leadMagnet } from "./lead-magnet"

import { bookMain } from "./book-main"
import { bookWorkbook } from "./book-workbook"

// The paid product is the 2-part bundle.
export const bundleBooks = [bookMain, bookWorkbook] as const
