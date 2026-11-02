
import type { RestaurantConfig } from "../types/restaurant";

export const restaurantConfig: RestaurantConfig = {
  demoMode: true,
  name: "Foodies Hub",
  tagline: "Good food. Good company.",
  description:
    "A Karachi neighborhood grill concept serving burgers, pizza, pasta, barbecue, and familiar sides.",

  logo: "/logo/foodies-hub-logo.webp",
  heroImage: "/images/hero/restaurant-interior.jpg",
  socialPreviewImage: "/images/hero/restaurant-interior.jpg",

  contact: {
    phone: "+92 21 0000 0000",
    whatsapp: "",
    email: "hello@foodieshub.example",
    address: "Clifton, Karachi",
  },
  deliveryFee: null,

  openingHours: [
    {
      days: "Daily",
      openingTime: "12:00 PM",
      closingTime: "11:00 PM",
    },
  ],

};
