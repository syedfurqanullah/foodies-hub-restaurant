import { pageMetadata } from "../seo";

export const metadata = pageMetadata(
  "Menu",
  "Browse sample Foodies Hub dishes and prices in this restaurant website concept.",
  "/menu",
);

export default function MenuLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
