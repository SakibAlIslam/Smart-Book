import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest): NextResponse {
    const requestHeaders = new Headers(request.headers);

    // Set the current pathname in headers
    requestHeaders.set("x-pathname", request.nextUrl.pathname);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

// Optionally, scope middleware to specific paths
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
