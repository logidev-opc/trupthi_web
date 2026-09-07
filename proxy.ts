import { NextResponse, type NextRequest } from "next/server";

// Block patterns commonly used by malicious automated scanners and vulnerability probes
const BLOCKED_PATH_PATTERNS = [
  /\/\.env/i,
  /\/\.git/i,
  /\/\.aws/i,
  /\/\.config/i,
  /\/wp-admin/i,
  /\/wp-login/i,
  /\/phpinfo/i,
  /\/xmlrpc/i,
  /\/actuator/i,
  /\/node_modules/i,
  /\.(sql|bak|conf|ini|log|sh|env)$/i,
];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Block malicious probing attempts immediately with 403 Forbidden
  for (const pattern of BLOCKED_PATH_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse("Access Denied: Malicious Request Pattern Detected", {
        status: 403,
        headers: {
          "Content-Type": "text/plain",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }
  }

  // 2. Protect against path traversal attempts
  if (pathname.includes("..") || pathname.includes("%2e%2e")) {
    return new NextResponse("Bad Request: Invalid Path Traversal", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }

  const response = NextResponse.next();

  // 3. Inject strict security headers on all edge responses
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), browsing-topics=()"
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
