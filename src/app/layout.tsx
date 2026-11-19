import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { indexingOn } from "@/lib/indexing";
import { SITE } from "@/lib/site";
import "./globals.css";

// Body text first: preloaded, size-matched fallback so nothing jumps.
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "optional" });
const display = Outfit({ variable: "--font-display-face", subsets: ["latin"], weight: ["300", "500", "600", "700", "800"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Is it low FODMAP? Grams, sources and swaps", template: "%s | isitlowfodmap" },
  description: "Check any food for FODMAPs: the amount in grams that's low, which FODMAP it has, and where the number comes from.",
  openGraph: { siteName: SITE.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: indexingOn() ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF8F3" },
    { media: "(prefers-color-scheme: dark)", color: "#131A16" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
