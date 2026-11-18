import type { Metadata } from "next";
import Link from "next/link";
import { foods } from "@/data";
import { ZoneChip } from "@/components/ZoneChip";
import { headline } from "@/lib/verdict";

export const metadata: Metadata = { title: "All checked foods, A to Z", description: "Every food we've checked for FODMAPs, with the low amount in grams.", alternates: { canonical: "/foods" } };

export default function FoodsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-8">
      <h1 className="text-[34px] font-semibold">All checked foods</h1>
      <p className="mt-2 text-muted">{foods.length} foods so far. More are added in batches after checking.</p>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {foods.map((f) => { const h = headline(f); return (
          <li key={f.slug}><Link href={`/food/${f.slug}`} className="flex items-center justify-between gap-3 py-3 hover:text-brand-ink"><span>{f.name[0].toUpperCase() + f.name.slice(1)}</span><ZoneChip zone={h.zone} label={h.chip} /></Link></li>); })}
      </ul>
    </div>
  );
}
