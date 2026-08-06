import Link from "next/link";
import { coreRoutes, socialLinks, utilityRoutes } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-bg-elevated)_85%,black)]">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_1fr_0.9fr]">
        <div>
          <p className="editorial-eyebrow">Transmission v0.2</p>
          <p className="mt-4 max-w-sm text-sm text-[color:var(--color-muted)]">
            Cerebral Synergy is an evolving institution for art, systems, myth, sound, and creative inquiry.
          </p>
          <p className="mt-4 text-xs tracking-[0.12em] text-[color:var(--color-muted-strong)] uppercase">
            Ancient memory, future intelligence.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 text-sm">
          {[...coreRoutes, ...utilityRoutes].map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="focus-ring rounded-sm px-1 py-1 text-[color:var(--color-muted)] hover:text-[color:var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-3 text-sm text-[color:var(--color-muted)]">
          <p>© {year} Cerebral Synergy</p>
          <p className="text-xs text-[color:var(--color-muted-strong)]">Editorial and artistic exploration with explicit ethical framing.</p>
          {socialLinks.length > 0 && (
            <ul className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-sm px-1 py-1 hover:text-[color:var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
