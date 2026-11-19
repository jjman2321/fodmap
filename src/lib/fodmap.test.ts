import { describe, expect, it } from "vitest";
import { bands, stack, stackStatus, zoneFor } from "./fodmap";
import type { Food, Serving } from "@/data/schema";

const sweet: Serving = { form: "cooked", lowMaxG: 75, moderateFromG: 100, highFromG: 112, scaleMaxG: 150, groups: ["mannitol"], unit: "g", groupUnknown: false, sourceIds: ["x"] };
const allHigh: Serving = { form: "raw", lowMaxG: null, moderateFromG: null, highFromG: 3, scaleMaxG: 10, groups: ["fructans"], unit: "g", groupUnknown: false, sourceIds: ["x"] };

describe("zoneFor", () => {
  it("never guesses between tested amounts", () => {
    expect(zoneFor(sweet, 75)).toBe("low");
    expect(zoneFor(sweet, 90)).toBe("untested");
    expect(zoneFor(sweet, 100)).toBe("moderate");
    expect(zoneFor(sweet, 112)).toBe("high");
  });
  it("food with no low amount is never low", () => {
    expect(zoneFor(allHigh, 1)).not.toBe("low");
    expect(zoneFor(allHigh, 3)).toBe("high");
  });
});

describe("bands", () => {
  it("covers the bar from 0 to 1 without overlaps", () => {
    const b = bands(sweet);
    expect(b[0]).toMatchObject({ zone: "low", from: 0 });
    expect(b.at(-1)!.to).toBe(1);
    for (let i = 1; i < b.length; i++) expect(b[i].from).toBeCloseTo(b[i - 1].to);
  });
});

describe("stack", () => {
  const food = (name: string, s: Serving) => ({ name, servings: [s] }) as unknown as Food;
  it("adds loads in the same group", () => {
    const r = stack([{ food: food("a", sweet), servingIndex: 0, grams: 50 }, { food: food("b", sweet), servingIndex: 0, grams: 50 }]);
    expect(r[0].load).toBeCloseTo(100 / 75);
    expect(stackStatus(r[0])).toBe("watch");
  });
  it("flags foods with no low amount as high", () => {
    const r = stack([{ food: food("garlic", allHigh), servingIndex: 0, grams: 1 }]);
    expect(stackStatus(r[0])).toBe("high");
  });
});
