import type { Metadata } from "next";
import Link from "next/link";
import { foods } from "@/data";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = { title: "What changed", description: "Every retest and correction to our FODMAP numbers, with dates.", alternates: { canonical: "/changes" } };

export default function Page() {
  const items = foods.flatMap((f) => f.changes.map((c) => ({ ...c, food: f }))).sort((a, b) => b.date.localeCompare(a.date));
  return (
    <Prose title="What changed">
      <p>Retests by the labs and our own corrections, newest first.</p>
      <ul>{items.map((c) => (<li key={c.food.slug + c.text}><b>{c.date}</b>, <Link href={`/food/${c.food.slug}`}>{c.food.name}</Link>: {c.text}</li>))}</ul>
    </Prose>
  );
}
