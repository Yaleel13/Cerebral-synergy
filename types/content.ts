export type PublicationStatus = "draft" | "published" | "sealed" | "expanding";

export type PortalKey =
  | "archive"
  | "laboratory"
  | "observatory"
  | "resonance"
  | "gallery"
  | "oracle";

export type ContentType =
  | "artifact"
  | "transmission"
  | "essay"
  | "collection"
  | "experiment"
  | "sound-work"
  | "visual-work"
  | "story"
  | "lore"
  | "field-note";

export interface MediaAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  credit?: string;
}

export interface Creator {
  slug: string;
  title: string;
  summary: string;
}

export interface ContentEntry {
  slug: string;
  title: string;
  summary: string;
  body?: string;
  type: ContentType;
  status: PublicationStatus;
  tags: string[];
  createdAt: string;
  publishedAt?: string;
  updatedAt?: string;
  heroMedia?: MediaAsset;
  thumbnailMedia?: MediaAsset;
  credits?: string[];
  citations?: string[];
  relatedEntries?: string[];
  seoTitle: string;
  seoDescription: string;
  isDraft: boolean;
}

export interface Portal {
  key: PortalKey;
  name: string;
  route: `/${PortalKey}`;
  purpose: string;
  status: "Open" | "Expanding" | "Transmission Active" | "Sealed";
  symbol: string;
}
