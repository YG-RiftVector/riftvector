import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle Azure Static Web Apps health probe
  if (request.nextUrl.pathname === '/.swa/health') {
    return new NextResponse('OK', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }

  // Continue with the normal request for all other paths
  return NextResponse.next()
}

// Configure which paths the middleware will run on
export const config = {
  matcher: [
    // Match the health probe path
    '/.swa/health',
    '/((?!.swa).*)'
    // Add any other paths that need middleware processing here
    // Example: '/api/:path*',
  ],
}