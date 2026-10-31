import { pageMetadata } from "../seo";

export const metadata = pageMetadata(
  "Contact",
  "Preview the Foodies Hub contact page. Contact details and message delivery are configured after restaurant approval.",
  "/contact",
);

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
