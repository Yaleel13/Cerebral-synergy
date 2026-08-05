import Link from "next/link";
import { StatusMarker } from "@/components/status-marker";
import type { Portal } from "@/types/content";

interface PortalGridProps {
  portals: Portal[];
}

export function PortalGrid({ portals }: PortalGridProps) {
  return (
    <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {portals.map((portal) => (
        <li key={portal.key}>
          <Link
            href={portal.route}
            className="portal-tint focus-ring group block rounded-2xl border border-[color:var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-panel)_88%,black)] p-6"
            data-portal={portal.key}
          >
            <p className="editorial-eyebrow relative z-10">{portal.symbol} Chamber</p>
            <h3 className="relative z-10 mt-3 text-2xl text-[color:var(--color-text)]">{portal.name}</h3>
            <p className="relative z-10 mt-3 text-sm text-[color:var(--color-muted)]">{portal.purpose}</p>
            <div className="relative z-10 mt-5 flex items-center justify-between gap-3">
              <StatusMarker status={portal.status} />
              <span className="text-xs tracking-[0.14em] text-[color:var(--color-muted-strong)] uppercase">Enter chamber</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
