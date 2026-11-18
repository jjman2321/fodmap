// Client-safe group names (no Zod import).
export const GROUPS = ["fructans", "gos", "lactose", "fructose", "sorbitol", "mannitol", "other-polyol"] as const;
export type Group = (typeof GROUPS)[number];
export const GROUP_LABEL: Record<Group, string> = {
  fructans: "Fructans", gos: "GOS", lactose: "Lactose", fructose: "Excess fructose",
  sorbitol: "Sorbitol", mannitol: "Mannitol", "other-polyol": "Other polyol",
};
