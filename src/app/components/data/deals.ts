
export interface Deal {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  image: string;
  badge: string;
}

export const deals: Deal[] = [
  {
    id: "burger-combo",
    name: "Burger Combo",
    description: "Classic beef burger with fries and a cold drink.",
    originalPrice: 1200,
    discountedPrice: 999,
    discount: "17% OFF",
    image: "/images/deals/burger-combo.jpg",
    badge: "Best Value",
  },
  {
    id: "pizza-combo",
    name: "Pizza Feast",
    description: "Delicious pizza with a refreshing drink.",
    originalPrice: 1600,
    discountedPrice: 1299,
    discount: "19% OFF",
    image: "/images/deals/pizza-combo.jpg",
    badge: "Popular Deal",
  },
  {
    id: "family-feast",
    name: "Family Feast",
    description: "A satisfying meal to share with your family.",
    originalPrice: 2800,
    discountedPrice: 2399,
    discount: "14% OFF",
    image: "/images/deals/family-feast.jpg",
    badge: "Family Favorite",
  },
];
