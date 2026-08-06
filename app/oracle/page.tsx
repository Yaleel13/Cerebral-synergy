import type { Metadata } from "next";
import { PortalPage } from "@/components/portal-page";

export const metadata: Metadata = {
  title: "Oracle",
  description: "Sealed chamber reserved for future ethical interaction models.",
  alternates: { canonical: "/oracle" },
};

export default function OraclePage() {
  return (
    <PortalPage
      eyebrow="The Oracle"
      title="Sealed chamber"
      description="The Oracle remains intentionally sealed during phase one while interaction ethics and editorial models are finalized."
      framing="Deferred models include guided prompts, reflective storytelling, and consent-forward AI mediation—never deterministic fortune telling or diagnostic claims."
    >
      <section className="surface-panel mt-8 p-6 sm:p-7">
        <p className="editorial-eyebrow">Seal Protocol</p>
        <p className="mt-4 text-[color:var(--color-muted)]">
          Access remains closed until consent architecture, narrative boundaries, and review systems are validated for public use.
        </p>
      </section>
    </PortalPage>
  );
}
