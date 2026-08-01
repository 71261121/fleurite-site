import { z } from 'zod'

export const checkoutCreateSchema = z.object({
  items: z.array(z.object({
    productId: z.string().optional(),
    productName: z.string().min(1),
    price: z.number().positive(),
  })).min(1, 'At least one item is required'),
  amount: z.number().positive('Amount must be greater than 0'),
  customerEmail: z.string().email('Invalid email').optional(),
  customerName: z.string().max(100).optional(),
})

export const checkoutConfirmSchema = z.object({
  sessionId: z.string().min(1, 'Session ID is required'),
  items: z.array(z.object({
    productId: z.string().min(1),
    productName: z.string().min(1),
    price: z.number().positive(),
  })).optional(),
  amount: z.number().positive().optional(),
  customerEmail: z.string().email().optional(),
  customerName: z.string().max(100).optional(),
})

export const razorpayCreateSchema = z.object({
  items: z.array(z.object({
    productId: z.string().min(1).optional(),
    productName: z.string().min(1),
    price: z.number().positive(),
  })).min(1, 'At least one item is required'),
  amount: z.number().positive('Amount must be greater than 0'),
  customerEmail: z.string().email().optional(),
  customerName: z.string().max(100).optional(),
})

export const razorpayVerifySchema = z.object({
  razorpayOrderId: z.string().min(1, 'Order ID is required'),
  razorpayPaymentId: z.string().min(1, 'Payment ID is required'),
  razorpaySignature: z.string().min(1, 'Signature is required'),
  items: z.array(z.object({
    productId: z.string().min(1),
    productName: z.string().min(1),
    price: z.number().positive(),
  })).optional(),
  amount: z.number().positive().optional(),
  customerEmail: z.string().email().optional(),
  customerName: z.string().max(100).optional(),
})

export function validateBody<T>(schema: z.ZodType<T>, body: unknown) {
  const result = schema.safeParse(body)
  if (!result.success) {
    const firstError = result.error.issues[0]
    return { data: null, error: firstError?.message || 'Invalid input', success: false as const }
  }
  return { data: result.data, error: null, success: true as const }
}
