import type { MetadataRoute } from "next";
import { foods } from "@/data";
import { REGIONS } from "@/data/regions";
import { CATEGORIES } from "@/data/categories";
import { abs } from "@/lib/site";

export const dynamic = "force-static";
// Honest lastmod: a food's checked date, never "now".
export default function sitemap(): MetadataRoute.Sitemap {
  const latest = foods.map((f) => f.checked).sort().at(-1);
  return [
    { url: abs("/"), lastModified: latest },
    ...["/foods", "/check", "/printable", "/how-we-check", "/changes", "/disclaimer"].map((p) => ({ url: abs(p), lastModified: latest })),
    ...CATEGORIES.filter((c) => foods.some((f) => f.category === c.slug)).map((c) => ({ url: abs(`/category/${c.slug}`), lastModified: latest })),
    ...REGIONS.map((r) => ({ url: abs(`/region/${r.slug}`), lastModified: latest })),
    ...foods.map((f) => ({ url: abs(`/food/${f.slug}`), lastModified: f.checked })),
  ];
}
