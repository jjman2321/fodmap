import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 pt-16 text-center">
      <h1 className="text-[30px] font-semibold">We haven&apos;t checked that page</h1>
      <p className="mt-2 text-muted">It may have moved, or the food isn&apos;t checked yet.</p>
      <p className="mt-6"><Link href="/" className="rounded-full bg-btn px-5 py-3 font-semibold text-white">Check a food</Link></p>
    </div>
  );
}
