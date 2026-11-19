import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { foods } from "@/data";
import { REGIONS, getRegion } from "@/data/regions";
import { FoodTile } from "@/components/FoodTile";
import { Row } from "@/components/Row";
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
    <div className="mx-auto max-w-4xl px-4 pt-8">
      <JsonLd graph={[breadcrumbs([{ name: "Regions", path: `/region/${r.slug}` }, { name: r.name, path: `/region/${r.slug}` }])]} />
      <h1 className="text-[34px] font-semibold">{r.title}</h1>
      <p className="mt-3 text-[17px] text-muted">{r.intro}</p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {list.map((f) => (<li key={f.slug}><FoodTile food={f} /></li>))}
      </ul>
      <div className="mt-8">
        <Row title="Eating out: what to ask">
          <dl className="grid gap-3 sm:grid-cols-2">{r.eatingOut.map((e) => (<div key={e.title} className="rounded-2xl bg-chip p-4"><dt className="font-semibold">{e.title}</dt><dd className="mt-1 text-[15px]">{e.text}</dd></div>))}</dl>
        </Row>
      </div>
    </div>
  );
}
