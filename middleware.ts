import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Beskytter kun den hemmelige URL-en
    if (request.nextUrl.pathname.startsWith('/x90-ops-center-delta')) {
        const authCookie = request.cookies.get('admin_session');

        // Hvis cookien ikke stemmer med passordet i .env
        if (authCookie?.value !== process.env.ADMIN_PASSWORD) {
            return NextResponse.redirect(new URL('/admin-login', request.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/x90-ops-center-delta/:path*',
};
