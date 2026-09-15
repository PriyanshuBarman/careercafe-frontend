import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/constants/site";
import { QUESTIONS } from "@/features/questions-dashboard/data/questions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/analyst-tracks", "/questions"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date(),
  }));

  // Dynamic questions page
  const questionRoutes = QUESTIONS.map((q) => ({
    url: `${SITE_INFO.url}/questions/${q.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...questionRoutes];
}
