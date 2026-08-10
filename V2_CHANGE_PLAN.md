# V2 CHANGE PLAN — THE AVOIDANT'S UNWRITTEN RULES

## Master Synthesis from 6 Specialist Audits

---

## P0 — CRITICAL FIXES (Must ship with V2)

### P0-1: Reader Map Page Numbers → Section Labels
**File:** `src/content/part-see.ts` (FRONT_MATTER)
**Current:** Hardcoded "Page 13", "Page 43", "Page 60", "Page 88"
**Problem:** Book is 52 pages — "Page 60" and "Page 88" don't exist. Reader gets lost at 2am.
**Fix:** Replace page numbers with section/group labels:
```
Still in it, trying to understand him → Section 1: SEE
Still in it, need to know if fixable → Section 4: CHOOSE
Want to leave but feel stuck → Section 4: CHOOSE
Already left, can't stop thinking → Section 2: CALM
Know all the theory, still chasing → Section 2: CALM
Need exact words right now → Section 3: STAND (Group A-H)
```
**Risk:** None — strictly more accurate than current state.

---

### P0-2: DARVO-Avoidant Conflation → Qualify
**File:** `src/content/part-see-2-5.ts` (Chapter 5)
**Current:** "DARVO is an acronym coined by Jennifer Freyd... In many avoidant dynamics, the person using DARVO does not know they are doing it."
**Problem:** DARVO is Freyd's framework for perpetrator responses to accountability. Linking it specifically to "avoidant dynamics" as established science is author extrapolation.
**Fix:** Add qualification: "This pattern may be consistent with how some people respond when confronted with their behavior, regardless of attachment style. The connection between DARVO and avoidant attachment is a clinical observation, not an established research finding."
**Risk:** Low — clarification, not removal.

---

### P0-3: 90-Second Rule Attribution
**File:** `src/content/part-calm.ts` (Chapter 6)
**Current:** "Dr. Jill Bolte Taylor... found that a pure emotion... lasts about 90 seconds."
**Problem:** Presented as established research; actually Taylor's proposal from "My Stroke of Insight."
**Fix:** "Jill Bolte Taylor, a neuroanatomist, proposed in her book 'My Stroke of Insight' that the chemical component of an emotion lasts approximately 90 seconds. This is a widely-cited concept in emotion regulation, though research shows emotion duration varies by type and context."
**Risk:** None — more accurate.

---

### P0-4: Cortisol Timing Error
**File:** `src/content/part-calm.ts` (Chapter 8)
**Current:** "cortisol is naturally rising (preparing the body for the sleep cycle disruption that anxiety causes)"
**Problem:** Cortisol is typically at its LOWEST around 10pm-12am in healthy individuals. Chronic stress CAN disrupt rhythms, but the blanket claim is misleading.
**Fix:** "For people experiencing chronic relational stress, cortisol rhythms may be disrupted — the normal evening decline may not occur, leaving the body in a state of activation when you're trying to sleep."
**Risk:** None — more accurate.

---

### P0-5: "Phone Ban Rule" → Create or Rename
**File:** `src/components/ProductBreakdown.tsx`
**Current:** "The Phone Ban Rule — when you cannot trust yourself to text"
**Problem:** No named tool with this name exists in the book. Closest: Day-1 screen limits (part-back.ts).
**Fix:** Rename to match existing book content: "The Screen Limits Protocol — Day 1 setup to break the checking loop" OR create a brief 1-paragraph tool in the CALM section.
**Risk:** Low — alignment fix.

---

## P1 — HIGH VALUE UPGRADES

### P1-1: 7 Scripts Need Rewrites
**File:** `src/content/part-stand.ts`
**Scripts to rewrite:** 14, 17, 27, 28, 32, 35, 45

**Script 14 (Shutdown Witness):** Add "then say your truth in 1-2 sentences" instruction + worked example.
**Script 17 (Hour 6):** Change timing to "Hour 12" minimum — 6 hours is a workday, not ghosting.
**Script 27 (Too Sensitive Reframe):** Replace counter-framing with decline-the-label: "You can call it whatever you like. I am not shrinking myself to be easier for you."
**Script 28 (Need Reclaim):** Decide if internal vs sent — rewrite as internal affirmation only.
**Script 32 (Basic Boundary):** Change from outward demand to self-referential: "I will not accept [behavior]. If it happens again, I will leave the conversation." Add 2 filled examples.
**Script 35 (Consistency Boundary):** Add enforcement half: "So I am done adjusting my plans around promises. I will plan around what I see."
**Script 45 (Closure):** Replace "My closure is not waiting on your shape" with: "I have made my decision. You do not have to agree with it. I am done explaining it."

---

