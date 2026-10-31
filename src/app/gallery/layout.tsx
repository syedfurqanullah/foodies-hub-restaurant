import { pageMetadata } from "../seo";

export const metadata = pageMetadata(
  "Food Gallery",
  "Browse food photography in the Foodies Hub sample restaurant website concept.",
  "/gallery",
);

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
