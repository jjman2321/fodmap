import { describe, expect, it } from "vitest";
import { question } from "./grammar";

describe("question", () => {
  it("uses Are for plurals and Is otherwise", () => {
    expect(question("cherries")).toBe("Are cherries low FODMAP?");
    expect(question("brussels sprouts")).toBe("Are brussels sprouts low FODMAP?");
    expect(question("garlic")).toBe("Is garlic low FODMAP?");
    expect(question("hummus")).toBe("Is hummus low FODMAP?");
    expect(question("couscous")).toBe("Is couscous low FODMAP?");
    expect(question("asparagus")).toBe("Is asparagus low FODMAP?");
    expect(question("oat milk")).toBe("Is oat milk low FODMAP?");
  });
});
