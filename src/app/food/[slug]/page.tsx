import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { citedSources, foods, getFood, related, sameGroup } from "@/data";
import { GROUP_LABEL } from "@/data/schema";
import { FoodArt } from "@/components/FoodArt";
import { PortionSlider } from "@/components/PortionSlider";
import { AnswerCard } from "@/components/AnswerCard";
import { DoctorBox } from "@/components/DoctorBox";
import { Row } from "@/components/Row";
import { fmt, messages as m } from "@/lib/i18n";
import { JsonLd, breadcrumbs, ORG_ID } from "@/lib/jsonld";
import { fmtDate, headline } from "@/lib/verdict";
import { abs } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return foods.map((f) => ({ slug: f.slug })); }

const CATEGORY_LABEL: Record<string, string> = { vegetables: "Vegetables", fruit: "Fruit", "nuts-seeds": "Nuts and seeds", dairy: "Dairy", grains: "Grains and bread", legumes: "Beans and lentils", condiments: "Sauces and spreads", "herbs-spices": "Herbs and spices", protein: "Meat, fish and eggs", drinks: "Drinks" };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const food = getFood((await params).slug);
  if (!food) return {};
  const title = fmt(m.food.title, { name: food.name });
  return { title: { absolute: `${title} ${headline(food).short}`.slice(0, 60) }, description: food.answer.slice(0, 158), alternates: { canonical: `/food/${food.slug}` } };
}

