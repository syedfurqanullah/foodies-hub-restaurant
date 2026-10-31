
export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  category: "Food" | "Restaurant" | "Dining";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    image: "/images/gallery/restaurant-interior.jpg",
    alt: "Elegant restaurant interior",
    category: "Restaurant",
  },
  {
    id: "gallery-2",
    image: "/images/gallery/burger.jpg",
    alt: "Freshly prepared burger",
    category: "Food",
  },
  {
    id: "gallery-3",
    image: "/images/gallery/pizza.jpg",
    alt: "Freshly baked pizza",
    category: "Food",
  },
  {
    id: "gallery-4",
    image: "/images/gallery/dining.jpg",
    alt: "Restaurant dining experience",
    category: "Dining",
  },
  {
    id: "gallery-5",
    image: "/images/gallery/dessert.jpg",
    alt: "Delicious dessert",
    category: "Food",
  },
  {
    id: "gallery-6",
    image: "/images/gallery/restaurant.jpg",
    alt: "Restaurant atmosphere",
    category: "Restaurant",
  },
];

export const galleryCategories = [
  "All",
  "Food",
  "Restaurant",
  "Dining",
] as const;
