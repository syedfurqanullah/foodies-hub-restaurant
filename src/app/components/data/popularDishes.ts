
export interface PopularDish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

export const popularDishes: PopularDish[] = [
  {
    id: "classic-beef-burger",
    name: "Classic Beef Burger",
    description: "Juicy beef patty with fresh lettuce and cheese.",
    price: 850,
    image: "/images/menu/classic-burger.jpg",
    badge: "Popular",
  },
  {
    id: "loaded-pizza",
    name: "Loaded Pizza",
    description: "Delicious pizza topped with cheese and fresh toppings.",
    price: 1200,
    image: "/images/menu/loaded-pizza.jpg",
    badge: "Bestseller",
  },
  {
    id: "creamy-pasta",
    name: "Creamy Pasta",
    description: "Rich and creamy pasta with a flavorful sauce.",
    price: 950,
    image: "/images/menu/creamy-pasta.jpg",
  },
  {
    id: "bbq-platter",
    name: "BBQ Platter",
    description: "A delicious selection of smoky BBQ favorites.",
    price: 1450,
    image: "/images/menu/bbq-platter.jpg",
  },
];
