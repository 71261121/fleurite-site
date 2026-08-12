# Components — fleurite.me

## Overview

16 React components build the landing page. Each is self-contained and imported by specific pages.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    COMPONENT HIERARCHY                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  layout.tsx (Root)                                                   │
│  ├── CheckoutGateway → CheckoutSheet (global checkout)              │
│  ├── Header (sticky nav)                                            │
│  ├── AnnouncementBar (top urgency)                                  │
│  └── {children}                                                     │
│       └── page.tsx (Homepage)                                       │
│           ├── Hero                                                   │
│           ├── ProblemAgitation                                       │
│           ├── SocialProof                                            │
│           ├── ProductBreakdown                                       │
│           ├── CreatorBio                                             │
│           └── FAQ                                                    │
│  ├── Footer                                                          │
│  ├── StickyBar (bottom CTA)                                          │
│  └── FadeIn (animation wrapper)                                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Component Details

### AnnouncementBar
**File:** `src/components/AnnouncementBar.tsx`
**Renders:** Top green bar with countdown timer + social proof
**Behavior:** Shows/hides via localStorage dismissal, auto-resetting countdown
**Props:** None (uses localStorage state)
**Mobile:** "1,247+ women downloaded"
**Desktop:** "1,247 women downloaded the rules — Instant PDF • ends in [timer]"

### Header
**File:** `src/components/Header.tsx`
**Renders:** Sticky navigation bar with logo, nav links, CTA button
**Behavior:** Glassmorphism on scroll, IntersectionObserver for active section, mobile hamburger menu
**Props:** None
**Mobile:** Hamburger menu with slide-in drawer
**Desktop:** Full nav with "Get the Rules — $27" CTA

### Hero
**File:** `src/components/Hero.tsx`
**Renders:** Headline, subheadline, checklist, book cover, format text
**Behavior:** Static display, no interactivity
**Props:** None
**Layout:** 2-column (text left, book right on desktop), linear on mobile

### ProblemAgitation
**File:** `src/components/ProblemAgitation.tsx`
**Renders:** 8 pain points + image + reframe box
**Behavior:** Static display with CSS grid ordering
**Props:** None (scenarios hardcoded)
**Desktop:** Image left, text right
**Mobile:** Heading → Image → Pain points

### SocialProof
**File:** `src/components/SocialProof.tsx`
**Renders:** 5 testimonials + stats + CTA
**Behavior:** Static display with Star ratings
**Props:** None (testimonials hardcoded)
**Layout:** 3-column grid (top) + 2-column grid (bottom)

### ProductBreakdown
**File:** `src/components/ProductBreakdown.tsx`
**Renders:** 4 pillars + book cover + Zara/Aisha story + trust badges
**Behavior:** Static display
**Props:** None (pillars hardcoded)
**Layout:** Linear flow (header → book → pillars → story → badges)

### CreatorBio
**File:** `src/components/CreatorBio.tsx`
**Renders:** Lena's story + photo + disclaimer
**Behavior:** Static display
**Props:** None

### FAQ
**File:** `src/components/FAQ.tsx`
**Renders:** 8 accordion FAQ items + post-FAQ CTA
**Behavior:** Accordion open/close with smooth animation
**Props:** None (FAQ items hardcoded)

### FinalCTA
**File:** `src/components/FinalCTA.tsx`
**Renders:** Green CTA section with product details
**Behavior:** Static display
**Props:** None
**Note:** Currently NOT imported in page.tsx (removed)

### Footer
**File:** `src/components/Footer.tsx`
**Renders:** Links + legal disclaimer
**Behavior:** Static display
**Props:** None

### StickyBar
**File:** `src/components/StickyBar.tsx`
**Renders:** Bottom CTA bar (appears on scroll)
**Behavior:** Appears after scrollY > 500, padding added to body
**Props:** None

### FadeIn
**File:** `src/components/FadeIn.tsx`
**Renders:** Wraps children with scroll-triggered fade animation
**Props:** `{ children: React.ReactNode }`
**Behavior:** Framer Motion opacity + translateY on scroll

### CheckoutGateway
**File:** `src/components/CheckoutGateway.tsx`
**Renders:** Listens for `open-checkout` event, renders CheckoutSheet
**Behavior:** Global event listener + Zustand store binding
**Props:** None

### CheckoutSheet
**File:** `src/components/CheckoutSheet.tsx`
**Renders:** Slide-over checkout panel with email input + pay button
**Behavior:** Calls `/api/checkout/dodo`, handles loading/success/error states
**Props:** `{ isOpen: boolean; onOpenChange: (open: boolean) => void }`

### ui/sheet.tsx
**File:** `src/components/ui/sheet.tsx`
**Renders:** Radix Dialog Sheet primitives
**Props:** Various (Sheet, SheetContent, SheetTitle, etc.)
**Used by:** CheckoutSheet

---

## State Management

### Zustand Store (`src/lib/store/checkout.ts`)
```typescript
// Simple checkout state
{
  isOpen: boolean,        // Is checkout sheet open?
  openCheckout: () => void,
  closeCheckout: () => void,
}
```

**Usage:** Components dispatch `window.dispatchEvent(new Event('open-checkout'))` → CheckoutGateway listens → Opens CheckoutSheet

---

## Animation

### FadeIn Component
```tsx
<FadeIn>
  <ProblemAgitation />
</FadeIn>
```
Uses Framer Motion's `useInView` to trigger opacity + translateY animation on scroll.

### CheckoutSheet
Uses Framer Motion `AnimatePresence` for slide-in/slide-out animation.

---

## Dead Components (Not Used)

These exist in the codebase but are NOT imported anywhere:
- `ui/button.tsx` — shadcn Button (unused, components use raw `<button>`)
- `auth-utils.ts` — JWT helpers (unused, no auth system)
