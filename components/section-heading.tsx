interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-8 max-w-3xl">
      <p className="editorial-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl text-[color:var(--color-text)] sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-base text-[color:var(--color-muted)] sm:text-lg">{description}</p>}
    </header>
  );
}
