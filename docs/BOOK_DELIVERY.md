# Book Delivery — How the PDF Gets to Customers

## Overview

The book is a static PDF file stored in `private/`. Customers receive it via a token-protected download link.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    BOOK DELIVERY FLOW                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Step 1: Customer pays $27                                          │
│     │                                                                │
│     ▼                                                                │
│  Step 2: Webhook creates order in database                         │
│     │                                                                │
│     ▼                                                                │
│  Step 3: 24h download token generated                              │
│     │    (crypto.randomBytes(32).toString('hex'))                   │
│     │    Stored in VerificationToken table                          │
│     │                                                                │
│     ▼                                                                │
│  Step 4: Download email sent via Brevo                             │
│     │    Link: /api/download?token=xxx                             │
│     │                                                                │
│     ▼                                                                │
│  Step 5: Customer clicks link in email                             │
│     │                                                                │
│     ▼                                                                │
│  Step 6: GET /api/download?token=xxx&action=file                   │
│     │                                                                │
│     ├──→ Validates token (exists? expired?)                         │
│     ├──→ Checks order status (must be 'paid')                      │
│     ├──→ Reads private/the-avoidants-unwritten-rules.pdf           │
│     └──→ Serves PDF with Content-Disposition: attachment           │
│                                                                      │
│  Result: Customer's browser downloads the PDF                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Static PDF Location

```
private/the-avoidants-unwritten-rules.pdf
├── Size: 127,741 bytes (~125 KB)
├── Pages: 52
├── Content: 5 rules, 47 scripts, 3-Question Framework
└── Generated: External tool (not runtime generation)
```

---

## Token System

### Token Generation
```typescript
const token = crypto.randomBytes(32).toString('hex')
// Result: 64-character hex string
// Example: "a1b2c3d4e5f6..."
```

### Token Storage
```typescript
await db.verificationToken.create({
  data: {
    identifier: order.orderNumber,  // "FL-20260809-1234"
    token: token,
    type: 'download_token',
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),  // 24 hours
  },
})
```

### Token Validation
```typescript
const verificationToken = await db.verificationToken.findFirst({
  where: {
    token: token,
    type: 'download_token',
  },
})

if (!verificationToken) → 400 "Invalid token"
if (verificationToken.expires < new Date()) → 400 "Expired"
```

---

## Updating the Book

### Current Process:
```bash
# 1. Generate new PDF externally
# 2. Replace file:
cp new-book.pdf private/the-avoidants-unwritten-rules.pdf

# 3. Commit + deploy:
git add private/the-avoidants-unwritten-rules.pdf
git commit -m "feat: update book to v2"
git push origin master
npx vercel --prod --yes
```

### Important Notes:
- PDF is in `private/` directory (not `public/`)
- `private/` is in `.gitignore` for local, but tracked for deployment
- Vercel `output: "standalone"` copies `private/` to build output
- If PDF missing at runtime, fallback generates PDF via pdfkit (slow)
- Always verify PDF exists after deployment

---

## Download Route Logic

```typescript
// GET /api/download?token=xxx&action=file

if (!token) → 400 "Token required"
if (token expired) → 400 "Link expired (24h limit)"
if (!order paid) → 404 "Order not found"

if (action === 'file') {
  // Serve static PDF
  const pdfPath = path.join(process.cwd(), 'private', 'the-avoidants-unwritten-rules.pdf')
  
  if (fs.existsSync(pdfPath)) {
    // Serve static file (fast)
    return new Response(fs.readFileSync(pdfPath), {
      headers: { 'Content-Type': 'application/pdf' }
    })
  } else {
    // Fallback: generate at runtime (slow)
    const { generateBookPdf } = await import('@/lib/pdf')
    const { BOOK } = await import('@/content/book')
    return new Response(await generateBookPdf(BOOK))
  }
}
```

---

## Security

- PDF NOT in `public/` directory (can't be accessed directly)
- Only accessible via token-authenticated route
- Tokens expire after 24 hours
- Each token tied to a specific paid order
- No unauthenticated access possible
