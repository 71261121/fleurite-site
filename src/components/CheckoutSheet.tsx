'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Lock, Shield, Download, CheckCircle2, Loader2, ShoppingBag, CreditCard, AlertCircle, Sparkles } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useCartStore } from '@/lib/store/cart'

type CheckoutStep = 'review' | 'processing' | 'success' | 'error'

export default function CheckoutSheet({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) {
  const items = useCartStore((s) => s.items)
  const getTotal = useCartStore((s) => s.getTotal)
  const getTotalSavings = useCartStore((s) => s.getTotalSavings)
  const clearCart = useCartStore((s) => s.clearCart)

  const [step, setStep] = useState<CheckoutStep>('review')
  const [error, setError] = useState('')
  const [orderNumber, setOrderNumber] = useState('')

  const total = getTotal()
  const savings = getTotalSavings()

  const handleOpenChange = useCallback((open: boolean) => {
    if (!open && step !== 'processing') {
      setStep('review')
      setError('')
    }
    onOpenChange(open)
  }, [onOpenChange, step])

  const handlePlaceOrder = useCallback(async () => {
    setError('')
    if (items.length === 0) {
      setError('Your cart is empty')
      return
    }

    setStep('processing')

    try {
      const res = await fetch('/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.product.id,
            productName: i.product.name,
            price: i.product.price,
          })),
          amount: total,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        setError(data.error || 'Failed to create checkout session')
        setStep('review')
        return
      }

      if (data.mode === 'stripe' && data.stripeUrl) {
        window.location.href = data.stripeUrl
        return
      }

      // Simulated mode
      await new Promise((r) => setTimeout(r, 3000))
      const confirmRes = await fetch('/api/checkout/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: data.sessionId, items: items.map((i) => ({ productId: i.product.id, productName: i.product.name, price: i.product.price })), amount: total }),
      })
      const confirmData = await confirmRes.json()
      if (confirmData.success) {
        setOrderNumber(confirmData.order.orderNumber)
        clearCart()
        setStep('success')
      } else {
        setError(confirmData.error || 'Payment failed')
        setStep('error')
      }
    } catch {
      setError('Network error. Please try again.')
      setStep('review')
    }
  }, [items, total, clearCart])

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 bg-cream overflow-y-auto">
        <SheetTitle className="sr-only">Checkout</SheetTitle>
        <AnimatePresence mode="wait">
          {/* ── Review Step ── */}
          {step === 'review' && (
            <motion.div key="review" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} className="flex flex-col min-h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5 text-rose-700" />
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground">Checkout</h2>
                </div>
                <button onClick={() => onOpenChange(false)} className="rounded-full p-1.5 hover:bg-muted transition-colors">
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              <div className="flex-1 p-6 space-y-5">
                {/* ── Product Display — BOTH Books ── */}
                <div className="rounded-2xl border border-border/40 bg-white p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Your Complete System</span>
                  </div>

                  {/* Two books side by side */}
                  <div className="flex gap-3 mb-4">
                    <div className="relative flex-1 aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                      <Image src="/book-cover-1.png" alt="Part 1: Scripts & Boundaries" fill className="object-cover" sizes="120px" />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-1 text-center text-[10px] font-semibold text-white">Part 1</div>
                    </div>
                    <div className="relative flex-1 aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                      <Image src="/book-cover-2.png" alt="Part 2: The Calm System" fill className="object-cover" sizes="120px" />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-1 text-center text-[10px] font-semibold text-white">Part 2</div>
                    </div>
                  </div>

                  <h3 className="font-semibold text-foreground">SecureLoop — Stop Chasing System</h3>
                  <p className="text-xs text-muted-foreground mt-1">2-Part System + Bonuses — Instant Digital Download</p>

                  {/* What's included — compact */}
                  <div className="mt-4 space-y-1.5">
                    {[
                      'Part 1: Scripts & Boundaries — exact texts',
                      'Part 2: The Calm System — 7-day protocol',
                      '35+ communication scripts',
                      'BONUS: Emergency Protocol Guide',
                      'BONUS: Printable Quick-Reference Cards',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground/70">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Price Summary ── */}
                <div className="rounded-xl bg-white p-4 border border-border/30 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Individual Value</span>
                    <span className="text-muted-foreground line-through">${total + savings}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Today's Discount</span>
                    <span className="text-green-600 font-semibold">-${savings}</span>
                  </div>
                  <div className="h-px bg-border/30" />
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">You Pay</span>
                    <span className="text-2xl font-black text-rose-700">${total}</span>
                  </div>
                </div>

                {/* ── Urgency / Social Proof ── */}
                <div className="rounded-xl bg-accent/10 border border-accent/20 p-3 text-center">
                  <p className="text-xs font-medium text-foreground/80">
                    <span className="font-bold text-accent">2,847 women</span> downloaded this system this month
                  </p>
                </div>

                {/* ── Pay Button ── */}
                <Button
                  onClick={handlePlaceOrder}
                  className="btn-glow w-full h-14 rounded-xl bg-rose-700 text-base font-bold text-white shadow-lg shadow-rose-700/30 hover:bg-rose-800 transition-colors"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Pay Now — ${total}
                </Button>

                {/* ── Discreet Billing ── */}
                <p className="text-center text-[11px] text-muted-foreground">
                  100% private. Your statement shows <span className="font-medium">"SM Digital"</span>
                </p>

                {/* ── Trust Badges ── */}
                <div className="flex items-center justify-center gap-5 pt-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Shield className="h-3.5 w-3.5 text-success" /> 30-Day Guarantee
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" /> SSL Encrypted
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Download className="h-3.5 w-3.5" /> Instant Access
                  </div>
                </div>

                {error && (
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {error}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* ── Processing Step ── */}
          {step === 'processing' && (
            <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center min-h-[400px] gap-6">
              <div className="relative">
                <motion.div className="absolute inset-0 rounded-full bg-rose-700/20" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-rose-50">
                  <Loader2 className="h-10 w-10 animate-spin text-rose-700" />
                </div>
              </div>
              <p className="text-lg font-medium text-foreground">Processing payment...</p>
              <p className="text-sm text-muted-foreground">Securing your access now</p>
            </motion.div>
          )}

          {/* ── Error Step ── */}
          {step === 'error' && (
            <motion.div key="error" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center min-h-[400px] gap-6 text-center px-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
                <AlertCircle className="h-10 w-10 text-destructive" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground">Payment Failed</h2>
              <p className="text-muted-foreground text-sm max-w-xs">{error || 'Something went wrong. Please try again.'}</p>
              <Button onClick={() => { setStep('review'); setError('') }} className="rounded-full bg-rose-700 px-8 font-semibold text-white shadow-md hover:bg-rose-800">
                Try Again
              </Button>
            </motion.div>
          )}

          {/* ── Success Step ── */}
          {step === 'success' && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center min-h-[400px] gap-6 text-center px-6">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
              </motion.div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground">Welcome to SecureLoop!</h2>
              {orderNumber && <p className="text-muted-foreground text-sm">Order #{orderNumber}</p>}
              <p className="text-muted-foreground">Check your email for instant access to all 3 guides + bonuses.</p>
              <Button variant="outline" className="w-full rounded-full border-rose-700 text-rose-700 hover:bg-rose-50" onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  )
}
