import { z } from 'zod'

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

export function validateBody<T>(schema: z.ZodType<T>, body: unknown) {
  const result = schema.safeParse(body)
  if (!result.success) {
    const firstError = result.error.issues[0]
    return { data: null, error: firstError?.message || 'Invalid input', success: false as const }
  }
  return { data: result.data, error: null, success: true as const }
}
