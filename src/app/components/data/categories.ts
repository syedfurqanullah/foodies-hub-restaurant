
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: "burgers",
    name: "Burgers",
    description: "Grilled to order with house sauce.",
    image: "/images/menu/burgers/ember-house-burger.jpg",
    href: "/menu?category=burgers",
  },
  {
    id: "pizza",
    name: "Pizza",
    description: "Oven-baked with classic toppings.",
    image: "/images/menu/pizza/charred-garden-pizza.jpg",
    href: "/menu?category=pizza",
  },
  {
    id: "pasta",
    name: "Pasta",
    description: "Comforting plates made to order.",
    image: "/images/menu/pasta/pesto-farfalle.jpg",
    href: "/menu?category=pasta",
  },
  {
    id: "bbq",
    name: "BBQ",
    description: "Fire-grilled favorites with house barbecue sauce.",
    image: "/images/menu/bbq/smoky-grill-platter.jpg",
    href: "/menu?category=bbq",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "A simple finish to the meal.",
    image: "/images/menu/desserts/chocolate-mousse-parfait.jpg",
    href: "/menu?category=desserts",
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Coolers, lemonade, and soft drinks.",
    image: "/images/menu/drinks/fresh-lemonade.jpg",
    href: "/menu?category=drinks",
  },
];
