# Database Schema — fleurite.me

## Overview

PostgreSQL database via Neon, accessed through Prisma ORM.

---

## Models

### User
```prisma
model User {
  id            String          @id @default(cuid())
  email         String          @unique
  name          String?
  role          String          @default("user")
  orders        Order[]
  checkoutSessions CheckoutSession[]
  libraryItems  LibraryItem[]
  createdAt     DateTime        @default(now())
  updatedAt     DateTime        @updatedAt
}
```

### Order
```prisma
model Order {
  id              String      @id @default(cuid())
  orderNumber     String      @unique
  userId          String
  user            User        @relation(fields: [userId], references: [id])
  status          String      // "pending" | "paid" | "refunded"
  amount          Float
  currency        String      @default("USD")
  paymentMethod   String      // "dodo" | "simulated"
  stripePaymentIntentId String?  // DodoPayments payment ID
  paidAt          DateTime?
  customerEmail   String?
  customerName    String?
  items           OrderItem[]
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
}
```

### OrderItem
```prisma
model OrderItem {
  id          String   @id @default(cuid())
  orderId     String
  order       Order    @relation(fields: [orderId], references: [id])
  productId   String?
  productName String
  price       Float
}
```

### CheckoutSession
```prisma
model CheckoutSession {
  id              String    @id @default(cuid())
  userId          String
  user            User      @relation(fields: [userId], references: [id])
  stripeSessionId String?   @unique  // DodoPayments session ID
  amount          Float
  currency        String    @default("USD")
  status          String    @default("pending")  // "pending" | "completed" | "expired"
  expiresAt       DateTime
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}
```

### VerificationToken
```prisma
model VerificationToken {
  id         String   @id @default(cuid())
  identifier String   // orderNumber
  token      String   @unique
  expires    DateTime
  type       String   // "download_token"
}
```

### EmailLog
```prisma
model EmailLog {
  id        String   @id @default(cuid())
  to        String
  subject   String
  template  String
  status    String
  createdAt DateTime @default(now())
}
```

---

## Relationships

```
User 1───────∞ Order
User 1───────∞ CheckoutSession
User 1───────∞ LibraryItem
Order 1──────∞ OrderItem
Order 1──────1 VerificationToken (via orderNumber)
```

---

## Common Queries

### Find paid orders:
```typescript
const orders = await db.order.findMany({
  where: { status: 'paid' },
  include: { items: true },
})
```

### Find download token:
```typescript
const token = await db.verificationToken.findFirst({
  where: {
    token: 'abc123...',
    type: 'download_token',
  },
})
```

### Create order:
```typescript
const order = await db.order.create({
  data: {
    orderNumber: 'FL-20260809-1234',
    userId: user.id,
    status: 'paid',
    amount: 27,
    currency: 'USD',
    paymentMethod: 'dodo',
    paidAt: new Date(),
    customerEmail: 'user@example.com',
    items: {
      create: [{ productName: 'The Avoidant\u0027s Unwritten Rules', price: 27 }],
    },
  },
})
```
