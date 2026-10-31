
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
    image: "/images/categories/burger.png",
    href: "/menu?category=burgers",
  },
  {
    id: "pizza",
    name: "Pizza",
    description: "Freshly baked, full of flavor",
    image: "/images/categories/pizza.jpg",
    href: "/menu?category=pizza",
  },
  {
    id: "pasta",
    name: "Pasta",
    description: "Delicious pasta creations",
    image: "/images/categories/pasta.jpg",
    href: "/menu?category=pasta",
  },
  {
    id: "bbq",
    name: "BBQ",
    description: "Smoky and flavorful bites",
    image: "/images/categories/bbq.jpg",
    href: "/menu?category=bbq",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "A sweet ending to every meal",
    image: "/images/categories/desserts.jpg",
    href: "/menu?category=desserts",
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Refreshing drinks for every mood",
    image: "/images/categories/drinks.jpg",
    href: "/menu?category=drinks",
  },
];
