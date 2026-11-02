import { pageMetadata } from "../seo";

export const metadata = pageMetadata(
  "Your Cart",
  "Review a sample Foodies Hub order in a local preview. No order is sent or stored.",
  "/cart",
  true,
);

export default function CartLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
