import Script from "next/script";
import { PortalGrid } from "@/components/portal-grid";
import { SectionHeading } from "@/components/section-heading";
import { currentSignals, featuredTransmission, portals, creator } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <section className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-panel)] p-8 sm:p-12">
        <p className="text-xs tracking-[0.2em] text-[color:var(--color-muted)] uppercase">The Threshold</p>
        <h1 className="mt-4 text-4xl sm:text-6xl">Cerebral Synergy</h1>
        <p className="mt-4 max-w-3xl text-lg text-[color:var(--color-muted)]">{siteConfig.description}</p>
        <a
          href="#portals"
          className="mt-8 inline-flex rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-5 py-3 text-sm tracking-[0.12em] uppercase transition hover:border-[color:var(--color-focus)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
        >
          Enter the Institution
        </a>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="What has been discovered"
          title="A living archive, laboratory, and transmission field"
          description="Cerebral Synergy gathers art, sound, mythology, technology, and transformational thought into an explorable institution designed for clarity and wonder."
        />
      </section>

      <section id="portals" className="mt-16">
        <SectionHeading
          eyebrow="Portals into the institution"
          title="Choose a chamber"
          description="Each portal has a distinct purpose and publication state."
        />
        <PortalGrid portals={portals} />
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <article className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel)] p-6">
          <p className="text-xs tracking-[0.2em] text-[color:var(--color-muted)] uppercase">Featured Transmission</p>
          <h2 className="mt-3 text-3xl">{featuredTransmission.title}</h2>
          <p className="mt-3 text-[color:var(--color-muted)]">{featuredTransmission.summary}</p>
          <p className="mt-4 text-sm text-[color:var(--color-muted)]">Tags: {featuredTransmission.tags.join(" · ")}</p>
        </article>
        <aside className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel)] p-6">
          <p className="text-xs tracking-[0.2em] text-[color:var(--color-muted)] uppercase">Current Signals</p>
          <ul className="mt-3 space-y-4">
            {currentSignals.map((signal) => (
              <li key={signal.slug} className="border-t border-[color:var(--color-border)] pt-4 first:border-0 first:pt-0">
                <h3 className="text-xl">{signal.title}</h3>
                <p className="mt-1 text-sm text-[color:var(--color-muted)]">{signal.summary}</p>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-16 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel)] p-6">
        <SectionHeading eyebrow="Creator / Institution" title={creator.title} description={creator.summary} />
      </section>
    </div>
  );
}
