"use client";
export function PrintButton() {
  return <button type="button" onClick={() => window.print()} className="no-print rounded-full border border-line bg-card px-4 py-2.5 text-[15px] font-semibold hover:border-brand">Print or save as PDF</button>;
}
