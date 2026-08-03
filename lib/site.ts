export const siteConfig = {
  name: "Cerebral Synergy",
  title: "Cerebral Synergy — Alchemical Futurism Institution",
  description:
    "Cerebral Synergy is a living archive of art, sound, mythology, technology, and transformational thought—built at the meeting point of ancient memory and future intelligence.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cerebral-synergy.com",
  creator: "Cerebral Synergy",
};

export const coreRoutes = [
  { href: "/", label: "Threshold" },
  { href: "/archive", label: "Archive" },
  { href: "/laboratory", label: "Laboratory" },
  { href: "/observatory", label: "Observatory" },
  { href: "/resonance", label: "Resonance Hall" },
  { href: "/gallery", label: "Gallery" },
  { href: "/oracle", label: "Oracle" },
  { href: "/institution", label: "Institution" },
];

export const utilityRoutes = [
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export const socialLinks = [
  { key: "instagram", label: "Instagram", href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM },
  { key: "youtube", label: "YouTube", href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE },
  { key: "x", label: "X", href: process.env.NEXT_PUBLIC_SOCIAL_X },
].filter((link) => Boolean(link.href));
