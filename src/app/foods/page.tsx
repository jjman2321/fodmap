import type { Metadata } from "next";
import Link from "next/link";
import { foods } from "@/data";
import { CATEGORIES } from "@/data/categories";
import { ZoneChip } from "@/components/ZoneChip";
import { headline } from "@/lib/verdict";

export const metadata: Metadata = { title: "All checked foods, by type", description: "Every food we've checked for FODMAPs, grouped by type, with the low amount in grams.", alternates: { canonical: "/foods" } };

export default function FoodsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-8">
      <h1 className="text-[34px] font-semibold">All checked foods</h1>
      <p className="mt-2 text-muted">{foods.length} foods so far. More are added in batches after checking.</p>
      {CATEGORIES.map((c) => { const list = foods.filter((f) => f.category === c.slug); if (!list.length) return null; return (
        <section key={c.slug} className="mt-8">
          <h2 className="text-[20px] font-semibold"><Link href={`/category/${c.slug}`} className="hover:text-brand-ink">{c.name}</Link></h2>
          <ul className="mt-2 divide-y divide-line border-y border-line">
            {list.map((f) => { const h = headline(f); return (
              <li key={f.slug}><Link href={`/food/${f.slug}`} className="flex items-center justify-between gap-3 py-2.5 hover:text-brand-ink"><span>{f.name[0].toUpperCase() + f.name.slice(1)}</span><ZoneChip zone={h.zone} label={h.chip} /></Link></li>); })}
          </ul>
        </section>); })}
    </div>
  );
}
