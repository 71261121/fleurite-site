'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Download,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ShieldCheck,
  Mail,
  Loader2,
  ArrowRight,
  FileText,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ProductPreview {
  name: string
  subtitle?: string | null
  description: string
  benefits?: string[]
  productType?: string
  image?: string | null
}

interface OrderItemPreview {
  productName: string
  price: number
  product: ProductPreview | null
}

interface OrderData {
  orderNumber: string
  customerName?: string | null
  customerEmail?: string | null
  paidAt?: string
  amount: number
  currency: string
  items: OrderItemPreview[]
}

function DownloadContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [order, setOrder] = useState<OrderData | null>(null)
  const [expiresAt, setExpiresAt] = useState<string | null>(null)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    if (!token) {
      setLoading(false)
      setError('No download token provided. Please check your email link.')
      return
    }

    async function verifyToken() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`/api/download?token=${encodeURIComponent(token!)}`)
        const data = await res.json()

        if (!res.ok || !data.success) {
          setError(data.error || 'Invalid or expired download link.')
        } else {
          setOrder(data.order)
          setExpiresAt(data.expiresAt)
        }
      } catch (err) {
        console.error('Error verifying token:', err)
        setError('Failed to verify download token. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    verifyToken()
  }, [token])

  const handleDownload = () => {
    if (!token) return
    setDownloading(true)
    const downloadUrl = `/api/download?token=${encodeURIComponent(token)}&action=file`
    window.location.href = downloadUrl
    setTimeout(() => {
      setDownloading(false)
    }, 2000)
  }

  // Calculate remaining time string
  const getRemainingTime = () => {
    if (!expiresAt) return null
    const diff = new Date(expiresAt).getTime() - new Date().getTime()
    if (diff <= 0) return 'Expired'
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes}m remaining`
  }

  const primaryProduct = order?.items?.[0]?.product

  return (
    <main className="relative min-h-screen overflow-hidden bg-cream py-12 px-4 sm:px-6 lg:px-8">
      {/* Background radial gradients */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(155,27,78,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="font-serif italic text-3xl font-bold text-rose tracking-tight">
              SecureLoop
            </span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Emotional Wellness & Attachment Healing
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-border/40 shadow-sm p-8"
          >
            <Loader2 className="h-10 w-10 animate-spin text-rose" />
            <p className="mt-4 text-base font-medium text-foreground">
              Verifying secure download token...
            </p>
          </motion.div>
        )}

        {/* Error / Expired State */}
        {!loading && error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-rose/20 bg-white p-8 sm:p-10 shadow-sm text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-light text-rose">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground sm:text-3xl">
              Download Link Expired or Invalid
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-md mx-auto">
              {error}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="btn-glow h-12 rounded-xl bg-rose text-white font-semibold hover:bg-rose-dark"
              >
                <Link href="/?tab=library">
                  Go to My Library
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-rose/20 text-rose hover:bg-rose-light/40"
              >
                <a href="mailto:support@secureloop.me">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </a>
              </Button>
            </div>
          </motion.div>
        )}

        {/* Success State — Token Valid */}
        {!loading && !error && order && (
          <div className="space-y-6">
            {/* Download Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-border/40 bg-white p-6 sm:p-10 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 border border-green-200">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Payment Verified
                  </span>
                  <h1 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground sm:text-3xl">
                    Your SecureLoop Guide is Ready
                  </h1>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Order #{order.orderNumber} &bull; Paid
                  </p>
                </div>
                {expiresAt && (
                  <div className="flex items-center gap-2 rounded-xl bg-gold-light/60 px-4 py-2 border border-gold/20 text-xs font-medium text-foreground">
                    <Clock className="h-4 w-4 text-gold" />
                    <span>{getRemainingTime() || '24h limit'}</span>
                  </div>
                )}
              </div>

              {/* Download Action Section */}
              <div className="mt-8 rounded-2xl bg-rose-light/40 p-6 text-center border border-rose/10">
                <FileText className="mx-auto h-12 w-12 text-rose" />
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  Ready to Download Your Digital Copy
                </h3>
                <p className="mt-1 text-xs text-muted-foreground max-w-sm mx-auto">
                  Click below to receive your high-resolution PDF guide immediately.
                </p>

                <div className="mt-6">
                  <Button
                    onClick={handleDownload}
                    disabled={downloading}
                    className="btn-glow h-14 px-8 rounded-xl bg-rose text-white font-semibold text-base shadow-lg hover:bg-rose-dark transition-all scale-100 hover:scale-[1.02]"
                  >
                    {downloading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-5 w-5" />
                        Download PDF Guide
                      </>
                    )}
                  </Button>
                </div>

                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-green-600" /> Secure SSL Download
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gold" /> Expires in 24 hours
                  </span>
                </div>
              </div>

              {/* Product Content Preview Section */}
              <div className="mt-10">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-rose" />
                  Product Content Preview
                </h3>

                {order.items.map((item, idx) => {
                  const p = item.product
                  return (
                    <div
                      key={idx}
                      className="mt-4 rounded-2xl border border-border/50 bg-cream/30 p-6 space-y-4"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-foreground">
                            {p?.name || item.productName}
                          </h4>
                          {p?.subtitle && (
                            <p className="text-xs text-rose font-medium mt-0.5">
                              {p.subtitle}
                            </p>
                          )}
                        </div>
                        <span className="rounded-full bg-rose-light px-3 py-1 text-xs font-bold text-rose">
                          ${item.price.toFixed(2)} USD
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {p?.description ||
                          'Comprehensive interactive workbook and guide for emotional regulation, attachment healing, and building secure relationships.'}
                      </p>

                      {p?.benefits && p.benefits.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                            What you will discover:
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {p.benefits.map((b, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2 text-xs text-muted-foreground"
                              >
                                <Sparkles className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Bottom Actions & Support */}
              <div className="mt-10 border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/?tab=library"
                  className="inline-flex items-center text-sm font-medium text-rose hover:text-rose-dark transition-colors"
                >
                  View in My Library <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                <p className="text-xs text-muted-foreground">
                  Questions? Reach out to{' '}
                  <a href="mailto:support@secureloop.me" className="text-rose underline">
                    support@secureloop.me
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  )
}

export default function DownloadPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-cream">
          <Loader2 className="h-8 w-8 animate-spin text-rose" />
        </main>
      }
    >
      <DownloadContent />
    </Suspense>
  )
}
