// Hairline row (borrowed from direction 2): keeps the details below the answer calm and uncluttered.
export function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-5">
      <h2 className="text-[19px] font-semibold">{title}</h2>
      <div className="mt-2 text-[16px] leading-relaxed">{children}</div>
    </section>
  );
}
