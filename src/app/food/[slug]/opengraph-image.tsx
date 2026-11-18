import { foods, getFood } from "@/data";
import { headline } from "@/lib/verdict";
import { ogCard, OG_SIZE } from "@/lib/og";

export const dynamicParams = false;
export function generateStaticParams() { return foods.map((f) => ({ slug: f.slug })); }
export const alt = "FODMAP answer card";
export const size = OG_SIZE;
export const contentType = "image/png";
const COLOR = { low: "#2E8B57", moderate: "#B07A00", high: "#C24A35", untested: "#5F675F" } as const;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const f = getFood((await params).slug)!;
  const h = headline(f);
  return ogCard({ title: `Is ${f.name} low FODMAP?`, chip: h.chip, chipColor: COLOR[h.zone] });
}
