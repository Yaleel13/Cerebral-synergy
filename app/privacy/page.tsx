import type { Metadata } from "next";
import { PortalPage } from "@/components/portal-page";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy commitments for the Cerebral Synergy foundation build.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PortalPage
      eyebrow="Privacy"
      title="Data minimization by default"
      description="This phase does not collect unnecessary personal information and does not enable analytics by default."
      framing="Future features such as newsletter signup, accounts, purchases, and AI interactions require dedicated privacy policy updates before activation."
    />
  );
}
