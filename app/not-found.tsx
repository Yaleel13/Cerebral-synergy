import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-start gap-4 px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs tracking-[0.2em] text-[color:var(--color-muted)] uppercase">404</p>
      <h1 className="text-4xl">The chamber was not found.</h1>
      <p className="text-[color:var(--color-muted)]">The requested path does not exist in the current transmission map.</p>
      <Link
        href="/"
        className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-panel)] px-4 py-2 text-sm hover:border-[color:var(--color-focus)]"
      >
        Return to Threshold
      </Link>
    </section>
  );
}
