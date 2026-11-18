import Link from "next/link";
import { foods } from "@/data";
import { FoodSearch } from "@/components/FoodSearch";
import { FoodArt } from "@/components/FoodArt";
import { ZoneChip } from "@/components/ZoneChip";
import { checkerIndex } from "@/lib/index-data";
import { headline } from "@/lib/verdict";
import { JsonLd } from "@/lib/jsonld";

export default function Home() {
  const items = checkerIndex();
  return (
    <div className="mx-auto max-w-3xl px-4 pt-10">
      <JsonLd graph={[]} />
      <h1 className="text-center text-[38px] font-semibold sm:text-[52px]">Is it low FODMAP?</h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-[18px] text-muted">The amount in grams, which FODMAP, and where every number comes from.</p>
      <div className="mt-7"><FoodSearch items={items} /></div>

      <section className="mt-8" aria-labelledby="popular">
        <h2 id="popular" className="text-[15px] font-semibold text-muted">Checked foods</h2>
        <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {foods.map((f) => { const h = headline(f); return (
            <li key={f.slug}><Link href={`/food/${f.slug}`} className="flex items-center gap-3 rounded-[var(--radius-card)] border border-line bg-card p-3 hover:border-brand">
              <FoodArt name={f.illustration} size={48} /><span className="flex-1 font-medium">{f.name[0].toUpperCase() + f.name.slice(1)}</span><ZoneChip zone={h.zone} label={h.chip} /></Link></li>); })}
        </ul>
      </section>

      <section className="mt-10 grid gap-3 sm:grid-cols-3" aria-label="Tools">
        {[
          ["/check", "Meal check", "Add 2–5 foods and see if their FODMAPs stack up."],
          ["/region/middle-eastern", "Middle Eastern foods", "Tahini, hummus, chickpeas, lentils and more."],
          ["/printable", "Printable list", "One page, by food group, with grams."],
        ].map(([href, t, d]) => (
          <Link key={href} href={href} className="rounded-[var(--radius-card)] bg-soft p-4 hover:outline hover:outline-brand">
            <h2 className="text-[17px] font-semibold">{t}</h2><p className="mt-1 text-[15px] text-muted">{d}</p></Link>
        ))}
      </section>

      <section className="mt-10 border-t border-line pt-6" aria-labelledby="how">
        <h2 id="how" className="text-[20px] font-semibold">How we check</h2>
        <ul className="mt-2 space-y-1 text-[16px]">
          <li>Every number links to a public source: a lab paper or the testing lab&apos;s own public posts.</li>
          <li>Where sources disagree, we show both and what changed.</li>
          <li>We never say &ldquo;low&rdquo; without lab data. <Link href="/how-we-check" className="text-brand-ink underline">Read the method</Link>.</li>
        </ul>
      </section>
    </div>
  );
}
