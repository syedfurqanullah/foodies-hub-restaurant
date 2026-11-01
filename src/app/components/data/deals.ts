
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
    description: "One premium burger, fries, and one drink.",
    originalPrice: 1399,
    discountedPrice: 999,
    discount: "30% OFF",
    image: "/images/deals/burger-combo.png?v=4",
    badge: "Best Value",
    terms: "Sample bundle and price. Item size, availability, and promotion dates are illustrative.",
  },
  {
    id: "pizza-combo",
    name: "Pizza & Drink Deal",
    description: "One large pizza and one drink.",
    originalPrice: 1499,
    discountedPrice: 999,
    discount: "33% OFF",
    image: "/images/deals/pizza-combo.png?v=4",
    badge: "Popular Deal",
    terms: "Sample bundle and price. Pizza size, drink choice, availability, and dates are illustrative.",
  },
  {
    id: "pasta-combo",
    name: "Pasta Combo Deal",
    description: "A pasta combo, freshly prepared for a satisfying meal.",
    originalPrice: 1299,
    discountedPrice: 899,
    discount: "31% OFF",
    image: "/images/deals/pasta-combo.png?v=4",
    badge: "Pasta Favorite",
    terms: "Sample bundle and price. Pasta selection, portions, availability, and dates are illustrative.",
  },
  {
    id: "family-feast",
    name: "BBQ Platter Deal",
    description: "A mixed BBQ platter, freshly grilled and made for sharing.",
    originalPrice: 2199,
    discountedPrice: 1499,
    discount: "32% OFF",
    image: "/images/deals/brbq-combo.png?v=4",
    badge: "Grill Favorite",
    terms: "Sample bundle and price. Platter contents, portions, availability, and dates are illustrative.",
  },
];
