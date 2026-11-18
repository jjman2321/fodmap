import Link from "next/link";
import { messages as m } from "@/lib/i18n";
import { Wordmark } from "./Wordmark";
import { MobileMenu } from "./MobileMenu";

export const NAV = [
  { href: "/foods", label: m.nav.foods },
  { href: "/region/middle-eastern", label: "Middle Eastern" },
  { href: "/check", label: m.nav.check },
  { href: "/printable", label: m.nav.printable },
  { href: "/how-we-check", label: m.nav.how },
];

export function SiteHeader() {
  return (
    <header data-site className="relative border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-[22px]" aria-label="isitlowfodmap home"><Wordmark /></Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 text-[15px]">
            {NAV.map((i) => (<li key={i.href}><Link href={i.href} className="rounded-full px-3 py-2 hover:bg-chip">{i.label}</Link></li>))}
          </ul>
        </nav>
        <MobileMenu items={NAV} labels={{ menu: m.nav.menu, close: m.nav.close }} />
      </div>
    </header>
  );
}
