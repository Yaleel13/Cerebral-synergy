import Link from "next/link";
import { coreRoutes, socialLinks, utilityRoutes } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[color:var(--color-border)] bg-[color:var(--color-panel)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xs tracking-[0.18em] text-[color:var(--color-muted)] uppercase">Transmission v0.1</p>
          <p className="mt-3 max-w-sm text-sm text-[color:var(--color-muted)]">
            Cerebral Synergy is an evolving institution for art, systems, myth, sound, and creative inquiry.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 text-sm">
          {[...coreRoutes, ...utilityRoutes].map((route) => (
            <Link key={route.href} href={route.href} className="text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]">
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-2 text-sm text-[color:var(--color-muted)]">
          <p>© {year} Cerebral Synergy</p>
          {socialLinks.length > 0 && (
            <ul className="flex gap-3">
              {socialLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-text)]">
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
