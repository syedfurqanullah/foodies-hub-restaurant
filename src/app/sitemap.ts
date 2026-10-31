import type { MetadataRoute } from "next";
import { publicSiteUrl } from "./seo";
const routes = ["/", "/menu", "/deals", "/about", "/gallery", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!publicSiteUrl) return [];

  return routes.map((route) => ({
    url: `${publicSiteUrl}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
