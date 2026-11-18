import type { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = { title: "Privacy", alternates: { canonical: "/privacy" }, robots: { index: false } };

export default function Page() {
  return (
    <Prose title="Privacy" updated="November 2026">
      <h2>1. What we collect</h2>
      <ul><li>Cookieless visit counts from Cloudflare Web Analytics (no cookies, no personal profile).</li><li>Your email, only if you ask for the printable list.</li><li>Error reports (Sentry) without your food searches.</li></ul>
      <h2>2. What we don&apos;t do</h2>
      <ul><li>No ad trackers or pixels. Your food searches and meal checks stay in your browser.</li><li>We never sell or share your email.</li></ul>
      <h2>3. Your choices</h2>
      <p>Unsubscribe from any email, or ask us to delete your email: hello@isitlowfodmap.com.</p>
      <p>Grasp Labs LLC runs this site. Draft wording, to be reviewed before launch.</p>
    </Prose>
  );
}
