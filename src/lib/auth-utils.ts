import { SignJWT, jwtVerify } from 'jose'
import { cookies, headers } from 'next/headers'
import { db } from '@/lib/db'

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'secureloop-jwt-secret'
)

export const COOKIE_NAME = 'session_token'

export async function createSession(user: { id: string; email: string; role: string }) {
  const token = await new SignJWT({ userId: user.id, email: user.email, role: user.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(JWT_SECRET)

  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

  await db.authSession.create({
    data: {
      userId: user.id,
      token,
      expiresAt,
    },
  })

  return { token, expiresAt }
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as { userId: string; email: string; role: string }
  } catch {
    return null
  }
}

export async function getSessionUser() {
  // First try cookie-based auth
  const cookieStore = await cookies()
  let token = cookieStore.get(COOKIE_NAME)?.value

  // Fallback: check Authorization header for API clients
  if (!token) {
    const headersList = await headers()
    const authHeader = headersList.get('authorization')
    if (authHeader?.startsWith('Bearer ')) {
      token = authHeader.slice(7)
    }
  }

  if (!token) return null

  const payload = await verifySession(token)
  if (!payload) return null

  const user = await db.user.findUnique({
    where: { id: payload.userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      emailVerified: true,
      createdAt: true,
    },
  })
  return user
}

export function setSessionCookie(token: string) {
  return {
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  }
}

export function deleteSessionCookie() {
  return {
    name: COOKIE_NAME,
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: 0,
    path: '/',
  }
}
