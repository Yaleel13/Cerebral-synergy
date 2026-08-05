"use client";

import { useMemo, useState } from "react";
import { galleryPieces } from "@/lib/content";

export function GalleryViewer() {
  const [activeId, setActiveId] = useState(galleryPieces[0]?.id ?? "");
  const activePiece = useMemo(
    () => galleryPieces.find((piece) => piece.id === activeId) ?? galleryPieces[0],
    [activeId],
  );

  if (!activePiece) {
    return null;
  }

  return (
    <section className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <article className="surface-plate chamber-frame p-6">
        <p className="editorial-eyebrow">Selected Work</p>
        <h3 className="mt-3 text-3xl">{activePiece.title}</h3>
        <p className="mt-3 text-sm tracking-[0.12em] text-[color:var(--color-muted-strong)] uppercase">{activePiece.medium}</p>
        <p className="mt-4 text-[color:var(--color-muted)]">{activePiece.description}</p>
        <p className="mt-5 text-sm text-[color:var(--color-muted)]">
          <span className="text-[color:var(--color-muted-strong)]">Palette:</span> {activePiece.palette}
        </p>
      </article>
      <div className="surface-panel p-4">
        <p className="editorial-eyebrow">Collection Index</p>
        <ul className="mt-4 space-y-2">
          {galleryPieces.map((piece) => (
            <li key={piece.id}>
              <button
                type="button"
                onClick={() => setActiveId(piece.id)}
                className={`focus-ring w-full rounded-md border px-3 py-3 text-left ${
                  activePiece.id === piece.id
                    ? "border-[color:var(--color-focus)] bg-[color:color-mix(in_oklab,var(--color-panel)_74%,black)] text-[color:var(--color-text)]"
                    : "border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_84%,black)] text-[color:var(--color-muted)]"
                }`}
              >
                <span className="block text-base">{piece.title}</span>
                <span className="mt-1 block text-xs tracking-[0.08em] uppercase">{piece.medium}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
