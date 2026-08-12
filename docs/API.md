# API Reference — fleurite.me

## Overview

6 API routes handle payment, delivery, and webhook processing.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    API ROUTES                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  POST /api/checkout/dodo          → Create DodoPayments session     │
│  POST /api/checkout/confirm       → Confirm order + send email      │
│  POST /api/checkout/dodo-success  → Handle DodoPayments redirect    │
│  GET  /api/checkout/status        → Check session status            │
│  GET  /api/download               → Serve PDF with token auth       │
│  POST /api/webhook/dodo-payments  → Process DodoPayments events     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## POST /api/checkout/dodo

Creates a DodoPayments checkout session and returns the payment URL.

**Request:**
```json
{
  "product_cart": [{"product_id": "pdt_xxx", "quantity": 1}],
  "customer": {"email": "user@example.com", "name": "John"},
  "return_url": "https://www.fleurite.me/checkout/success"
}
```

**Response (200):**
```json
{
  "success": true,
  "checkout_url": "https://checkout.dodopayments.com/xxx",
  "session_id": "pay_xxx"
}
```

**Response (422):**
```json
{
  "error": "DodoPayments API error: 422",
  "details": "Invalid request body...",
  "environment": "live_mode",
  "baseUrl": "https://live.dodopayments.com"
}
```

---

## POST /api/checkout/confirm

Confirms a checkout session, creates order, sends download email.

**Request:**
```json
{
  "sessionId": "cmxxxxxx",
  "items": [{"productName": "The Avoidant's Unwritten Rules", "price": 27}],
  "amount": 27,
  "customerEmail": "user@example.com"
}
```

**Response (200):**
```json
{
  "success": true,
  "order": { "orderNumber": "FL-20260809-1234" },
  "orderNumber": "FL-20260809-1234",
  "downloadUrl": "https://www.fleurite.me/api/download?token=xxx"
}
```

---

## POST /api/checkout/dodo-success

Called when DodoPayments redirects back after payment.

**Request:**
```json
{
  "paymentId": "pay_xxx"
}
```

**Response (200):**
```json
{
  "success": true,
  "orderNumber": "FL-20260809-1234",
  "downloadUrl": "https://www.fleurite.me/api/download?token=xxx"
}
```

---

## GET /api/checkout/status?id=xxx

Returns the status of a checkout session.

**Query Parameters:**
- `id` — Checkout session ID (DB cuid or Stripe session ID)

**Response (200):**
```json
{
  "id": "cmxxxxxx",
  "status": "pending" | "completed" | "expired",
  "amount": 27,
  "currency": "USD"
}
```

---

## GET /api/download?token=xxx&action=file

Serves the PDF book with token authentication.

**Query Parameters:**
- `token` — Download token (32-byte hex)
- `action=file` — Serves the PDF directly

**Response (200):** Binary PDF file
**Response (400):** `{"error": "Invalid or expired download link"}`
**Response (404):** `{"error": "Book file not found. Contact support."}`

---

## POST /api/webhook/dodo-payments

DodoPayments webhook handler. Processes payment events.

**Events Handled:**
- `payment.succeeded` → Creates order, sends download email
- `payment.failed` → Logs failure
- `payment.cancelled` → Logs cancellation
- `payment.processing` → Logs processing
- `refund.succeeded` → Updates order status to 'refunded'
- `refund.failed` → Logs refund failure

**Response:** Always returns 200 OK (DodoPayments requires this)

---

## Error Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad request (invalid params) |
| 401 | Unauthorized (missing/invalid token) |
| 404 | Not found (expired token, missing order) |
| 422 | Validation error (DodoPayments) |
| 500 | Server error |
