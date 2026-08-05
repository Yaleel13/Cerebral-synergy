interface StatusMarkerProps {
  status: string;
}

const statusClass: Record<string, string> = {
  Open: "border-[color:color-mix(in_oklab,var(--color-accent)_55%,var(--color-border))] text-[color:var(--color-accent)]",
  Expanding: "border-[color:color-mix(in_oklab,var(--color-muted-strong)_68%,var(--color-border))] text-[color:var(--color-muted-strong)]",
  "Transmission Active":
    "border-[color:color-mix(in_oklab,var(--color-accent-warm)_55%,var(--color-border))] text-[color:var(--color-accent-warm)]",
  Sealed: "border-[color:var(--color-border)] text-[color:var(--color-muted)]",
};

export function StatusMarker({ status }: StatusMarkerProps) {
  const mappedClass = statusClass[status] ?? "border-[color:var(--color-border)] text-[color:var(--color-muted)]";

  return (
    <span
      className={`inline-flex items-center rounded-full border bg-[color:color-mix(in_oklab,var(--color-panel)_85%,black)] px-2.5 py-1 text-[11px] tracking-[0.16em] uppercase ${mappedClass}`}
    >
      {status}
    </span>
  );
}
