# FLEURITE — FULL EXECUTION PLAN
## The Avoidant's Unwritten Rules — Book Production
### Micro-Level Execution Blueprint | Git-Safe | Reversible at Every Step

**Version:** 1.0  
**Date:** 2026-08-08  
**Repo:** `fleurite-site` (github.com/71261121/fleurite-site.git)  
**Branch:** `master` (baseline tagged)  
**Baseline:** `baseline-v1-before-book-rewrite` ✅

---

## 🎯 MISSION
Transform current codebase from **site-only (old book content)** → **fully-aligned product**:
- Site promises: "The Avoidant's Unwritten Rules" — 5 rules + 47 scripts + framework
- PDF MUST deliver exactly what site promises
- Zero refund risk, zero state loss, full reversibility via git

---

## 🔀 GIT STRATEGY (Reversibility Core)

```
GLOBAL RULES:
1. Har phase ke baad: npm run build + npm run lint → PASS required
2. Har phase: 1 conventional commit (message: feat/fix/refactor: specific)
3. Major milestones: git tag (milestone-v1, v2, ...)
4. Agar kuch toota: git checkout <prev-commit> ─── state reversal
5. Root-level backup: baseline-v1-before-book-rewrite (created ✅)
```

---

## PHASE 0: BASELINE ✅ DONE

| Step | Action | Status |
|------|--------|--------|
| 0.1 | `git status` — working tree clean | ✅ |
| 0.2 | Tag: `baseline-v1-before-book-rewrite` | ✅ |
| 0.3 | Verify: `git tag` shows baseline | ✅ |

**Reversal:** `git checkout baseline-v1-before-book-rewrite -- .`

---

## PHASE 1: BOOK METADATA + FRONT MATTER (Pages 1-6)
**File:** `src/content/book.ts`  
**Commit:** `feat(book): new book.ts — The Avoidant's Unwritten Rules metadata + front matter`

### 1.1 Update Book Object
```typescript
slug: 'the-avoidants-unwritten-rules',
title: "The Avoidant's Unwritten Rules",
subtitle: '5 hidden dynamics of every avoidant relationship — and the framework to stay calm, stand your ground, and decide: stay or go. On your terms.',
author: 'Lena',
brand: 'Fleurite.me',
year: 2026,
```

### 1.2 Front Matter (Pages 1-6)
- Page 1: Book cover (rendered by pdf.ts — none in book.ts)
- Pages 2-3: "Before You Read One More Word"
  - Resentment validation FIRST (mandatory anti-refund)
  - Reader Map grid (6 situations → page numbers)
- Pages 4-5: "What To Know Before Page One" — 3 verbatim paragraphs
  - "You are not broken — the situation wasn't"
  - "Scripts work today, protocol works tonight"
  - "Nothing depends on him changing"

### 1.3 Block Type Extension
```typescript
| { type: 'reader_map'; title: string; items: Array<{ situation: string; page: string }> }
```

**VERIFY:** `npm run build` → `npm run lint` → new frontMatter renders without errors  
**COMMIT:** `feat: book.ts metadata + front matter — resentment-first validation + reader map`

---

## PHASE 2: SECTION 1 — THE 5 UNWRITTEN RULES (Pages 7-28)
**File:** `src/content/book.ts` (chapters array)  
**Commit(s):** one per rule (5 commits)

| Rule | Pages | Title | Core |
|------|-------|-------|------|
| 1 | 8-12 | "He doesn't pull away because you did something wrong. Closeness is his trigger." | Intimacy = threat → trigger exercise |
| 2 | 13-16 | "The more you explain your feelings, the less safe he feels." | Engulfment → "Name, Not Explain" protocol |
| 3 | 17-20 | "His silence is a regulation strategy. You pay the cost." | Silence = labor transfer → Silence Budget |
| 4 | 21-24 | "He comes back expecting nothing changed. For him, nothing did." | Emotional reset → Re-Entry Script (23) |
| 5 | 25-28 | "You keep getting blamed for reacting to behavior he won't acknowledge." | DARVO → Recognition Checklist |

Each rule: `{ type: 'h1' }` opener → resentment hook paragraph → psychology → tool/script.

**VERIFY:** build + lint per commit.  
**COMMIT (5):** `feat(book): Section 1 — Rule N: <title>`  

---

## PHASE 3: SECTION 2 — NERVOUS SYSTEM PROTOCOL (Pages 29-44)
**File:** `src/content/book.ts` (chapters 6-9)

