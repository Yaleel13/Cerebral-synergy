import Link from "next/link";
import { StatusMarker } from "@/components/status-marker";
import type { Portal } from "@/types/content";

interface PortalGridProps {
  portals: Portal[];
}

export function PortalGrid({ portals }: PortalGridProps) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {portals.map((portal) => (
        <li key={portal.key}>
          <Link
            href={portal.route}
            className="group block rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-panel)] p-5 transition hover:border-[color:var(--color-focus)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-focus)]"
          >
            <p className="text-xs tracking-[0.2em] text-[color:var(--color-muted)] uppercase">{portal.symbol}</p>
            <h3 className="mt-3 text-xl text-[color:var(--color-text)]">{portal.name}</h3>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">{portal.purpose}</p>
            <div className="mt-4">
              <StatusMarker status={portal.status} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
