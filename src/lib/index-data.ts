import { foods } from "@/data";
import { headline } from "./verdict";

import type { IndexItem } from "./match";

// Slim, serialisable view of each food, passed as props to the client checker.

export function checkerIndex(): IndexItem[] {
  return foods.map((f) => {
    const h = headline(f);
    return {
      slug: f.slug, name: f.name, aliases: f.aliases, chip: h.chip, zone: h.zone, art: f.illustration,
      servings: f.servings.map(({ form, lowMaxG, moderateFromG, highFromG, scaleMaxG, groups, unit, groupUnknown }) => ({ form, lowMaxG, moderateFromG, highFromG, scaleMaxG, groups, unit, groupUnknown })),
      swaps: f.swaps.map(({ name, slug }) => ({ name, slug })),
    };
  });
}

