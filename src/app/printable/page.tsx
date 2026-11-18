import type { Metadata } from "next";
import { foods } from "@/data";
import { EmailBox } from "@/components/EmailBox";
import { PrintButton } from "@/components/PrintButton";
import { ZONE_STYLE } from "@/components/ZoneChip";
import { GROUP_LABEL } from "@/lib/groups";
import { headline, fmtDate } from "@/lib/verdict";
import { zoneFor } from "@/lib/fodmap";

export const metadata: Metadata = { title: "Printable low FODMAP list with grams", description: "A one-page low FODMAP list by food group, with the low amount in grams and the FODMAP to watch.", alternates: { canonical: "/printable" } };

const CAT: [string, string][] = [["vegetables", "Vegetables"], ["fruit", "Fruit"], ["legumes", "Beans and lentils"], ["grains", "Grains and bread"], ["dairy", "Dairy"], ["nuts-seeds", "Nuts and seeds"], ["condiments", "Sauces and spreads"], ["herbs-spices", "Herbs and spices"]];

export default function PrintablePage() {
  const latest = foods.map((f) => f.checked).sort().at(-1) ?? "";
  return (
    <div className="mx-auto max-w-3xl px-4 pt-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><h1 className="text-[34px] font-semibold">Printable low FODMAP list</h1><p className="mt-1 text-muted">Low amount in grams for each food. Checked {latest && fmtDate(latest)}.</p></div>
        <PrintButton />
      </div>
      {CAT.map(([key, label]) => { const list = foods.filter((f) => f.category === key); if (!list.length) return null; return (
        <section key={key} className="mt-6 break-inside-avoid">
          <h2 className="text-[19px] font-semibold">{label}</h2>
          <table className="mt-2 w-full text-[15px]"><thead><tr className="text-left text-[13px] text-muted"><th className="py-1 font-medium">Food</th><th className="font-medium">Low up to</th><th className="font-medium">Watch for</th></tr></thead>
            <tbody>{list.map((f) => { const s = f.servings[0]; const z = s.lowMaxG === null ? "high" : "low"; return (
              <tr key={f.slug} className="border-t border-line"><td className="py-2">{f.name[0].toUpperCase() + f.name.slice(1)} <span className="text-muted">({s.form})</span></td>
                <td><span aria-hidden className="mr-1">{ZONE_STYLE[z].shape}</span>{s.lowMaxG === null ? headline(f).chip : `${s.lowMaxG} g${s.household ? ` (${s.household})` : ""}`}</td>
                <td>{s.groups.map((g) => GROUP_LABEL[g]).join(", ")}{zoneFor(s, s.scaleMaxG) === "untested" ? "" : ""}</td></tr>); })}</tbody></table>
        </section>); })}
      <p className="mt-6 text-[13px] text-muted">Education, not medical advice. Amounts are per sitting. Sources for every number: isitlowfodmap.com/foods.</p>
      <div className="mt-8"><EmailBox /></div>
    </div>
  );
}
