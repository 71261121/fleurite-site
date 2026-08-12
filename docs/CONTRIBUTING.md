# Contributing — fleurite.me

## Development Setup

```bash
# 1. Clone
git clone https://github.com/71261121/fleurite-site.git
cd fleurite-site

# 2. Install
npm install

# 3. Environment
cp .env.example .env
# Edit .env with your keys

# 4. Database
npx prisma generate
npx prisma db push

# 5. Dev server
npm run dev
# Open http://localhost:3000
```

---

## Project Conventions

### File Naming
- Components: `PascalCase.tsx` (e.g., `Hero.tsx`, `CheckoutSheet.tsx`)
- Pages: `page.tsx` (Next.js convention)
- API routes: `route.ts` (Next.js convention)
- Lib files: `kebab-case.ts` (e.g., `download-email.ts`)
- CSS: `globals.css`

### Component Structure
```tsx
'use client';  // if using hooks

import { ... } from '...';

export default function ComponentName() {
  return (
    <section>
      {/* Content */}
    </section>
  );
}
```

### Styling
- Tailwind CSS v4
- Custom colors in `globals.css` `@theme inline` block
- Font families: `font-display` (Fraunces) for headings, `font-sans` (Inter) for body
- Color palette: pine (green), clay (terracotta), cream (background)

### State Management
- Global state: Zustand (checkout store)
- Local state: React useState
- URL state: Next.js searchParams

---

## Code Style

### TypeScript
- Strict mode enabled
- No `any` types (prefer `unknown` or specific types)
- Interface for component props

### React
- Functional components only (no class components)
- `'use client'` directive for client components
- Framer Motion for animations

### API Routes
- Always validate input with Zod schemas
- Always return consistent JSON responses
- Log errors to console (non-blocking)

---

## Commit Messages

Format: `<type>: <description>`

Types:
- `feat:` — New feature
- `fix:` — Bug fix
- `refactor:` — Code restructuring
- `chore:` — Maintenance/cleanup
- `docs:` — Documentation
- `test:` — Tests

Examples:
```
feat: add email input to checkout sheet
fix: resolve Stripe session lookup for live payments
refactor: remove dead FinalCTA component
chore: delete legacy pdf-generator.ts
docs: update API documentation
```

---

## Testing

### Before Committing
```bash
# 1. Build passes
npm run build

# 2. No TypeScript errors
npx tsc --noEmit

# 3. Manual test in browser
npm run dev
# Open localhost:3000
# Test checkout flow
# Test mobile responsive
```

### Before Deploying
```bash
# 1. All tests pass
npm run build

# 2. Git status clean
git status

# 3. Commit with descriptive message
git commit -m "type: description"

# 4. Push
git push origin master
```

---

## Branch Strategy

- `master` — Production branch (deployed to fleurite.me)
- Feature branches: `feat/description`
- Bug fixes: `fix/description`

```bash
# Create feature branch
git checkout -b feat/new-feature

# Work on feature
git add -A
git commit -m "feat: new feature"

# Merge to master
git checkout master
git merge feat/new-feature
git push origin master
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage structure |
| `src/components/` | All UI components |
| `src/app/api/` | Backend API routes |
| `src/lib/` | Utilities and services |
| `private/` | PDF book file |
| `public/` | Static assets |
| `docs/` | This documentation |
