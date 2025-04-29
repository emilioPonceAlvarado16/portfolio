// middleware.js
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hasAccess  = Boolean(request.cookies.get('accessToken'))
  const hasRefresh = Boolean(request.cookies.get('refreshToken'))

  if (!hasAccess || !hasRefresh) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  return NextResponse.next()
}

// Aplica el middleware a todas las rutas (páginas y API routes),
// excepto archivos estáticos de Next (_next/*, favicon, etc.)
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
