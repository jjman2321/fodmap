import Link from "next/link";
import { foods, getFood } from "@/data";
import { FoodSearch } from "@/components/FoodSearch";
import { FoodTile } from "@/components/FoodTile";
import { checkerIndex } from "@/lib/index-data";
import { JsonLd } from "@/lib/jsonld";

const TRY = ["garlic", "avocado", "hummus", "sweet-potato"];

export default function Home() {
  const items = checkerIndex();
  return (
    <div className="mx-auto max-w-5xl px-4">
      <JsonLd graph={[]} />
      <section className="mx-auto max-w-xl pb-10 pt-12 text-center sm:pt-16">
        <h1 className="text-[40px] font-semibold sm:text-[54px]">Is it low FODMAP?</h1>
        <p className="mt-3 text-[18px] text-muted">The answer in grams, with the source for every number.</p>
        <div className="mt-7 text-left"><FoodSearch items={items} /></div>
        <p className="mt-4 text-[15px] text-muted">
          Try:{" "}
          {TRY.map((slug, i) => { const f = getFood(slug); return f ? (<span key={slug}>{i ? " · " : ""}<Link href={`/food/${slug}`} className="text-brand-ink underline-offset-4 hover:underline">{f.name}</Link></span>) : null; })}
        </p>
      </section>

      <section aria-labelledby="checked">
        <div className="flex items-baseline justify-between">
          <h2 id="checked" className="text-[22px] font-semibold">Checked foods</h2>
          <Link href="/foods" className="text-[15px] text-brand-ink">See all →</Link>
        </div>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {foods.map((f) => (<li key={f.slug}><FoodTile food={f} /></li>))}
        </ul>
      </section>

      <nav aria-label="More" className="mt-12 flex flex-col gap-1 border-t border-line pt-6 text-[17px] sm:flex-row sm:gap-8">
        <Link href="/check" className="py-1.5 font-medium hover:text-brand-ink">Meal check →</Link>
        <Link href="/region/middle-eastern" className="py-1.5 font-medium hover:text-brand-ink">Middle Eastern foods →</Link>
        <Link href="/printable" className="py-1.5 font-medium hover:text-brand-ink">Printable list →</Link>
      </nav>
      <p className="mt-3 text-[15px] text-muted">Every number links to its public source. <Link href="/how-we-check" className="underline">How we check</Link></p>
    </div>
  );
}
