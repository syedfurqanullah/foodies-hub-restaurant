import type { Metadata } from "next";
import { restaurantConfig } from "./components/config/restaurant";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://foodies-hub-restaurant.vercel.app";

export const deploymentSiteUrl = (() => {
  if (!configuredSiteUrl) return undefined;

  try {
    const url = new URL(configuredSiteUrl);
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
})();

// Published demo pages can be indexed; keep restaurant structured data disabled
// separately while demoMode is true.
export const publicSiteUrl = deploymentSiteUrl;

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  noindex = false,
): Metadata {
  const fullTitle = `${title} | ${restaurantConfig.name}`;
  const canonical = publicSiteUrl && !noindex
    ? `${publicSiteUrl}${path}`
    : undefined;

  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      type: "website",
      siteName: restaurantConfig.name,
      title: fullTitle,
      description,
      ...(canonical ? { url: canonical } : {}),
      ...(deploymentSiteUrl
        ? { images: [{ url: restaurantConfig.socialPreviewImage, width: 1200, height: 630, alt: restaurantConfig.name }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(deploymentSiteUrl ? { images: [restaurantConfig.socialPreviewImage] } : {}),
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
