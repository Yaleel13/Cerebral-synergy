import { SectionHeading } from "@/components/section-heading";

interface PortalPageProps {
  eyebrow: string;
  title: string;
  description: string;
  framing?: string;
}

export function PortalPage({ eyebrow, title, description, framing }: PortalPageProps) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      {framing && (
        <p className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-panel)] p-4 text-sm text-[color:var(--color-muted)]">
          {framing}
        </p>
      )}
    </section>
  );
}
