"use client";

import { useState } from "react";
import { resonanceStates } from "@/lib/content";

export function ResonanceStatePanel() {
  const [stateIndex, setStateIndex] = useState(0);
  const state = resonanceStates[stateIndex] ?? resonanceStates[0];

  if (!state) {
    return null;
  }

  const cycleState = () => {
    setStateIndex((value) => (value + 1) % resonanceStates.length);
  };

  return (
    <section className="surface-plate mt-8 p-6">
      <p className="editorial-eyebrow">Resonance State</p>
      <h3 className="mt-3 text-3xl">{state.title}</h3>
      <p className="mt-4 text-[color:var(--color-muted)]">{state.description}</p>
      <button
        type="button"
        onClick={cycleState}
        className="focus-ring mt-6 rounded-full border border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_80%,black)] px-5 py-2 text-xs tracking-[0.15em] uppercase"
      >
        Cycle state
      </button>
    </section>
  );
}
