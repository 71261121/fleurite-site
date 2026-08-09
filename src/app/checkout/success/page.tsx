'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id') || searchParams.get('checkout_session_id')
  const paymentId = searchParams.get('payment_id')
  const dodoStatus = searchParams.get('status')
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [orderNumber, setOrderNumber] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')

  useEffect(() => {
    // If DodoPayments redirects with status=succeeded and payment_id
    if (dodoStatus === 'succeeded' && paymentId) {
      async function processDodoPayment() {
        try {
          // Tell our backend to verify and generate download link immediately
          // even if webhook hasn't processed it yet
          const res = await fetch('/api/checkout/dodo-success', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ paymentId })
          })
          const data = await res.json()
          
          if (res.ok && data.success) {
            setOrderNumber(data.orderNumber)
            setDownloadUrl(data.downloadUrl)
            setStatus('success')
          } else {
            console.error('Dodo success processing failed:', data.error)
            // Even if immediate generation fails, webhook provides backup
            setStatus('success') 
          }
        } catch (err) {
          console.error('Error:', err)
          setStatus('success') // Default to success screen since payment cleared
        }
      }
      processDodoPayment()
      return
    }

    if (!sessionId) {
      // Show error if nothing is matched
      setStatus('error')
      return
    }

    // Existing Stripe / Simulated confirmation flow
    async function confirmOrder() {
      try {
        // First, get the checkout session details
        const statusRes = await fetch(`/api/checkout/status?id=${sessionId}`)
        const statusData = await statusRes.json()

        if (!statusRes.ok || statusData.status === 'expired') {
          setStatus('error')
          return
        }

        if (statusData.status === 'completed') {
          // Already confirmed
          setStatus('success')
          return
        }

        // Confirm the order
        const confirmRes = await fetch('/api/checkout/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            items: [{
              productName: "The Avoidant's Unwritten Rules",
              price: 27,
            }],
            amount: 27,
          }),
        })

        const confirmData = await confirmRes.json()

        if (confirmRes.ok && confirmData.success) {
          setOrderNumber(confirmData.orderNumber || '')
          if (confirmData.downloadUrl) {
            setDownloadUrl(confirmData.downloadUrl)
          }
          setStatus('success')
        } else {
          setStatus('error')
        }
      } catch (err) {
        console.error('Order confirmation error:', err)
        setStatus('error')
      }
    }

    confirmOrder()
  }, [sessionId, paymentId, dodoStatus])

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        {status === 'loading' && (
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 border-4 border-pine-200 border-t-rose-600 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Verifying your payment and preparing download...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Payment Successful!</h1>
            {orderNumber && <p className="text-sm text-muted-foreground mb-6">Order #{orderNumber}</p>}
            
            {downloadUrl ? (
              <div className="mb-6 space-y-3">
                <a
                  href={downloadUrl}
                  className="w-full inline-flex items-center justify-center gap-2 bg-pine-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-pine-700 transition-colors shadow-lg"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Your Book Now
                </a>
                <p className="text-xs text-muted-foreground">
                  A backup link has also been sent to your email.
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground mb-6 font-medium">Your book is being sent to your email right now. Please check your inbox.</p>
            )}

            <Link
              href="/"
              className="inline-block border border-pine-200 text-pine-700 px-6 py-3 rounded-xl font-semibold hover:bg-pine-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">Please try again or contact support if you were already charged.</p>
            <Link
              href="/"
              className="inline-block bg-pine-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pine-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-cream flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-pine-200 border-t-rose-600 rounded-full animate-spin" />
      </main>
    }>
      <SuccessContent />
    </Suspense>
  )
}
