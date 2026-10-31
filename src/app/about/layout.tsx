import { pageMetadata } from "../seo";

export const metadata = pageMetadata(
  "Our Story",
  "Explore the Foodies Hub restaurant concept, with sample story content and a preview of its food and hospitality pages.",
  "/about",
);

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
