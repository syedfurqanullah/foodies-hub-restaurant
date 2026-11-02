
export interface Deal {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  image: string;
  badge: string;
  terms: string;
}

export const deals: Deal[] = [
  {
    id: "burger-combo",
    name: "Premium Burger Deal",
    description: "House burger, fries, and a soft drink.",
    originalPrice: 1399,
    discountedPrice: 999,
    discount: "29% OFF",
    image: "/images/deals/burger-combo.webp",
    badge: "Burger combo",
    terms: "Sample offer and price. Details subject to confirmation.",
  },
  {
    id: "pizza-combo",
    name: "Pizza & Drink Deal",
    description: "One large pizza with a soft drink.",
    originalPrice: 1499,
    discountedPrice: 999,
    discount: "33% OFF",
    image: "/images/deals/pizza-combo.webp",
    badge: "Pizza combo",
    terms: "Sample offer and price. Pizza size and drink choice to be confirmed.",
  },
  {
    id: "pasta-combo",
    name: "Pasta Combo Deal",
    description: "A pasta plate with garlic bread and a soft drink.",
    originalPrice: 1299,
    discountedPrice: 899,
    discount: "31% OFF",
    image: "/images/deals/pasta-combo.webp",
    badge: "Pasta combo",
    terms: "Sample offer and price. Pasta selection to be confirmed.",
  },
  {
    id: "family-feast",
    name: "BBQ Platter Deal",
    description: "A mixed grill platter with sides and house barbecue sauce.",
    originalPrice: 2199,
    discountedPrice: 1499,
    discount: "32% OFF",
    image: "/images/deals/bbq-combo.webp",
    badge: "Grill combo",
    terms: "Sample offer and price. Platter contents to be confirmed.",
  },
];
