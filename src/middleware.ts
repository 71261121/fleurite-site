import { NextResponse, type NextRequest } from 'next/server'

// Routes that need auth protection
const PROTECTED_ROUTES = ['/api/user', '/api/orders']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  // ─── Security Headers ───
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')

  // ─── Auth Protection ───
  for (const route of PROTECTED_ROUTES) {
    if (pathname === route || pathname.startsWith(route + '/')) {
      const token = request.cookies.get('session_token')?.value
        || request.cookies.get('auth-token')?.value
        || request.headers.get('authorization')?.replace('Bearer ', '')

      if (!token) {
        if (pathname.startsWith('/api/')) {
          return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
        }
        const loginUrl = new URL('/', request.url)
        loginUrl.searchParams.set('auth', 'login')
        return NextResponse.redirect(loginUrl)
      }
    }
  }

  // ─── Bypass auth for webhook ───
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
    '/((?!_next/static|_next/image|favicon|logo|robots|sitemap|product-|avatar-|hero-).*)',
  ],
}
