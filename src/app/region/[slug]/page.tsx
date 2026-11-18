import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { foods } from "@/data";
import { REGIONS, getRegion } from "@/data/regions";
import { FoodArt } from "@/components/FoodArt";
import { ZoneChip } from "@/components/ZoneChip";
import { Row } from "@/components/Row";
import { headline } from "@/lib/verdict";
import { JsonLd, breadcrumbs } from "@/lib/jsonld";

export const dynamicParams = false;
export function generateStaticParams() { return REGIONS.map((r) => ({ slug: r.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const r = getRegion((await params).slug);
  return r ? { title: { absolute: `${r.title}`.slice(0, 60) }, description: r.intro.slice(0, 158), alternates: { canonical: `/region/${r.slug}` } } : {};
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const r = getRegion((await params).slug);
  if (!r) notFound();
  const list = foods.filter((f) => f.regions.includes(r.slug as never));
  return (
    <div className="mx-auto max-w-3xl px-4 pt-8">
      <JsonLd graph={[breadcrumbs([{ name: "Regions", path: `/region/${r.slug}` }, { name: r.name, path: `/region/${r.slug}` }])]} />
      <h1 className="text-[34px] font-semibold">{r.title}</h1>
      <p className="mt-3 text-[17px] text-muted">{r.intro}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {list.map((f) => { const h = headline(f); return (
          <li key={f.slug}><Link href={`/food/${f.slug}`} className="flex items-center gap-3 rounded-[var(--radius-card)] border border-line bg-card p-3 hover:border-brand">
            <FoodArt name={f.illustration} size={52} /><span className="flex-1"><span className="block font-medium">{f.name[0].toUpperCase() + f.name.slice(1)}</span><span className="text-[13px] text-muted">{f.answer.split(". ")[0]}.</span></span><ZoneChip zone={h.zone} label={h.chip} /></Link></li>); })}
      </ul>
      <div className="below-fold mt-8">
        <Row title="Eating out: what to ask">
          <dl className="grid gap-3 sm:grid-cols-2">{r.eatingOut.map((e) => (<div key={e.title} className="rounded-2xl bg-chip p-4"><dt className="font-semibold">{e.title}</dt><dd className="mt-1 text-[15px]">{e.text}</dd></div>))}</dl>
        </Row>
      </div>
    </div>
  );
}
