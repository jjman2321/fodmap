"use client";
import { useState } from "react";
import { messages as m } from "@/lib/i18n";

// Shown after the list, never as a pop-up (DECISIONS batch 3). Until the D1 list exists the API answers "opens soon".
export function EmailBox() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "soon" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const email = new FormData(e.currentTarget).get("email");
    try {
      const r = await fetch("/api/subscribe", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email }) });
      setState(r.ok ? "done" : r.status === 503 ? "soon" : "error");
    } catch { setState("error"); }
  }
  return (
    <section className="no-print rounded-[var(--radius-card)] bg-soft p-5" aria-labelledby="email-title">
      <h2 id="email-title" className="text-[20px] font-semibold">{m.email.title}</h2>
      <p className="mt-1 text-[15.5px]">{m.email.text}</p>
      <form onSubmit={submit} className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="email" className="sr-only">{m.email.label}</label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="flex-1 rounded-full border border-line bg-card px-4 py-3 outline-none focus:border-brand" />
        <button type="submit" disabled={state === "sending"} className="rounded-full bg-btn px-5 py-3 font-semibold text-white hover:bg-btn-hover">{m.email.button}</button>
      </form>
      <p role="status" className="mt-2 text-[14px]">{state === "done" ? "Done. Check your inbox." : state === "soon" ? "The email list opens soon. You can print the list below now." : state === "error" ? "That didn't work. Please try again." : ""}</p>
      <p className="mt-1 text-[13px] text-muted">{m.email.note}</p>
    </section>
  );
}
