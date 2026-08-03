# Content Model

Typed models are defined in `types/content.ts`.

Primary entities:
- `Portal`
- `ContentEntry`
- `MediaAsset`
- `Creator`
- `PublicationStatus`

Each content entry supports slug, title, summary, type, status, tags, lifecycle dates, SEO fields, and optional media/citations/relations.

Phase one uses a local typed content layer in `lib/content.ts` with sample entries for:
- Featured transmission
- Current signals
- Portal definitions