| Chapter | Pages | Title | Protocol |
|---------|-------|-------|----------|
| 6 | 30-34 | 90-Second Interrupt | 5 steps (Time/Locate/Breathe/Delay/Grounded) |
| 7 | 35-38 | The Reality Anchor | 3 checks + anchor sentence |
| 8 | 39-41 | Sleep Protocol | 3 rules (10pm boundary, 3-word anchor) |
| 9 | 42-44 | Days 1-7 Emergency Plan | Day-by-day mini-protocol |

**Mandatory framing (section intro):**
> "A regulated body is not a passive body. It is a strategic one."

**VERIFY:** build + lint.  
**COMMIT:** `feat(book): Section 2 — Nervous System Protocol (90s Interrupt, Reality Anchor, Sleep, 7-day)`

---

## PHASE 4: SECTION 3 — 47 SCRIPTS (Pages 45-80)
**File:** `src/content/book.ts` (chapters 10-13)  
**Target:** ALL 47 scripts, groups A-G, each `{type:'script', when, say, why}`

| Group | Scripts | Topic | Status |
|-------|---------|-------|--------|
| A | 1-9 | When He Pulls Away | ✅ in masterplan (write in) |
| B | 10-16 | When He Shuts Down Mid-Conversation | ✅ public masterplan |
| C | 17-24 | Ghosting Protocol (Hour-by-Hour) | ✅ public masterplan |
| D | 25-31 | When He Calls You "Too Much" | ⚠️ NEEDS WRITING |
| E | 32-38 | Setting a Boundary | ⚠️ NEEDS WRITING |
| F | 39-43 | When He Comes Back | ⚠️ NEEDS WRITING (Script 41 = Walk-Away, EXACT 19 words) |
| G | 44-47 | Leave/Closure | ⚠️ NEEDS WRITING |

**SCRIPT 41 — THE WALK-AWAY TEXT — EXACT 19 WORDS:**
> "I've decided I can't keep doing this version of us. I'm letting you go. I truly wish you well."
> Count: I've(1) decided(2) I(3) can't(4) keep(5) doing(6) this(7) version(8) of(9) us(10) I'm(11) letting(12) you(13) go(14) I(15) truly(16) wish(17) you(18) well(19) ✅

**VERIFY:** `grep -c "type: \"script\"" src/content/book.ts` → 47  
**VERIFY:** Script 41 exact 19-word count manually  
**COMMIT(s):** `feat(book): Section 3 — scripts A-C (1-24)`, `scripts D (□-□1)`, `E (32-38)`, `F (39-43) 19-word walkaway`, `G (44-47)`

---

## PHASE 5: SECTION 4 — 3-QUESTION DECISION FRAMEWORK (Pages 81-90)
**File:** `src/content/book.ts` (chapters 14-15)

### Q1 — What has he consistency DONE? (behavioral, 90-day lookback)
### Q2 — Is this improving, or adjusting standards downward? (gap analysis)
### Q3 — Where is this realistically headed in 6 months? (projection)

**Decision Matrix (3 outcomes — Stay / Stand / Leave)**
| Pattern | Outcome | Action |
|---------|---------|--------|
| Improving + Holding + Good | STAY | Boundary scripts (Group E) |
| Stagnant + Drifting + No-change | STAND | Clarity Conversation scripts |
| Worsening + Collapsing + Exit | LEAVE | Group G scripts |

### Closing (Chapter 15)
- One page per audience segment (5 total)
- Final pull quote alone: "The relationship was never the question. You were never waiting for him to decide. You were always waiting for yourself."

**VERIFY:** build + lint + structure intact  
**COMMIT:** `feat(book): Section 4 — 3-Question Framework + decision matrix + segment closing`

---

## PHASE 6: BACK MATTER + PDF VISUAL UPGRADE
**Files:** `src/content/book.ts` (appendix) + `src/lib/pdf.ts`

### 6.1 Back Matter (Pages 91-94)
- 7-Day Implementation Map (91-93): Day 1-7 actions
- Final page 94: "You're reading the complete edition... No questions asked." + `— Lena · Fleurite.me · 2026`

### 6.2 pdf.ts Design Upgrade (from masterplan Phase 7)
1. **New tokens:** PINE_DARK `#1e3228`, SAND `#f7f2ed`
2. **Script card redesign** (6-layer):
   - OAT background `#f4efe5` fill
   - PINE top strip: "SCRIPT [N] — GROUP" (Helvetica-Bold 9pt)
   - CLAY "WHEN TO USE" label
   - Times-Italic 12pt PINE_SOFT script text
   - Thin CLAY separator + WHY text
   - CLAY left accent bar (3px full height)
