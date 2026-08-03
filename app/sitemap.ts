import type { MetadataRoute } from "next";
import { coreRoutes, utilityRoutes, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [...coreRoutes, ...utilityRoutes].map((route) => ({
    url: `${siteConfig.url}${route.href}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route.href === "/" ? 1 : 0.7,
  }));
}
