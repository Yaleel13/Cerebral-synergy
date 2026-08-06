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
    <div className="container-shell pb-20 pt-10 sm:pt-12">
      <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <section className="surface-plate chamber-frame media-motif animate-rise p-8 sm:p-12">
        <p className="editorial-eyebrow">The Threshold</p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-[1.05] sm:text-7xl">Cerebral Synergy</h1>
        <p className="mt-5 max-w-3xl text-lg text-[color:var(--color-muted)]">{siteConfig.description}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#portals"
            className="focus-ring inline-flex rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-6 py-3 text-xs tracking-[0.15em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
          >
            Enter the Institution
          </a>
          <span className="text-xs tracking-[0.15em] text-[color:var(--color-muted-strong)] uppercase">Discovered, not browsed</span>
        </div>
      </section>

      <section className="section-rule mt-14">
        <SectionHeading
          eyebrow="What has been discovered"
          title="A living archive, laboratory, and transmission field"
          description="Cerebral Synergy gathers art, sound, mythology, technology, and transformational thought into an explorable institution designed for clarity and wonder."
        />
      </section>

      <section id="portals" className="section-rule mt-14">
        <SectionHeading
          eyebrow="Portals into the institution"
          title="Choose a chamber"
          description="Each portal has a distinct purpose and publication state."
        />
        <PortalGrid portals={portals} />
      </section>

      <section className="section-rule mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <article className="surface-plate p-6 sm:p-7">
          <p className="editorial-eyebrow">Featured Transmission</p>
          <h2 className="mt-3 text-4xl leading-tight">{featuredTransmission.title}</h2>
          <p className="mt-4 text-[color:var(--color-muted)]">{featuredTransmission.summary}</p>
          <p className="mt-5 text-xs tracking-[0.12em] text-[color:var(--color-muted-strong)] uppercase">
            Tags: {featuredTransmission.tags.join(" · ")}
          </p>
        </article>
        <aside className="surface-plate p-6 sm:p-7">
          <p className="editorial-eyebrow">Current Signals</p>
          <ul className="mt-4 space-y-4">
            {currentSignals.map((signal) => (
              <li key={signal.slug} className="rounded-md border border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_82%,black)] p-4">
                <h3 className="text-xl">{signal.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">{signal.summary}</p>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="section-rule mt-14 rounded-2xl border border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_85%,black)] p-6 sm:p-8">
        <SectionHeading eyebrow="Creator / Institution" title={creator.title} description={creator.summary} />
      </section>
    </div>
  );
}
