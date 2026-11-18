import { ogCard, OG_SIZE } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Is it low FODMAP? Grams, sources and swaps";
export const size = OG_SIZE;
export const contentType = "image/png";
export default function Image() { return ogCard({ title: "Is it low FODMAP?", chip: "Grams, not guesses" }); }
