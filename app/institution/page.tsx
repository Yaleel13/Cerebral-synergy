import type { Metadata } from "next";
import { PortalPage } from "@/components/portal-page";

export const metadata: Metadata = {
  title: "Institution",
  description: "Creative philosophy, purpose, and editorial framing for Cerebral Synergy.",
  alternates: { canonical: "/institution" },
};

export default function InstitutionPage() {
  return (
    <PortalPage
      eyebrow="About the Institution"
      title="Alchemical Futurism in practice"
      description="Cerebral Synergy explores the convergence of ancient wisdom, mythology, art, storytelling, and emerging technologies as a creative discipline."
      framing="Editorial note: symbolic, spiritual, and mythic language on this site is poetic and philosophical framing, not medical, scientific, or legal instruction."
    >
      <section className="surface-panel mt-8 p-6 sm:p-7">
        <p className="editorial-eyebrow">Institutional Intent</p>
        <p className="mt-4 text-[color:var(--color-muted)]">
          This institution is designed to be discovered in layers. Chambers are arranged to preserve context and avoid extraction of isolated claims from poetic frameworks.
        </p>
      </section>
    </PortalPage>
  );
}
