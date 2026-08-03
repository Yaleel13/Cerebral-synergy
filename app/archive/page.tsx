import type { Metadata } from "next";
import { PortalPage } from "@/components/portal-page";

export const metadata: Metadata = {
  title: "Archive",
  description: "Curated essays, lore, symbol studies, and cultural manuscripts.",
  alternates: { canonical: "/archive" },
};

export default function ArchivePage() {
  return (
    <PortalPage
      eyebrow="The Archive"
      title="Knowledge, lore, and context"
      description="A curated repository for essays, manuscripts, symbol studies, and research notes."
    />
  );
}
