import type { ContentEntry, Creator, Portal } from "@/types/content";

export const portals: Portal[] = [
  {
    key: "archive",
    name: "The Archive",
    route: "/archive",
    purpose: "Essays, lore, symbol studies, field notes, and cultural manuscripts.",
    status: "Open",
    symbol: "✶",
  },
  {
    key: "laboratory",
    name: "The Laboratory",
    route: "/laboratory",
    purpose: "Creative technology, AI experiments, and systems in active development.",
    status: "Transmission Active",
    symbol: "⚗",
  },
  {
    key: "observatory",
    name: "The Observatory",
    route: "/observatory",
    purpose: "Pattern recognition, mythic time studies, and future-facing observations.",
    status: "Expanding",
    symbol: "☉",
  },
  {
    key: "resonance",
    name: "Resonance Hall",
    route: "/resonance",
    purpose: "Music, spoken works, and sonic transmissions with clear artistic framing.",
    status: "Open",
    symbol: "♬",
  },
  {
    key: "gallery",
    name: "The Gallery",
    route: "/gallery",
    purpose: "Digital art, visual studies, worldbuilding, and curated exhibitions.",
    status: "Open",
    symbol: "◈",
  },
  {
    key: "oracle",
    name: "The Oracle",
    route: "/oracle",
    purpose: "A sealed chamber reserved for future ethical interaction models.",
    status: "Sealed",
    symbol: "◯",
  },
];

export const creator: Creator = {
  slug: "founder",
  title: "Founder & Creative Director",
  summary:
    "Cerebral Synergy is authored as a long-form institution where story, sound, symbols, and technology are treated as instruments of inquiry and transformation.",
};

export const featuredTransmission: ContentEntry = {
  slug: "threshold-fragment-001",
  title: "Threshold Fragment 001: Archive of Future Memory",
  summary:
    "A first transmission mapping Alchemical Futurism as a practical creative discipline rather than aesthetic mood.",
  body: "Placeholder content entry used to validate the typed content architecture in phase one.",
  type: "transmission",
  status: "published",
  tags: ["alchemical-futurism", "institution", "foundational"],
  createdAt: "2026-08-03",
  publishedAt: "2026-08-03",
  updatedAt: "2026-08-03",
  credits: ["Cerebral Synergy"],
  relatedEntries: ["first-light-observation", "lab-notes-protocol"],
  seoTitle: "Threshold Fragment 001",
  seoDescription: "Foundational transmission introducing the institutional tone and direction.",
  isDraft: false,
};

export const currentSignals: ContentEntry[] = [
  {
    slug: "first-light-observation",
    title: "Observatory Note: First Light",
    summary: "Initial notes on recurring symbols in present cultural movements.",
    type: "field-note",
    status: "published",
    tags: ["observatory", "symbol-analysis"],
    createdAt: "2026-08-01",
    publishedAt: "2026-08-02",
    seoTitle: "Observatory Note: First Light",
    seoDescription: "Pattern notes from the Observatory.",
    isDraft: false,
  },
  {
    slug: "lab-notes-protocol",
    title: "Laboratory Protocol: Instrument 00",
    summary: "Experimental systems note documenting interaction constraints and ethics.",
    type: "experiment",
    status: "published",
    tags: ["laboratory", "ai", "ethics"],
    createdAt: "2026-08-02",
    publishedAt: "2026-08-03",
    seoTitle: "Laboratory Protocol: Instrument 00",
    seoDescription: "A process study from the Laboratory.",
    isDraft: false,
  },
  {
    slug: "resonance-sketch-001",
    title: "Resonance Sketch 001",
    summary: "A developing sonic sketch presented as artistic listening, not medical advice.",
    type: "sound-work",
    status: "expanding",
    tags: ["resonance", "sound"],
    createdAt: "2026-08-03",
    seoTitle: "Resonance Sketch 001",
    seoDescription: "Sonic work in progress from Resonance Hall.",
    isDraft: false,
  },
];