### P1-2: Add "After You Send" Layer to Scripts
**File:** `src/content/part-stand.ts` + `src/content/types.ts`
**Current:** Scripts have when/say/why only
**Add:** For top 10-15 most-used scripts, add response pathways:
- IF HE RESPONDS (warm/defensive/silent)
- WHAT TO OBSERVE
**Priority scripts:** 4, 7, 19, 22, 32, 38, 41
**Schema:** Add optional fields to Block type in types.ts

---

### P1-3: Merge Two 7-Day Plans
**Files:** `src/content/part-calm.ts` (Chapter 9) + `src/content/part-back.ts` (Chapter 19)
**Current:** Two competing 7-day programs
**Fix:** Keep Chapter 9 as "Emergency Plan" (crisis stabilization), reframe Chapter 19 as "Implementation Map" (post-crisis growth). Add clear labels differentiating them.

---

### P1-4: Fix Back Matter Free Guide Reference
**File:** `src/content/part-back.ts`
**Current:** "the 3-Day Reset guide is available at fleurite.me"
**Problem:** Actual free guide is "The 3am Text Rescue"
**Fix:** "The free '3am Text Rescue' guide is available at fleurite.me"

---

### P1-5: Remove Insula Claim
**File:** `src/content/part-calm.ts`
**Current:** "naming a bodily sensation activates the insula, which signals safety to the amygdala"
**Problem:** No established research supports this specific pathway
**Fix:** "Naming a sensation creates distance between you and the feeling — research on affect labeling shows this reduces emotional intensity." (Lieberman et al., 2007 is verified)

---

### P1-6: Fix Reader Map Navigation
**Already covered in P0-1**

---

### P1-7: Add Post-Send Protocols for Critical Scripts
**File:** `src/content/part-stand.ts`
**Scripts needing post-send:** 41 (Walk-Away), 44 (Short Goodbye), 45, 46, 47
**Add:** Simple 1-paragraph "What happens after you send this" for each.
**Template:** "After sending: [do not check his response for 24 hours] / [block if he escalates] / [the urge to unsend will come — it will pass]"

---

## P2 — USEFUL IMPROVEMENTS

### P2-1: Fix Script 5 & 42 Copy Errors
**Script 5 `why`:** "correct the record *is* he is fine" → "correct the record *if* he is fine"
**Script 42 `why`:** "evidence it is" → "evidence of change or evidence there is none"

### P2-2: Normalize Script Voice to Contractions
Most scripts use "I am / I do not" — real texting uses "I'm / I don't". Normalize to contractions throughout for naturalness. Script 41 already uses contractions; make all scripts match.

### P2-3: Expand Rules 3-5 (Optional)
Rules 3-5 run 700-800 words each vs Rule 1's 1,515 words. Consider adding:
- Rule 3: One more "what this means for you" paragraph
- Rule 4: One more example of the reset pattern
- Rule 5: One more DARVO scenario

### P2-4: Fix Back Matter Free Guide Reference
"3-Day Reset guide" → "The free '3am Text Rescue' guide"

### P2-5: Merge Duplicate 7-Day Plans
Chapter 9 = "Emergency Plan" (crisis)
Chapter 19 = "Implementation Map" (growth)
Clear labels, no content duplication.

---

## P3 — COSMETIC (Optional)

### P3-1: Bonus Pack (High ROI, Low Effort)
Add to back matter:
- **Crisis One-Sheet** (1 page: 90-Second Interrupt + top 5 scripts by situation)
- **Script Quick-Flip Index** (situation → script number → section)
- **Printable Reality Anchor Cards** (3 per sheet, cut out)

### P3-2: Phone Ban Rule Naming
If created in P0-5, ensure consistent naming across book + landing page.

---

## IMPLEMENTATION ORDER

```
Phase 1: P0 fixes (critical, ship-blocking)
Phase 2: P1-1 + P1-2 (scripts + after-send layer)
Phase 3: P1-3 + P1-4 + P1-5 (merges + corrections)
Phase 4: P2 fixes (copy errors + normalization)
Phase 5: Build + deploy + verify
Phase 6: Fact check pass
Phase 7: Regression test (V1 vs V2)
```

---

## V1 CONTENT LOCK — Protected Assets

These elements MUST remain unchanged:
- SEE → CALM → STAND → CHOOSE structure
- 5 Unwritten Rules (core concept)
- 47 Script count (marketing claim)
- 90-Second Interrupt protocol (core tool)
- 3-Question Decision Framework
- STAY / STAND / LEAVE decision matrix
- 7-Day Implementation Map
- Front matter resentment-first validation
- Reader Map (fix page numbers, keep structure)
- "On your terms — not his silence" tagline
- Emotional tone: clear, direct, empowering, non-judgmental