export default async function FoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const food = getFood((await params).slug);
  if (!food) notFound();
  const main = food.servings[0];
  const cited = citedSources(food);
  const n = (id: string) => cited.findIndex((s) => s.id === id) + 1;
  const cite = (ids: string[]) => (<sup className="ml-0.5 text-[11px]">{ids.map((id) => (<a key={id} href={`#src-${n(id)}`} className="text-brand-ink no-underline">[{n(id)}]</a>))}</sup>);
  const stackMates = sameGroup(food).slice(0, 6);
  const rel = related(food);
  const title = fmt(m.food.title, { name: food.name });

  return (
    <article className="mx-auto max-w-3xl px-4 pb-8 pt-5">
      <JsonLd graph={[
        breadcrumbs([{ name: "Foods", path: "/foods" }, { name: CATEGORY_LABEL[food.category], path: `/category/${food.category}` }, { name: food.name, path: `/food/${food.slug}` }]),
        { "@type": "Article", headline: title, description: food.answer, datePublished: food.published, dateModified: food.checked, author: { "@id": ORG_ID }, publisher: { "@id": ORG_ID }, mainEntityOfPage: abs(`/food/${food.slug}`),
          about: { "@type": "Thing", name: food.name }, citation: cited.map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url, publisher: s.publisher })) },
      ]} />
      <div className="flex items-start justify-between gap-4">
        <div>
          <nav aria-label="Breadcrumb" className="text-[13px] text-muted"><Link href="/foods" className="hover:text-ink">Foods</Link> › <Link href={`/category/${food.category}`} className="hover:text-ink">{CATEGORY_LABEL[food.category]}</Link></nav>
          <h1 className="mt-2 text-[30px] font-semibold sm:text-[42px]">{title}</h1>
        </div>
        <FoodArt name={food.illustration} size={104} priority />
      </div>

      <AnswerCard food={food} cite={cite} />

      <div className="mt-8">
        {food.tier !== "estimated" && food.tier !== "unknown" && (
          <Row title="Check your portion">
            <PortionSlider serving={main} />
          </Row>
        )}
        {food.swaps.length > 0 && (
          <Row title={m.food.tryInstead}>
            <ul className="flex flex-wrap gap-2">
              {food.swaps.map((s) => (<li key={s.name}>{s.slug ? <Link href={`/food/${s.slug}`} className="inline-flex rounded-full bg-soft px-3 py-1.5 text-[14px] font-medium text-brand-ink">{s.name}</Link> : <span className="inline-flex rounded-full bg-soft px-3 py-1.5 text-[14px] font-medium text-brand-ink">{s.name}</span>}</li>))}
            </ul>
          </Row>
        )}
        <Row title="In detail">
          <p>{food.answer}{cite(main.sourceIds)}</p>
          <p className="mt-2 text-[15px] text-muted">{m.tier[food.tier]} · {main.form} · {fmt(m.food.checked, { date: fmtDate(food.checked) })} · <Link href={`/check?add=${food.slug}`} className="text-brand-ink underline">{fmt(m.food.addToMeal, { name: food.name })}</Link></p>
        </Row>
        {food.servings.length > 1 && (
          <Row title={m.food.forms}>
            <table className="w-full text-[15px]"><thead><tr className="text-left text-muted"><th className="py-1 font-medium">Form</th><th className="font-medium">Low up to</th><th className="font-medium">High from</th></tr></thead>
              <tbody>{food.servings.map((s) => (<tr key={s.form} className="border-t border-line"><td className="py-2">{s.form}</td><td>{s.lowMaxG === null ? "None tested" : `${s.lowMaxG} g`}</td><td>{s.highFromG === null ? "—" : `${s.highFromG} g`}{cite(s.sourceIds)}</td></tr>))}</tbody></table>
          </Row>
        )}
        {food.changes.length > 0 && (<Row title={m.food.changed}><ul className="space-y-2">{food.changes.map((c) => (<li key={c.text}><b>{c.date}:</b> {c.text}{cite(c.sourceIds)}</li>))}</ul></Row>)}
        {food.disagreements.length > 0 && (<Row title={m.food.disagree}><ul className="space-y-2">{food.disagreements.map((d) => (<li key={d.text}>{d.text}{cite(d.sourceIds)}</li>))}</ul></Row>)}
        {food.notes.length > 0 && (<Row title="Good to know"><ul className="space-y-2">{food.notes.map((x) => (<li key={x.text}>{x.text}{cite(x.sourceIds)}</li>))}</ul></Row>)}
        <Row title={m.food.stacking}>
          <p>{main.groups.length ? `${food.name[0].toUpperCase()}${food.name.slice(1)} adds ${main.groups.map((g) => GROUP_LABEL[g].toLowerCase()).join(" and ")}. Small servings of foods with the same FODMAP can add up in one meal.` : "Foods with the same FODMAP can add up in one meal."}
            {stackMates.length > 0 && <> Same group: {stackMates.map((f, i) => (<span key={f.slug}>{i ? ", " : ""}<Link href={`/food/${f.slug}`} className="text-brand-ink underline">{f.name}</Link></span>))}.</>}
            {" "}<Link href={`/check?add=${food.slug}`} className="text-brand-ink underline">Check a meal</Link>.</p>
        </Row>
        <Row title={m.food.phases}><p>{m.food.phasesText}</p></Row>
        <DoctorBox />
        {food.faq.length > 0 && (
          <Row title={m.food.faq}>
            <div className="space-y-2">{food.faq.map((q) => (<details key={q.q} className="rounded-xl bg-chip px-4 py-3"><summary className="cursor-pointer font-medium">{q.q}</summary><p className="mt-2">{q.a}</p></details>))}</div>
          </Row>
        )}
        <Row title={m.food.sources}>
          <ol className="space-y-2 text-[14.5px]">{cited.map((s, i) => (<li key={s.id} id={`src-${i + 1}`}>[{i + 1}] <a href={s.url} className="underline" rel="noopener">{s.title}</a>. {s.publisher}{s.published ? `, ${s.published}` : ""}. Accessed {fmtDate(s.accessed)}.</li>))}</ol>
          <p className="mt-3 text-[14px] text-muted">{m.food.report} <a href={`mailto:hello@isitlowfodmap.com?subject=${encodeURIComponent(`Correction: ${food.name}`)}`} className="underline">Tell us</a>.</p>
        </Row>
        {rel.length > 0 && (
          <Row title={m.food.related}>
            <ul className="flex flex-wrap gap-2">{rel.map((f) => (<li key={f.slug}><Link href={`/food/${f.slug}`} className="inline-flex rounded-full bg-chip px-3 py-1.5 text-[14px]">Is {f.name} low FODMAP?</Link></li>))}</ul>
          </Row>
        )}
      </div>
    </article>
  );
}
