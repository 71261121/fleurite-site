'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [orderNumber, setOrderNumber] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')

  useEffect(() => {
    if (!sessionId) {
      setStatus('error')
      return
    }

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
  }, [sessionId])

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        {status === 'loading' && (
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 border-4 border-pine-200 border-t-rose-600 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Confirming your order...</p>
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
            {orderNumber && <p className="text-sm text-muted-foreground mb-4">Order #{orderNumber}</p>}
            <p className="text-muted-foreground mb-6">Check your email for your download link.</p>
            {downloadUrl && (
              <a
                href={downloadUrl}
                className="inline-flex items-center gap-2 bg-pine-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pine-700 transition-colors mb-4"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Your Book
              </a>
            )}
            <p className="text-xs text-muted-foreground">Link expires in 24 hours.</p>
            <Link
              href="/"
              className="inline-block bg-pine-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pine-700 transition-colors"
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
            <p className="text-muted-foreground mb-6">Please try again or contact support.</p>
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
