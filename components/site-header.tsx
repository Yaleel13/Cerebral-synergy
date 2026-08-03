import Link from "next/link";
import { coreRoutes } from "@/lib/site";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-bg)_84%,black)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm tracking-[0.22em] text-[color:var(--color-text)] uppercase">
          Cerebral Synergy
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
          {coreRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
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
