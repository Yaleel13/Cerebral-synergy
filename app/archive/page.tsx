import type { Metadata } from "next";
import Link from "next/link";
import { PortalPage } from "@/components/portal-page";
import { archiveEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Archive",
  description: "Curated essays, lore, symbol studies, and cultural manuscripts.",
  alternates: { canonical: "/archive" },
};

export default function ArchivePage() {
  return (
    <PortalPage
      eyebrow="The Archive"
      title="Knowledge, lore, and context"
      description="A curated repository for essays, manuscripts, symbol studies, and research notes."
    >
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {archiveEntries.map((entry) => (
          <article key={entry.slug} className="surface-panel p-5">
            <p className="text-xs tracking-[0.14em] text-[color:var(--color-muted-strong)] uppercase">{entry.type}</p>
            <h2 className="mt-2 text-2xl">{entry.title}</h2>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">{entry.summary}</p>
            <Link
              href={`/archive/${entry.slug}`}
              className="focus-ring mt-4 inline-flex rounded-full border border-[color:var(--color-border)] px-4 py-2 text-xs tracking-[0.14em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
            >
              Read manuscript
            </Link>
          </article>
        ))}
      </section>
    </PortalPage>
  );
}
