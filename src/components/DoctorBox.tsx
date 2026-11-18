import { messages as m } from "@/lib/i18n";

// Calm amber "please check" box (PeptideTrack pattern), never red, never a pop-up.
export function DoctorBox() {
  return (
    <aside aria-label={m.doctor.title} className="my-5 rounded-[var(--radius-card)] bg-mid/15 p-5">
      <h2 className="text-[17px] font-semibold">{m.doctor.title}:</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-[15.5px]">{m.doctor.items.map((i) => (<li key={i}>{i}</li>))}</ul>
      <p className="mt-2 text-[14.5px] text-muted">{m.doctor.note}</p>
    </aside>
  );
}
