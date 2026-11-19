import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { foods } from "@/data";
import { CATEGORIES, getCategory } from "@/data/categories";
import { FoodTile } from "@/components/FoodTile";
import { JsonLd, breadcrumbs } from "@/lib/jsonld";

export const dynamicParams = false;
// Only categories that have foods get a page (no empty hubs).
export function generateStaticParams() { return CATEGORIES.filter((c) => foods.some((f) => f.category === c.slug)).map((c) => ({ slug: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = getCategory((await params).slug);
  return c ? { title: { absolute: c.title.slice(0, 60) }, description: `${c.name}: the low FODMAP amount in grams for each, with sources.`, alternates: { canonical: `/category/${c.slug}` } } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCategory((await params).slug);
  if (!c) notFound();
  const list = foods.filter((f) => f.category === c.slug);
  return (
    <div className="mx-auto max-w-5xl px-4 pt-8">
      <JsonLd graph={[breadcrumbs([{ name: "Foods", path: "/foods" }, { name: c.name, path: `/category/${c.slug}` }])]} />
      <nav aria-label="Breadcrumb" className="text-[13px] text-muted"><Link href="/foods" className="hover:text-ink">Foods</Link> › {c.name}</nav>
      <h1 className="mt-2 text-[32px] font-semibold sm:text-[40px]">{c.title}</h1>
      <p className="mt-2 text-[17px] text-muted">{list.length} {list.length === 1 ? "food" : "foods"}, each with the low amount in grams and its source.</p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {list.map((f) => (<li key={f.slug}><FoodTile food={f} /></li>))}
      </ul>
    </div>
  );
}
