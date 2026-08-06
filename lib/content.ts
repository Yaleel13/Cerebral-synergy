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

export const archiveEntries: ContentEntry[] = [
  {
    slug: "future-memory-index",
    title: "Archive Index: Future Memory",
    summary: "An index of recurring themes linking symbolic archives with contemporary creative systems.",
    body: "This index traces motifs that reappear across myth, visual language, and computational storytelling. It is an editorial map designed for exploration.",
    type: "essay",
    status: "published",
    tags: ["archive", "myth", "systems"],
    createdAt: "2026-08-01",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-03",
    seoTitle: "Archive Index: Future Memory",
    seoDescription: "A foundational archive index for Alchemical Futurism studies.",
    isDraft: false,
  },
  {
    slug: "glyph-ecologies",
    title: "Field Manuscript: Glyph Ecologies",
    summary: "A manuscript observing how symbols mutate when they move between mediums and eras.",
    body: "Glyph ecologies are tracked as living systems, not fixed definitions. This manuscript supports comparative reading between visual design, language, and ritual framing.",
    type: "field-note",
    status: "published",
    tags: ["archive", "symbols", "field-note"],
    createdAt: "2026-08-02",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-04",
    seoTitle: "Field Manuscript: Glyph Ecologies",
    seoDescription: "A field manuscript from the Archive on symbol migration.",
    isDraft: false,
  },
  {
    slug: "institutional-lexicon",
    title: "Institutional Lexicon 01",
    summary: "Working language definitions for chambers, transmissions, and ethical framing terms.",
    body: "This lexicon clarifies terms used throughout the institution so that mystery never compromises comprehension.",
    type: "lore",
    status: "expanding",
    tags: ["archive", "institution", "lexicon"],
    createdAt: "2026-08-03",
    seoTitle: "Institutional Lexicon 01",
    seoDescription: "Working terminology for the Cerebral Synergy institution.",
    isDraft: false,
  },
];

export const laboratoryProtocols = [
  {
    id: "protocol-00",
    name: "Instrument 00",
    state: "Transmission Active",
    summary: "Defines baseline constraints for AI-mediated creative exploration.",
    notes: "Outputs are interpretive artifacts and require editorial review before publication.",
  },
  {
    id: "protocol-01",
    name: "Narrative Mixer",
    state: "Expanding",
    summary: "Combines memory fragments into coherent narrative prototypes.",
    notes: "The system intentionally preserves ambiguity markers to avoid false certainty.",
  },
  {
    id: "protocol-02",
    name: "Signal Distiller",
    state: "Open",
    summary: "Condenses research notes into concise transmission candidates.",
    notes: "Distillation is editorial aid, not autonomous publishing.",
  },
];

export const resonanceStates = [
  {
    id: "draft",
    title: "Draft Resonance",
    description: "Sketches and motifs are audible internally before public release.",
  },
  {
    id: "published",
    title: "Published Resonance",
    description: "The work is stable enough for listening sessions and contextual notes.",
  },
  {
    id: "expanding",
    title: "Expanding Resonance",
    description: "A transmission is live and may evolve as additional layers are introduced.",
  },
];

export const galleryPieces = [
  {
    id: "vault-study-01",
    title: "Vault Study 01",
    medium: "Digital composition",
    description: "A layered plate balancing archival geometry with modern signal glyphs.",
    palette: "Obsidian, brass, and deep cyan",
  },
  {
    id: "threshold-atlas",
    title: "Threshold Atlas",
    medium: "Editorial collage",
    description: "A map-like composition framing routes between symbolic zones.",
    palette: "Slate blue and luminous parchment",
  },
  {
    id: "oracle-lintel",
    title: "Oracle Lintel",
    medium: "Mixed media render",
    description: "A sealed portal motif marking deferred interaction territory.",
    palette: "Muted indigo and burnished gold",
  },
];

export function getArchiveEntryBySlug(slug: string): ContentEntry | undefined {
  return archiveEntries.find((entry) => entry.slug === slug);
}
