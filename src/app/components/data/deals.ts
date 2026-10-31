
export interface Deal {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
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
    image: "/images/deals/burger-combo.jpg",
    badge: "Save 17%",
  },
  {
    id: "pizza-combo",
    name: "Pizza Feast",
    description: "Delicious pizza with a refreshing drink.",
    originalPrice: 1600,
    discountedPrice: 1299,
    image: "/images/deals/pizza-combo.jpg",
    badge: "Save 19%",
  },
  {
    id: "family-feast",
    name: "Family Feast",
    description: "A satisfying meal to share with your family.",
    originalPrice: 2800,
    discountedPrice: 2399,
    image: "/images/deals/family-feast.jpg",
    badge: "Save 14%",
  },
];
