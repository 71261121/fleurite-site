import { NextRequest, NextResponse } from 'next/server'
import { sanitizePost, sanitizeRef } from '@/lib/attribution'

/**
 * Re-validate attribution metadata server-side. The client is untrusted, and a
 * metadata object Dodo rejects would fail the entire payment — so anything
 * unrecognised is dropped rather than forwarded.
 *
 * Dodo's documented limits: max 50 pairs, keys <= 40 chars, string values
 * <= 500 chars, values must be string/number/boolean (no objects, arrays, null).
 */
function sanitizeMetadata(raw: unknown): Record<string, string> {
  if (!raw || typeof raw !== 'object') return {}
  const input = raw as Record<string, unknown>
  const ref = sanitizeRef(input.attribution_ref)
  if (!ref) return {}
  const metadata: Record<string, string> = { attribution_ref: ref }
  const post = sanitizePost(input.attribution_post)
  if (post) metadata.attribution_post = post
  const source = String(input.attribution_source ?? '').slice(0, 40)
  if (/^[a-z0-9_]+$/.test(source)) metadata.attribution_source = source
  return metadata
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { product_cart, customer, return_url, metadata } = body

    const apiKey = process.env.DODO_PAYMENTS_API_KEY
    const environment = process.env.DODO_PAYMENTS_ENVIRONMENT || 'test_mode'

    if (!apiKey) {
      return NextResponse.json({ error: 'DodoPayments API key not configured' }, { status: 500 })
    }

    // Direct REST API endpoint
    const baseUrl = environment === 'live_mode'
      ? 'https://live.dodopayments.com'
      : 'https://test.dodopayments.com'

    console.log('[DodoCheckout] Requesting payment link from:', baseUrl)

    const safeMetadata = sanitizeMetadata(metadata)
    if (Object.keys(safeMetadata).length) {
      // Log key names only; the ref itself is an opaque id but there is no
      // reason to write it to logs.
      console.log('[DodoCheckout] attribution keys:', Object.keys(safeMetadata))
    }

    const res = await fetch(`${baseUrl}/payments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        billing: { country: 'US' }, // Default country for formatting
        customer: customer || {},
        product_cart: product_cart || [{ product_id: process.env.NEXT_PUBLIC_DODO_PRODUCT_ID, quantity: 1 }],
        return_url: return_url || 'https://www.fleurite.me/checkout/success',
        payment_link: true, // THIS IS THE MAGIC FLAG
        // Metadata is echoed back in the payment.succeeded webhook, which is how
        // a sale is traced to the DM that produced it. Omitted entirely when
        // there is no attribution, so an organic purchase sends no empty object.
        ...(Object.keys(safeMetadata).length ? { metadata: safeMetadata } : {}),
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error('[DodoCheckout] API Error:', res.status, errText)
      return NextResponse.json({
        error: `DodoPayments API error: ${res.status}`,
        details: errText,
        environment: environment,
        baseUrl: baseUrl,
      }, { status: res.status })
    }

    const data = await res.json()
    
    // Return checkout URL for redirection
    return NextResponse.json({
      success: true,
      checkout_url: data.payment_link,
      session_id: data.payment_id,
    })

  } catch (error: any) {
    console.error('[DodoCheckout] Exception:', error.message)
    return NextResponse.json({
      error: 'Failed to create checkout session',
      details: error.message,
    }, { status: 500 })
  }
}

