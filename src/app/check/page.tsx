import type { Metadata } from "next";
import { MealChecker } from "@/components/MealChecker";
import { Row } from "@/components/Row";

export const metadata: Metadata = { title: "Meal check: do your foods stack up?", description: "Add 2–5 foods with grams and see an estimate of each FODMAP group across the meal.", alternates: { canonical: "/check" } };

export default function CheckPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-8">
      <h1 className="text-[34px] font-semibold">Meal check: do these foods stack up?</h1>
      <p className="mt-2 max-w-2xl text-[17px] text-muted">Two low servings of foods with the same FODMAP can add up to a moderate or high amount. Add your meal to see an estimate.</p>
      <div className="mt-6"><MealChecker /></div>
      <div className="mt-10 max-w-3xl">
        <Row title="How the estimate works"><p>Each food&apos;s amount is compared with its lab-tested low limit. 50 g of a food that&apos;s low up to 100 g counts as half a low serving. Loads in the same FODMAP group add up. Over one full serving means &ldquo;may add up&rdquo;. No lab has tested these meals, so treat it as a guide, not a result.</p></Row>
      </div>
    </div>
  );
}
