interface StatusMarkerProps {
  status: string;
}

export function StatusMarker({ status }: StatusMarkerProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel)] px-2.5 py-1 text-xs tracking-[0.12em] text-[color:var(--color-muted)] uppercase">
      {status}
    </span>
  );
}
