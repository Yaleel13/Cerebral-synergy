"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
        <section className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.2em] text-[color:var(--color-muted)] uppercase">System Error</p>
          <h1 className="mt-3 text-3xl">A transmission fault occurred.</h1>
          <p className="mt-3 text-sm text-[color:var(--color-muted)]">{error.message}</p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-md border border-[color:var(--color-border)] px-4 py-2 text-sm hover:border-[color:var(--color-focus)]"
          >
            Retry
          </button>
        </section>
      </body>
    </html>
  );
}
