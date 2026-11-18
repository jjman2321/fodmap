import type { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = { title: "How we check foods", description: "Where our FODMAP numbers come from, how we handle sources that disagree, and how to report a mistake.", alternates: { canonical: "/how-we-check" } };

export default function Page() {
  return (
    <Prose title="How we check foods" updated="November 2026">
      <h2>1. Where numbers come from</h2>
      <ul>
        <li><b>Lab papers</b> with a DOI, for example Muir et al. (2007, 2009) and Biesiekierski et al. (2011).</li>
        <li><b>Public posts by the testing labs</b>, such as Monash University&apos;s blog. We quote one short line and link to it.</li>
        <li><b>Public datasets</b>: USDA FoodData Central for nutrition, Open Food Facts for packaged foods (with credit).</li>
      </ul>
      <p>We never copy the Monash or FODMAP Friendly apps. If you want their full, latest tables, use their apps. We link to them.</p>
      <h2>2. What we show</h2>
      <ul>
        <li>The amount in grams that&apos;s low, and where moderate and high start, for each form of the food.</li>
        <li>Which FODMAP group rises, so you know what to test when you reintroduce foods.</li>
        <li>Where sources disagree, both numbers and what changed.</li>
        <li>Gaps stay gaps: if an amount wasn&apos;t tested, we say &ldquo;not tested&rdquo; instead of guessing.</li>
      </ul>
      <h2>3. What we never do</h2>
      <ul><li>Say &ldquo;low&rdquo; without lab data. Foods without it are marked &ldquo;estimated&rdquo; and can only be flagged as probably high.</li><li>Use fake experts or reviews.</li></ul>
      <h2 id="corrections">4. Corrections</h2>
      <p>Spotted a mistake or an outdated number? Email <a href="mailto:hello@isitlowfodmap.com">hello@isitlowfodmap.com</a>. We aim to fix factual errors within two working days and log every change on <a href="/changes">What changed</a>.</p>
      <h2>5. How AI is used</h2>
      <p>AI helps us find and draft. Every number is checked against its source before a page is published.</p>
      <h2>6. Who runs this site</h2>
      <p>isitlowfodmap.com is published by Grasp Labs LLC. It isn&apos;t affiliated with Monash University or FODMAP Friendly.</p>
    </Prose>
  );
}
