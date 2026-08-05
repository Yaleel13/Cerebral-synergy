import Link from "next/link";
import { coreRoutes } from "@/lib/site";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-bg-elevated)_78%,black)]/92 backdrop-blur-md">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="group inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--color-focus)]">
          <span
            aria-hidden="true"
            className="inline-flex size-8 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_78%,black)] text-sm text-[color:var(--color-accent-warm)]"
          >
            ✶
          </span>
          <span>
            <span className="block text-[10px] tracking-[0.25em] text-[color:var(--color-muted-strong)] uppercase">Archive Institution</span>
            <span className="block text-sm tracking-[0.2em] text-[color:var(--color-text)] uppercase group-hover:text-[color:var(--color-accent-warm)]">
              Cerebral Synergy
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          {coreRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="focus-ring rounded-full border border-transparent px-3 py-2 text-xs tracking-[0.12em] text-[color:var(--color-muted)] uppercase hover:text-[color:var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
