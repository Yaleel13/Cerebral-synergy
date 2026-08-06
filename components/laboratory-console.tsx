"use client";

import { useState } from "react";
import { laboratoryProtocols } from "@/lib/content";

export function LaboratoryConsole() {
  const [activeId, setActiveId] = useState(laboratoryProtocols[0]?.id ?? "");
  const active = laboratoryProtocols.find((protocol) => protocol.id === activeId) ?? laboratoryProtocols[0];

  if (!active) {
    return null;
  }

  return (
    <section className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="surface-panel p-4">
        <p className="editorial-eyebrow">Protocol Selector</p>
        <ul className="mt-4 space-y-2">
          {laboratoryProtocols.map((protocol) => (
            <li key={protocol.id}>
              <button
                type="button"
                onClick={() => setActiveId(protocol.id)}
                className={`focus-ring w-full rounded-md border px-3 py-3 text-left ${
                  active.id === protocol.id
                    ? "border-[color:var(--color-focus)] bg-[color:color-mix(in_oklab,var(--color-panel)_70%,black)] text-[color:var(--color-text)]"
                    : "border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_82%,black)] text-[color:var(--color-muted)]"
                }`}
              >
                <span className="block text-xs tracking-[0.14em] uppercase">{protocol.state}</span>
                <span className="mt-1 block text-base">{protocol.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <article className="surface-plate p-6">
        <p className="editorial-eyebrow">Active Instrument</p>
        <h3 className="mt-3 text-3xl">{active.name}</h3>
        <p className="mt-4 text-[color:var(--color-muted)]">{active.summary}</p>
        <p className="mt-5 rounded-md border border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_80%,black)] p-3 text-sm text-[color:var(--color-muted)]">
          {active.notes}
        </p>
      </article>
    </section>
  );
}
