/**
 * "The Avoidant's Unwritten Rules"
 * Complete paid book for Fleurite.me — assembled from modular content parts.
 * Structure:
 *   FRONT MATTER (1-6)   — Resentment-first validation + Reader Map
 *   SECTION 1: SEE       — The 5 Unwritten Rules (chapters 1-5)
 *   SECTION 2: CALM      — Nervous System Protocol (chapters 6-9)
 *   SECTION 3: STAND     — 47 word-for-word scripts (chapters 10-16)
 *   SECTION 4: CHOOSE    — 3-Question Decision Framework (chapters 17-18)
 *   BACK MATTER (19-20)  — 7-Day Implementation Map + Final Word
 */

import type { Book } from "./types";
import { FRONT_MATTER, SEE_CHAPTERS } from "./part-see";
import { SEE_CHAPTERS_2_5 } from "./part-see-2-5";
import { CALM_CHAPTERS } from "./part-calm";
import { STAND_CHAPTERS } from "./part-stand";
import { CHOOSE_CHAPTERS } from "./part-choose";
import { BACK_CHAPTERS } from "./part-back";

export type { Book, Block, Chapter } from "./types";

export const BOOK: Book = {
  slug: "the-avoidants-unwritten-rules",
  title: "The Avoidant's Unwritten Rules",
  subtitle:
    "5 hidden dynamics of every avoidant relationship — and the framework to stay calm, stand your ground, and decide: stay or go. On your terms.",
  author: "Lena",
  brand: "Fleurite.me",
  year: 2026,
  frontMatter: FRONT_MATTER,
  chapters: [
    ...SEE_CHAPTERS,
    ...SEE_CHAPTERS_2_5,
    ...CALM_CHAPTERS,
    ...STAND_CHAPTERS,
    ...CHOOSE_CHAPTERS,
    ...BACK_CHAPTERS,
  ],
}