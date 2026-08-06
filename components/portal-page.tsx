import { SectionHeading } from "@/components/section-heading";

interface PortalPageProps {
  eyebrow: string;
  title: string;
  description: string;
  framing?: string;
  children?: React.ReactNode;
}

export function PortalPage({ eyebrow, title, description, framing, children }: PortalPageProps) {
  return (
    <section className="container-shell py-14 sm:py-16">
      <div className="surface-plate chamber-frame p-7 sm:p-10">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </div>
      {framing && (
        <p className="surface-panel mt-6 p-4 text-sm text-[color:var(--color-muted)]">
          {framing}
        </p>
      )}
      {children}
    </section>
  );
}
