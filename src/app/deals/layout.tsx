import { pageMetadata } from "../seo";

export const metadata = pageMetadata(
  "Food Deals",
  "Explore sample meal deals and combination offers in the Foodies Hub restaurant concept.",
  "/deals",
);

export default function DealsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
