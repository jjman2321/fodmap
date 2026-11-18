import type { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { DoctorBox } from "@/components/DoctorBox";

export const metadata: Metadata = { title: "Disclaimer", alternates: { canonical: "/disclaimer" } };

export default function Page() {
  return (
    <Prose title="Disclaimer" updated="November 2026">
      <p>isitlowfodmap.com gives you information about FODMAPs in food. It isn&apos;t medical advice and doesn&apos;t diagnose or treat any condition.</p>
      <h2>1. The low FODMAP diet</h2>
      <p>It&apos;s a short diet in 3 phases, best done with a FODMAP-trained dietitian. It isn&apos;t meant to be followed long term.</p>
      <h2>2. Accuracy</h2>
      <p>FODMAP content varies by crop, ripeness and preparation, and labs sometimes disagree. We show our sources so you can check them.</p>
      <h2>3. When to see a doctor</h2>
      <DoctorBox />
      <p>If you&apos;re very unwell, call your local emergency number.</p>
    </Prose>
  );
}
