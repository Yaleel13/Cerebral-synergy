import type { Metadata } from "next";
import { PortalPage } from "@/components/portal-page";

export const metadata: Metadata = {
  title: "Observatory",
  description: "Pattern recognition and symbolic interpretation with clear editorial framing.",
  alternates: { canonical: "/observatory" },
};

export default function ObservatoryPage() {
  return (
    <PortalPage
      eyebrow="The Observatory"
      title="Patterns, cycles, and future-facing observations"
      description="A space for mythological and cultural pattern analysis across time."
      framing="Symbolic interpretation here is creative and cultural commentary, not scientific, medical, financial, or legal fact."
    >
      <section className="surface-panel mt-8 p-6 sm:p-7">
        <p className="editorial-eyebrow">Observation Log</p>
        <p className="mt-4 text-[color:var(--color-muted)]">
          Current observatory work highlights cycles across language, image, and ritual narratives. Entries remain explicitly editorial and subject to revision.
        </p>
      </section>
    </PortalPage>
  );
}
