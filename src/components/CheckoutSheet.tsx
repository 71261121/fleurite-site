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
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')

  const handleOpenChange = useCallback((open: boolean) => {
    if (!open && step !== 'processing') {
      setStep('review')
      setError('')
      setEmail('')
      setEmailError('')
    }
    onOpenChange(open)
  }, [onOpenChange, step])

  const handlePayNow = useCallback(async () => {
    // Validate email first
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    setEmailError('')
    setError('')
    setStep('processing')

    try {
      // Try DodoPayments checkout
      console.log('[Checkout] Calling /api/checkout/dodo...')
      const dodoRes = await fetch('/api/checkout/dodo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_cart: [{ product_id: 'pdt_0Nl0tDPCDBQkR4G2I6lfS', quantity: 1 }],
          customer: { email: email, name: '' },
          return_url: 'https://www.fleurite.me/checkout/success',
        }),
      })
      console.log('[Checkout] DodoPayments response status:', dodoRes.status)
      const dodoData = await dodoRes.json()
      console.log('[Checkout] DodoPayments response:', JSON.stringify(dodoData).substring(0, 200))

      if (dodoData.checkout_url) {
        console.log('[Checkout] Redirecting to:', dodoData.checkout_url)
        window.location.href = dodoData.checkout_url
        return
      }

      // DodoPayments not ready — show message
      console.log('[Checkout] No checkout_url in response')
      setError('Payment system is being set up. Please try again in a few minutes.')
      setStep('review')
    } catch (e) {
      console.error('[Checkout] Error:', e)
      setError('Payment system is being set up. Please try again in a few minutes.')
      setStep('review')
    }
  }, [email])

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 bg-background overflow-y-auto">
        <SheetTitle className="sr-only">Checkout</SheetTitle>
        <AnimatePresence mode="wait">
          {/* Review Step */}
          {step === 'review' && (
            <motion.div key="review" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} className="flex flex-col min-h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 pb-4 border-b border-muted">
                <h2 className="text-xl font-bold text-foreground">Checkout</h2>
                <button onClick={() => onOpenChange(false)} className="rounded-full p-1.5 hover:bg-muted transition-colors" aria-label="Close checkout">
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              <div className="flex-1 p-6 space-y-5">
                {/* Product Display */}
                <div className="rounded-2xl border border-muted bg-card p-5">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <Image src="/product/book-cover.png" alt="The Avoidant's Unwritten Rules" fill className="object-contain" sizes="96px" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">The Avoidant&apos;s Unwritten Rules</h3>
                      <p className="text-sm text-muted-foreground mt-1">5 rules + 47 scripts + framework + reset — Instant digital download</p>
                      <div className="mt-3 space-y-1">
                        {[
                          'The 5 Unwritten Rules decoded',
                          '47 word-for-word scripts (silence, space, ghosting, walk-away)',
                          'The 3-Question Stay-or-Leave Framework',
                          'The 90-Second Calm Protocol',
                          'The Walk-Away Script — 19 words, dignity intact',
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-500 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="rounded-xl bg-card p-4 border border-muted flex justify-between items-center">
                  <span className="font-semibold text-foreground">You Pay</span>
                  <span className="text-2xl font-black text-pine-600">$27</span>
                </div>

                {/* Email Input — required for delivery */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Your email <span className="text-red-400">*</span>
                  </label>
                  <p className="text-xs text-muted-foreground">We'll send your download link here</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setEmailError('')
                    }}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-muted bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-pine-500 transition-colors"
                    required
                  />
                  {emailError && (
                    <p className="text-xs text-red-500">{emailError}</p>
                  )}
                </div>

                {/* Pay Button */}
                <button
                  onClick={handlePayNow}
                  className="w-full h-14 rounded-xl bg-pine-600 text-white text-base font-bold shadow-lg hover:bg-pine-700 transition-colors flex items-center justify-center gap-2"
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
              <Loader2 className="h-10 w-10 animate-spin text-pine-600" />
              <p className="text-lg font-medium text-foreground">Redirecting to payment...</p>
              <p className="text-sm text-muted-foreground">You&apos;ll complete payment on our secure checkout</p>
            </motion.div>
          )}

          {/* Error Step */}
          {step === 'error' && (
            <motion.div key="error" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center min-h-[400px] gap-6 text-center px-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <AlertCircle className="h-10 w-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Payment Failed</h2>
              <p className="text-muted-foreground text-sm max-w-xs">{error || 'Something went wrong. Please try again.'}</p>
              <button onClick={() => { setStep('review'); setError('') }} className="rounded-full bg-pine-600 px-8 py-3 font-semibold text-white hover:bg-pine-700 transition-colors">
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
              <h2 className="text-2xl font-bold text-foreground">Welcome to Fleurite!</h2>
              {orderNumber && <p className="text-muted-foreground text-sm">Order #{orderNumber}</p>}
              <p className="text-muted-foreground">Check your email for instant access to your guides.</p>
              <button onClick={() => onOpenChange(false)} className="rounded-full border border-pine-300 text-pine-600 px-8 py-3 font-semibold hover:bg-pine-50 transition-colors">
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  )
}
