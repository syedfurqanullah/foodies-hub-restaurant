
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
    description: "Juicy burgers made fresh",
    image: "/images/menu/burgers/ember-house-burger.jpg",
    href: "/menu?category=burgers",
  },
  {
    id: "pizza",
    name: "Pizza",
    description: "Freshly baked, full of flavor",
    image: "/images/menu/pizza/charred-garden-pizza.jpg",
    href: "/menu?category=pizza",
  },
  {
    id: "pasta",
    name: "Pasta",
    description: "Delicious pasta creations",
    image: "/images/menu/pasta/pesto-farfalle.jpg",
    href: "/menu?category=pasta",
  },
  {
    id: "bbq",
    name: "BBQ",
    description: "Smoky and flavorful bites",
    image: "/images/menu/bbq/smoky-grill-platter.jpg",
    href: "/menu?category=bbq",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "A sweet ending to every meal",
    image: "/images/menu/desserts/chocolate-mousse-parfait.jpg",
    href: "/menu?category=desserts",
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Refreshing drinks for every mood",
    image: "/images/menu/drinks/fresh-lemonade.jpg",
    href: "/menu?category=drinks",
  },
];
