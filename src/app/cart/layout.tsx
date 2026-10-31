import { pageMetadata } from "../seo";

export const metadata = pageMetadata(
  "Your Cart",
  "Preview a sample Foodies Hub order and prepare a WhatsApp draft. No live order is submitted.",
  "/cart",
  true,
);

export default function CartLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
