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
    />
  );
}
