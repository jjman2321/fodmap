import type { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms" }, robots: { index: false } };

export default function Page() {
  return (
    <Prose title="Terms" updated="November 2026">
      <h2>1. Use of the site</h2><p>You can use the site and print the list for personal use. Please link to us instead of copying our pages.</p>
      <h2>2. No medical advice</h2><p>See the <a href="/disclaimer">disclaimer</a>. Decisions about your health are yours and your clinician&apos;s.</p>
      <h2>3. Third-party sources</h2><p>We link to papers and to other organisations&apos; public pages. We aren&apos;t responsible for their content.</p>
      <p>Grasp Labs LLC. Draft wording, to be reviewed before launch.</p>
    </Prose>
  );
}
