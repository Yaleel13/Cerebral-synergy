import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archiveEntries, getArchiveEntryBySlug } from "@/lib/content";

interface ArchiveEntryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return archiveEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: ArchiveEntryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getArchiveEntryBySlug(slug);

  if (!entry) {
    return {
      title: "Archive Entry Not Found",
      description: "The requested archive manuscript does not exist.",
    };
  }

  return {
    title: entry.title,
    description: entry.seoDescription,
    alternates: { canonical: `/archive/${entry.slug}` },
  };
}

export default async function ArchiveEntryPage({ params }: ArchiveEntryPageProps) {
  const { slug } = await params;
  const entry = getArchiveEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <section className="container-shell py-14 sm:py-16">
      <article className="surface-plate p-7 sm:p-10">
        <p className="editorial-eyebrow">Archive Manuscript</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{entry.title}</h1>
        <p className="mt-5 max-w-3xl text-[color:var(--color-muted)]">{entry.summary}</p>
        {entry.body && <p className="mt-6 text-base text-[color:var(--color-text)]/92">{entry.body}</p>}
        <p className="mt-6 text-sm text-[color:var(--color-muted)]">Tags: {entry.tags.join(" · ")}</p>
        <Link
          href="/archive"
          className="focus-ring mt-8 inline-flex rounded-full border border-[color:var(--color-border)] px-5 py-2 text-xs tracking-[0.14em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
        >
          Return to Archive
        </Link>
      </article>
    </section>
  );
}
