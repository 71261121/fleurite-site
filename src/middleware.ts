import { NextResponse, type NextRequest } from 'next/server'

// In-memory rate limit store (per IP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

// Routes that need auth protection
const PROTECTED_ROUTES = ['/api/user', '/api/orders']

// Routes that need rate limiting
const RATE_LIMITED_ROUTES: Record<string, { windowMs: number; maxRequests: number }> = {
  '/api/auth/login': { windowMs: 60_000, maxRequests: 10 },
  '/api/auth/register': { windowMs: 60_000, maxRequests: 5 },
  '/api/auth/forgot-password': { windowMs: 60_000, maxRequests: 3 },
  '/api/auth/reset-password': { windowMs: 60_000, maxRequests: 5 },
  '/api/newsletter': { windowMs: 60_000, maxRequests: 10 },
  '/api/checkout/create': { windowMs: 60_000, maxRequests: 20 },
}

function getClientIp(request: NextRequest): string {
  const xff = request.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

function checkRateLimit(ip: string, route: string): { allowed: boolean; remaining: number; resetIn: number } {
  const config = RATE_LIMITED_ROUTES[route]
  if (!config) return { allowed: true, remaining: Infinity, resetIn: 0 }

  const key = `${ip}:${route}`
  const now = Date.now()
  const entry = rateLimitMap.get(key)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + config.windowMs })
    return { allowed: true, remaining: config.maxRequests - 1, resetIn: Math.ceil(config.windowMs / 1000) }
  }

  entry.count++
  if (entry.count > config.maxRequests) {
    return { allowed: false, remaining: 0, resetIn: Math.ceil((entry.resetAt - now) / 1000) }
  }

  return { allowed: true, remaining: config.maxRequests - entry.count, resetIn: Math.ceil((entry.resetAt - now) / 1000) }
}

// Cleanup old rate limit entries every 5 minutes
if (typeof globalThis !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of rateLimitMap) {
      if (now > entry.resetAt) rateLimitMap.delete(key)
    }
  }, 300_000)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const ip = getClientIp(request)
  const response = NextResponse.next()

  // ─── Security Headers ───
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')

  // ─── Rate Limiting ───
  for (const route of Object.keys(RATE_LIMITED_ROUTES)) {
    if (pathname === route || pathname.startsWith(route + '/')) {
      const { allowed, remaining, resetIn } = checkRateLimit(ip, route)
      response.headers.set('X-RateLimit-Remaining', String(remaining))
      response.headers.set('X-RateLimit-Reset', String(resetIn))

      if (!allowed) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.', retryAfter: resetIn },
          {
            status: 429,
            headers: {
              ...Object.fromEntries(response.headers),
              'Retry-After': String(resetIn),
            },
          }
        )
      }
    }
  }

  // ─── Auth Protection ───
  for (const route of PROTECTED_ROUTES) {
    if (pathname === route || pathname.startsWith(route + '/')) {
      const token = request.cookies.get('session_token')?.value
        || request.cookies.get('auth-token')?.value
        || request.headers.get('authorization')?.replace('Bearer ', '')

      if (!token) {
        // API routes return 401 JSON
        if (pathname.startsWith('/api/')) {
          return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
        }
        // Page routes redirect to home (auth modal will handle)
        const loginUrl = new URL('/', request.url)
        loginUrl.searchParams.set('auth', 'login')
        return NextResponse.redirect(loginUrl)
      }
    }
  }

  // ─── Bypass auth for webhook (signature-verified separately) ───
  if (pathname === '/api/checkout/webhook') {
    return response
  }

  // ─── Trailing Slash Redirect ───
  if (pathname !== '/' && pathname.endsWith('/')) {
    const newUrl = pathname.slice(0, -1)
    return NextResponse.redirect(new URL(newUrl + request.nextUrl.search, request.url))
  }

  return response
}

export const config = {
  matcher: [
    // Match all routes except static files, _next, and metadata routes
    '/((?!_next/static|_next/image|favicon|logo|robots|sitemap|product-|avatar-|hero-).*)',
  ],
}
