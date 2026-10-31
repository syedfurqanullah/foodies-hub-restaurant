import type { MetadataRoute } from "next";
import { publicSiteUrl } from "./seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cart",
    },
    ...(publicSiteUrl ? { sitemap: `${publicSiteUrl}/sitemap.xml` } : {}),
  };
}
