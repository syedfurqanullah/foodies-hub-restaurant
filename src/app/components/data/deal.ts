
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
    description:
      "Enjoy a juicy beef burger with crispy fries and a refreshing drink.",
    originalPrice: 1200,
    discountedPrice: 950,
    discount: "20% OFF",
    image: "/images/deals/burger-combo.jpg",
    badge: "Best Seller",
  },
  {
    id: "pizza-feast",
    name: "Pizza Feast",
    description:
      "A delicious loaded pizza made for sharing with your favorite people.",
    originalPrice: 1800,
    discountedPrice: 1450,
    discount: "19% OFF",
    image: "/images/deals/pizza-feast.jpg",
    badge: "Popular Deal",
  },
  {
    id: "family-bbq",
    name: "Family BBQ Deal",
    description:
      "A flavorful BBQ platter perfect for a memorable family meal.",
    originalPrice: 2500,
    discountedPrice: 2100,
    discount: "16% OFF",
    image: "/images/deals/family-bbq.jpg",
    badge: "Special Offer",
  },
];
