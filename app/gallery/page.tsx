import type { Metadata } from "next";
import { GalleryViewer } from "@/components/gallery-viewer";
import { PortalPage } from "@/components/portal-page";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Visual works, digital art, and worldbuilding collections.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <PortalPage
      eyebrow="The Gallery"
      title="Visual archive"
      description="A curated visual collection for digital art, covers, motion pieces, and studies."
    >
      <GalleryViewer />
    </PortalPage>
  );
}
