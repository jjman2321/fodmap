// Quiet pages: small title, one column, numbered sections (AnkiDecks lesson).
export function Prose({ title, updated, children }: { title: string; updated?: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 [&_h2]:mt-7 [&_h2]:text-[19px] [&_h2]:font-semibold [&_li]:mt-1 [&_p]:mt-2 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:underline">
      <h1 className="text-[28px] font-semibold">{title}</h1>
      {updated && <p className="text-[14px] text-muted">Updated {updated}</p>}
      {children}
    </div>
  );
}
