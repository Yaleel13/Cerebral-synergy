import type { Metadata } from "next";
import { PortalPage } from "@/components/portal-page";

export const metadata: Metadata = {
  title: "Laboratory",
  description: "Creative technology and AI experiments, clearly framed as works in progress.",
  alternates: { canonical: "/laboratory" },
};

export default function LaboratoryPage() {
  return (
    <PortalPage
      eyebrow="The Laboratory"
      title="Systems, experiments, and prototypes"
      description="A chamber for creative technology, process studies, and experimental tools."
      framing="All experiments are exploratory and are not presented as medical, legal, financial, or scientific certainty."
    />
  );
}
