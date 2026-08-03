import type { Metadata } from "next";
import { PortalPage } from "@/components/portal-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Cerebral Synergy institution.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PortalPage
      eyebrow="Contact"
      title="Transmission channel"
      description="Contact routing will be finalized by the owner."
      framing="Owner action required: set NEXT_PUBLIC_CONTACT_EMAIL and/or approved external contact endpoint before launch."
    />
  );
}
