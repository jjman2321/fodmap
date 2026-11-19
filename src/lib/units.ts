import type { Serving } from "@/data/schema";

// "75 g" or "250 ml" depending on the serving's unit.
export const amt = (s: Pick<Serving, "unit"> | { unit?: string }, n: number | null | undefined) => (n === null || n === undefined ? "" : `${n} ${s.unit ?? "g"}`);
