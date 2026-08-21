/**
 * Attribution capture — links a DM link click to the eventual Dodo payment.
 *
 * The chain we are closing:
 *
 *   post -> comment -> private-reply DM -> ?ref=<code> -> checkout metadata
 *        -> Dodo webhook -> Order.attributionRef
 *
 * Before this file existed the chain was broken at the very first step: nothing
 * on the site read query parameters, and the checkout call sent no metadata, so
 * a sale could never be traced back to the post that produced it.
 *
 * Dodo metadata constraints (documented): max 50 pairs, keys <= 40 chars,
 * string values <= 500 chars, values may only be string/number/boolean.
 */

export const REF_PARAM = 'ref'
export const POST_PARAM = 'post'

export const REF_STORAGE_KEY = 'fleurite_attribution'
export const REF_COOKIE = 'fl_ref'

/** Attribution survives a 30-day consideration window. */
export const REF_TTL_DAYS = 30

/** Codes are `fl` + base32; anything else is ignored rather than trusted. */
const REF_PATTERN = /^fl[a-z0-9]{8,32}$/
/** Brief ids look like b001; keep this strict so metadata cannot be injected. */
const POST_PATTERN = /^[a-z0-9_-]{1,32}$/i

export type Attribution = {
  ref: string
  post?: string
  capturedAt: number
}

/** Validate a ref code. Returns '' when it does not match the issued shape. */
export function sanitizeRef(value: unknown): string {
  const text = String(value ?? '').trim().toLowerCase()
  return REF_PATTERN.test(text) ? text : ''
}

/** Validate a post/brief id. Returns '' when it looks unsafe. */
export function sanitizePost(value: unknown): string {
  const text = String(value ?? '').trim()
  return POST_PATTERN.test(text) ? text : ''
}

function isExpired(capturedAt: number, now: number): boolean {
  return now - capturedAt > REF_TTL_DAYS * 24 * 60 * 60 * 1000
}

/**
 * Persist an attribution in localStorage AND a cookie.
 *
 * Both, deliberately: localStorage survives tab reloads but is unavailable in
 * some privacy modes, while the cookie is readable server-side if we ever need
 * it there. If both fail the payment still works — attribution is best effort
 * and must never block a sale.
 */
export function storeAttribution(ref: string, post?: string): Attribution | null {
  const safeRef = sanitizeRef(ref)
  if (!safeRef) return null
  const record: Attribution = {
    ref: safeRef,
    post: sanitizePost(post) || undefined,
    capturedAt: Date.now(),
  }
  try {
    window.localStorage.setItem(REF_STORAGE_KEY, JSON.stringify(record))
  } catch {
    // Private mode / storage disabled: fall through to the cookie.
  }
  try {
    const maxAge = REF_TTL_DAYS * 24 * 60 * 60
    document.cookie =
      `${REF_COOKIE}=${encodeURIComponent(safeRef)}; path=/; max-age=${maxAge}; SameSite=Lax`
  } catch {
    // Nothing more we can do; the sale is unaffected.
  }
  return record
}

/** Read the stored attribution, ignoring anything expired or malformed. */
export function readAttribution(now: number = Date.now()): Attribution | null {
  try {
    const raw = window.localStorage.getItem(REF_STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<Attribution>
      const ref = sanitizeRef(parsed?.ref)
      const capturedAt = Number(parsed?.capturedAt ?? 0)
      if (ref && capturedAt && !isExpired(capturedAt, now)) {
        return { ref, post: sanitizePost(parsed?.post) || undefined, capturedAt }
      }
    }
  } catch {
    // Unreadable storage is treated as "no attribution", never as an error.
  }
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${REF_COOKIE}=([^;]*)`))
    const ref = sanitizeRef(match ? decodeURIComponent(match[1]) : '')
    if (ref) return { ref, capturedAt: now }
  } catch {
    // Ignore.
  }
  return null
}

/**
 * Build the Dodo `metadata` object for a checkout call.
 *
 * Keys are short and values are strings, matching Dodo's documented limits
 * (<= 40 char keys, <= 500 char string values, no objects or nulls).
 */
export function checkoutMetadata(attribution: Attribution | null): Record<string, string> {
  if (!attribution?.ref) return {}
  const metadata: Record<string, string> = { attribution_ref: attribution.ref }
  if (attribution.post) metadata.attribution_post = attribution.post
  metadata.attribution_source = 'instagram_dm'
  return metadata
}
