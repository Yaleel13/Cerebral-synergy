# Architecture

## Framework
- Next.js App Router
- Server Components by default
- Client Components only for interactive navigation

## Application structure
- `app/` route tree and metadata routes (`robots.ts`, `sitemap.ts`)
- `components/` reusable shell and content presentation components
- `lib/` site config and typed local content layer
- `types/` shared models

## Security
- Basic response security headers configured in `next.config.ts`
- No auth or payment systems in phase one
- No tracking scripts by default

## Deployment readiness
- Builds statically where appropriate
- Route metadata and canonical strategy in place
