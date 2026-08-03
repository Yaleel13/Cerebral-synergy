interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-6 max-w-3xl">
      <p className="text-xs tracking-[0.2em] text-[color:var(--color-muted)] uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl text-[color:var(--color-text)] sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-[color:var(--color-muted)]">{description}</p>}
    </header>
  );
}