3. **Chapter opener:** section-colored blocks (PINE_DARK / brown / navy / plum)
4. **Pull quote:** 15pt, wider margin, 4px bar, OAT bg box
5. **New render:** `reader_map` styled grid

**VERIFY:** `npm run build` → generate test PDF locally → open visually  
**COMMIT:** `feat(book): back matter + pdf.ts visual design upgrade (script cards, chapter openers, reader_map block)`

---

## PHASE 7: SITE INTEGRATION CHANGES
**Files:** multiple components + routes

### 7.1 `ProductBreakdown.tsx` — Script 7 Preview
Add full script preview box in STAND pillar card (from master Step 8.1)

### 7.2 `FAQ.tsx` — Reader Map Question (Q0)
Add: "Is this addressed to any specific situation?" → Reader Map answer

### 7.3 `paid-book/route.ts` — PDF filename + import fix (CRITICAL)
- Change import: `generatePaidPDF` → `generateBookPdf` from `/lib/pdf`
- Filename: `the-avoidants-unwritten-rules.pdf`
- (Currently uses legacy `pdf-generator.ts` → "stop-shrinking-yourself.pdf")

### 7.4 Legacy `pdf-generator.ts` — delete (after verified replacement)
- Verify no import of `pdf-generator` anywhere
- Delete or rename to `.legacy.ts`

**VERIFY:** `grep -r "pdf-generator" src/` → no imports  
**COMMIT:** `feat(site): Script 7 preview, Reader Map FAQ, paid-book filename fix + legacy delete`

---

## PHASE 8: VERIFICATION CHECKLIST (MANDATORY — BEFORE DEPLOY)

### Content
- [ ] Script 41 EXACT 19 words (manual count)
- [ ] "The Avoidant's Unwritten Rules" in pdf.ts cover line
- [ ] Reader Map on pages 2-3, correct page numbers
- [ ] All 47 scripts have when + say + why
- [ ] 5 segments addressed in Chapter 15
- [ ] 3-Question has all 3 questions
- [ ] Decision matrix 3 outcomes
- [ ] Final pull quote alone on a page
- [ ] "Nothing depends on him changing" in front matter

### Technical
- [ ] `npm run build` clean
- [ ] `npm run lint` clean
- [ ] PDF generates without errors (local test)
- [ ] Download: `the-avoidants-unwritten-rules.pdf` filename
- [ ] No "Stop Shrinking Yourself" / "The Rooted Method" in codebase
- [ ] `npm run build` in production

### Anti-Refund
- [ ] Resentment validation before page 3
- [ ] Reader Map pages 2-3, correct pages
- [ ] "Nothing requires therapy-level work" in front
- [ ] "Nothing depends on him changing" in front
- [ ] Script cards visually distinct

---

## PHASE 9: DEPLOY & GIT SAFETY

```
1. git add -A && git commit -m "feat: full book production live"
2. git push origin master
3. git tag -a v1.0-book-rewrite -m "Book aligned with site promise"
4. git push origin --tags
5. Deploy: Vercel (npx vercel --prod --yes)
6. Post-deploy: local access→ URL + download PDF → verify content matches site
```

**REVERSAL PROTOCOL:**
- Any failure at any phase: `git checkout <phase-tag>` 
- Root baseline: `baseline-v1-before-book-rewrite`
- Complete revert: `git reset --hard baseline-v1-before-book-rewrite`

---

## EXECUTION ORDER (FINAL)
```
PHASE ORDER:  0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9
MUST-NOT-SKIP: 8 (verification) before 9 (deploy)
EACH PHASE:    implement → build → lint → commit
```

## FILE MAP (what changes where)
| File | Change |
|------|--------|
| `src/content/book.ts` | Full rewrite: metadata, front matter, 15 chapters, back matter |
| `src/lib/pdf.ts` | Visual upgrade: colors, cards, openers, reader_map |
| `src/app/api/downloads/paid-book/route.ts` | Import fix + filename |
| `src/components/ProductBreakdown.tsx` | Script 7 preview |
| `src/components/FAQ.tsx` | Reader Map Q0 |
| `src/lib/pdf-generator.ts` | DELETE (legacy) |
| `package.json` | (optional) add pdf script |

---

*Convention: Har commit message English, description suffix would be `-phase-N`.*  
*Plan version 1.0 — approved by Sufiyan. Execute top-down.*