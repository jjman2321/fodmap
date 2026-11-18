import type { NextConfig } from "next";
import { indexingOn } from "./src/lib/indexing";

const SECURITY = [
  { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self' https://cloudflareinsights.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  // One address per page: /food/garlic, never /food/garlic/ (Next sends a 308).
  trailingSlash: false,
  poweredByHeader: false,
  // Busy build machines timed pages out on earlier sites.
  staticPageGenerationTimeout: 180,
  async redirects() {
    return [{ source: "/:path*", has: [{ type: "host", value: "www.isitlowfodmap.com" }], destination: "https://isitlowfodmap.com/:path*", permanent: true }];
  },
  async headers() {
    const security = process.env.NODE_ENV === "production" ? [{ source: "/:path*", headers: SECURITY }] : [];
    // Pages: check for a newer version on every visit so a deploy shows at once (Wird lesson).
    const pages = { source: "/((?!_next/static|_next/image|fonts/|og/).*)", headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }] };
    // Before launch: belt and braces on top of the noindex meta tag.
    const noindex = indexingOn() ? [] : [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
    return [...security, pages, ...noindex];
  },
};

export default nextConfig;
