'use client'

/**
 * Captures `?ref=` from the URL on first load and records the click.
 *
 * Mounted once in the root layout so every entry point is covered — a DM link
 * can land on `/`, `/guide`, or any campaign page. The component renders
 * nothing and never blocks paint.
 */

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  POST_PARAM,
  REF_PARAM,
  sanitizePost,
  sanitizeRef,
  storeAttribution,
} from '@/lib/attribution'

export default function AttributionCapture() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = sanitizeRef(searchParams.get(REF_PARAM))
    if (!ref) return
    const post = sanitizePost(searchParams.get(POST_PARAM))
    storeAttribution(ref, post)

    // Record the click server-side so a visit is measurable even if the person
    // never buys. Fire-and-forget: a failed log must never affect the page.
    fetch('/api/attribution/click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ref, post }),
      keepalive: true,
    }).catch(() => {})
  }, [searchParams])

  return null
}
