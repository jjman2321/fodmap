import { foods } from "@/data";
import { headline } from "@/lib/verdict";
import { abs } from "@/lib/site";
import { question } from "@/lib/grammar";

export const dynamic = "force-static";
export function GET() {
  const lines = [
    "# isitlowfodmap.com",
    "",
    "> Is a food low FODMAP? Each page gives the low amount in grams, the FODMAP group, and public sources with dates. Education, not medical advice. Not affiliated with Monash University or FODMAP Friendly.",
    "",
    "## Foods",
    ...foods.map((f) => `- [${question(f.name)}](${abs(`/food/${f.slug}`)}): ${headline(f).chip}. ${f.answer}`),
    "",
    "## Method",
    `- [How we check foods](${abs("/how-we-check")})`,
    `- [What changed](${abs("/changes")})`,
  ];
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
