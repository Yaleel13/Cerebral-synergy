import type { Metadata } from "next";
import { PortalPage } from "@/components/portal-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms and responsible-use framing for Cerebral Synergy.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PortalPage
      eyebrow="Terms"
      title="Use and interpretation"
      description="Content is provided for creative, educational, and philosophical exploration."
      framing="No content on this site should be interpreted as medical, legal, financial, or mental-health diagnosis or treatment guidance."
    />
  );
}
