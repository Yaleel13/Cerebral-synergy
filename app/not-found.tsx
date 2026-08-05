import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-shell py-20">
      <div className="surface-plate max-w-3xl p-8 sm:p-10">
        <p className="editorial-eyebrow">404</p>
        <h1 className="mt-3 text-5xl">The chamber was not found.</h1>
        <p className="mt-4 text-[color:var(--color-muted)]">The requested path does not exist in the current transmission map.</p>

        <Link
          href="/"
          className="focus-ring mt-6 inline-flex rounded-full border border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_85%,black)] px-5 py-2 text-xs tracking-[0.14em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
        >
          Return to Threshold
        </Link>
      </div>
    </section>
  );
}
