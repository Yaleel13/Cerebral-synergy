import type { Metadata } from "next";
import { PortalPage } from "@/components/portal-page";
import { ResonanceStatePanel } from "@/components/resonance-state-panel";

export const metadata: Metadata = {
  title: "Resonance Hall",
  description: "Music, soundscapes, and spoken works presented as art.",
  alternates: { canonical: "/resonance" },
};

export default function ResonancePage() {
  return (
    <PortalPage
      eyebrow="Resonance Hall"
      title="Music and sonic transmissions"
      description="Albums, sound studies, spoken works, and listening experiences."
      framing="Sound references on this site are artistic framing and should not be interpreted as health claims."
    >
      <ResonanceStatePanel />
    </PortalPage>
  );
}
