import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { product_cart, customer, return_url } = body

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
        payment_link: true // THIS IS THE MAGIC FLAG
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

