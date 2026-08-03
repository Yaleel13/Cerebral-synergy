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
        className="rounded-md border border-[color:var(--color-border)] px-3 py-2 text-sm text-[color:var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setOpen(false)}>
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="ml-auto flex h-full w-72 flex-col gap-4 border-l border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-6"
            onClick={(event) => event.stopPropagation()}
          >
            {[...coreRoutes, ...utilityRoutes].map((route, index) => (
              <Link
                key={route.href}
                href={route.href}
                ref={index === 0 ? firstLinkRef : null}
                onClick={() => setOpen(false)}
                className="rounded px-1 py-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
