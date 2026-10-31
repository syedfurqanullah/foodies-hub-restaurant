
export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  category: "Food";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    image: "/images/categories/burger.png",
    alt: "Burger selection",
    category: "Food",
  },
  {
    id: "gallery-2",
    image: "/images/menu/classic-burger.jpg",
    alt: "Classic beef burger",
    category: "Food",
  },
  {
    id: "gallery-3",
    image: "/images/menu/loaded-pizza.jpg",
    alt: "Loaded pizza",
    category: "Food",
  },
  {
    id: "gallery-4",
    image: "/images/menu/creamy-pasta.jpg",
    alt: "Creamy pasta",
    category: "Food",
  },
  {
    id: "gallery-5",
    image: "/images/categories/desserts.jpg",
    alt: "Dessert selection",
    category: "Food",
  },
  {
    id: "gallery-6",
    image: "/images/menu/bbq-platter.jpg",
    alt: "Barbecue platter",
    category: "Food",
  },
];

export const galleryCategories = [
  "All",
  "Food",
] as const;
