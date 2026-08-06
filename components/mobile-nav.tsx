"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { coreRoutes, utilityRoutes } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="focus-ring inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_82%,black)] px-4 py-2 text-xs tracking-[0.15em] text-[color:var(--color-text)] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="ml-auto flex h-full w-80 flex-col gap-4 border-l border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-bg-elevated)_92%,black)] p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="editorial-eyebrow">Institution Map</p>
            {[...coreRoutes, ...utilityRoutes].map((route, index) => (
              <Link
                key={route.href}
                href={route.href}
                ref={index === 0 ? firstLinkRef : null}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md border border-transparent px-2 py-2 text-sm tracking-[0.08em] text-[color:var(--color-muted)] uppercase hover:border-[color:var(--color-border)] hover:text-[color:var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
              >
                {route.label}
              </Link>
            ))}
            <p className="mt-auto rounded-md border border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_80%,black)] p-3 text-xs text-[color:var(--color-muted)]">
              Discover slowly. Each chamber preserves context, framing, and intent.
            </p>
          </nav>
        </div>
      )}
    </div>
  );
}
