export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  category: "Food" | "Drinks" | "Ambience";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-interior",
    image: "/images/hero/dining-room.jpg",
    alt: "Warmly lit dining room ready for dinner",
    category: "Ambience",
  },
  {
    id: "gallery-burger",
    image: "/images/menu/burgers/ember-house-burger.jpg",
    alt: "Ember House double beef burger",
    category: "Food",
  },
  {
    id: "gallery-pizza",
    image: "/images/menu/pizza/pepperoni-pizza.jpg",
    alt: "Pepperoni pizza fresh from the oven",
    category: "Food",
  },
  {
    id: "gallery-pasta",
    image: "/images/menu/pasta/creamy-tuscan-tagliatelle.jpg",
    alt: "Creamy Tuscan tagliatelle",
    category: "Food",
  },
  {
    id: "gallery-grill",
    image: "/images/menu/bbq/smoky-grill-platter.jpg",
    alt: "Smoky grilled ribs and sides",
    category: "Food",
  },
  {
    id: "gallery-dessert",
    image: "/images/menu/desserts/strawberry-panna-cotta.jpg",
    alt: "Strawberry panna cotta with fresh berries",
    category: "Food",
  },
  {
    id: "gallery-drinks",
    image: "/images/menu/drinks/berry-mint-mocktail.jpg",
    alt: "Berry mint mocktail",
    category: "Drinks",
  },
];

export const galleryCategories = [
  "All",
  "Food",
  "Drinks",
  "Ambience",
] as const;
