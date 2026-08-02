'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Lock, CheckCircle2, Loader2, CreditCard, AlertCircle } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import Image from 'next/image'

type CheckoutStep = 'review' | 'processing' | 'success' | 'error'

export default function CheckoutSheet({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) {
  const [step, setStep] = useState<CheckoutStep>('review')
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [orderNumber, setOrderNumber] = useState('')

  const handleOpenChange = useCallback((open: boolean) => {
    if (!open && step !== 'processing') {
      setStep('review')
      setError('')
      setEmail('')
    }
    onOpenChange(open)
  }, [onOpenChange, step])

  const handlePayNow = useCallback(async () => {
    setError('')

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setStep('processing')

    try {
      const res = await fetch('/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{
            productName: 'Fleurite — Stop Chasing System',
            price: 27,
          }],
          amount: 27,
          customerEmail: email,
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

      // Simulated mode — auto-confirm
      await new Promise((r) => setTimeout(r, 2000))
      const confirmRes = await fetch('/api/checkout/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: data.sessionId,
          items: [{ productName: 'Fleurite — Stop Chasing System', price: 27 }],
          amount: 27,
          customerEmail: email,
        }),
      })
      const confirmData = await confirmRes.json()
      if (confirmData.success) {
        setOrderNumber(confirmData.orderNumber || '')
        setStep('success')
      } else {
        setError(confirmData.error || 'Payment failed')
        setStep('error')
      }
    } catch {
      setError('Network error. Please try again.')
      setStep('review')
    }
  }, [email])

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 bg-cream overflow-y-auto">
        <SheetTitle className="sr-only">Checkout</SheetTitle>
        <AnimatePresence mode="wait">
          {/* Review Step */}
          {step === 'review' && (
            <motion.div key="review" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} className="flex flex-col min-h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Checkout</h2>
                <button onClick={() => onOpenChange(false)} className="rounded-full p-1.5 hover:bg-gray-100 transition-colors" aria-label="Close checkout">
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="flex-1 p-6 space-y-5">
                {/* Product Display */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="flex gap-4">
                    <div className="relative w-20 h-28 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                      <Image src="/book-cover-1.png" alt="Fleurite System" fill className="object-cover" sizes="80px" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Fleurite — Stop Chasing System</h3>
                      <p className="text-sm text-gray-500 mt-1">2-Part System + Bonuses — Instant Digital Download</p>
                      <div className="mt-3 space-y-1">
                        {['Part 1: Scripts & Boundaries', 'Part 2: The Calm System', '35+ communication scripts', 'BONUS: Emergency Protocol Guide', 'BONUS: Printable Quick-Reference Cards'].map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-500 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="checkout-email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                  <input
                    id="checkout-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all text-sm"
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">We&apos;ll send your download link here</p>
                </div>

                {/* Price */}
                <div className="rounded-xl bg-white p-4 border border-gray-200 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">You Pay</span>
                  <span className="text-2xl font-black text-rose-700">$27</span>
                </div>

                {/* Pay Button */}
                <button
                  onClick={handlePayNow}
                  className="w-full h-14 rounded-xl bg-rose-700 text-white text-base font-bold shadow-lg hover:bg-rose-800 transition-colors flex items-center justify-center gap-2"
                >
                  <CreditCard className="h-5 w-5" />
                  Pay Now — $27
                </button>

                {/* Trust */}
                <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> SSL Encrypted</span>
                  <span>•</span>
                  <span>30-Day Guarantee</span>
                  <span>•</span>
                  <span>Instant Access</span>
                </div>

                {error && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {error}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Processing Step */}
          {step === 'processing' && (
            <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center min-h-[400px] gap-6">
              <Loader2 className="h-10 w-10 animate-spin text-rose-600" />
              <p className="text-lg font-medium text-gray-900">Processing payment...</p>
              <p className="text-sm text-gray-500">Securing your access now</p>
            </motion.div>
          )}

          {/* Error Step */}
          {step === 'error' && (
            <motion.div key="error" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center min-h-[400px] gap-6 text-center px-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <AlertCircle className="h-10 w-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Payment Failed</h2>
              <p className="text-gray-500 text-sm max-w-xs">{error || 'Something went wrong. Please try again.'}</p>
              <button onClick={() => { setStep('review'); setError('') }} className="rounded-full bg-rose-700 px-8 py-3 font-semibold text-white hover:bg-rose-800 transition-colors">
                Try Again
              </button>
            </motion.div>
          )}

          {/* Success Step */}
          {step === 'success' && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center min-h-[400px] gap-6 text-center px-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome to Fleurite!</h2>
              {orderNumber && <p className="text-gray-500 text-sm">Order #{orderNumber}</p>}
              <p className="text-gray-500">Check your email for instant access to your guides.</p>
              <button onClick={() => onOpenChange(false)} className="rounded-full border border-rose-300 text-rose-700 px-8 py-3 font-semibold hover:bg-rose-50 transition-colors">
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  )
}
