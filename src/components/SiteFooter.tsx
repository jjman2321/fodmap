import Link from "next/link";
import { fmt, messages as m } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { Wordmark } from "./Wordmark";

const f = m.footer;
const GROUPS = [
  { title: f.groups.explore, links: [["/foods", m.nav.foods], ["/region/middle-eastern", "Middle Eastern foods"], ["/check", m.nav.check], ["/printable", m.nav.printable]] },
  { title: f.groups.trust, links: [["/how-we-check", m.nav.how], ["/changes", f.changes], [`mailto:${SITE.email}?subject=Correction`, f.contact]] },
  { title: f.groups.legal, links: [["/disclaimer", f.disclaimerLink], ["/privacy", f.privacy], ["/terms", f.terms]] },
] as const;

export function SiteFooter() {
  return (
    <footer data-site className="below-fold mt-16 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="text-[20px]"><Wordmark /></div>
        {GROUPS.map((g) => (
          <div key={g.title}>
            <h2 className="text-sm font-semibold">{g.title}</h2>
            <ul className="mt-2 space-y-1 text-[15px] text-muted">
              {g.links.map(([href, label]) => (<li key={href}><Link href={href} className="inline-block py-1 hover:text-ink">{label}</Link></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl space-y-1 px-4 pb-10 text-[13px] text-muted">
        <p data-testid="footer-disclaimer">{f.disclaimer}</p>
        <p>{f.notAffiliated}</p>
        <p>{fmt(f.rights, { year: new Date().getFullYear(), company: SITE.company })}</p>
      </div>
    </footer>
  );
}
