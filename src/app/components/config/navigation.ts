export interface NavigationLink {
  label: string;
  href: string;
}

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Deals", href: "/deals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];