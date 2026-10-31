
import type { RestaurantConfig } from "../types/restaurant";

export const restaurantConfig: RestaurantConfig = {
  demoMode: true,
  name: "Foodies Hub",
  tagline: "Good Food. Great Moments.",
  description:
    "Explore the Foodies Hub restaurant website concept, with sample menu dishes, prices, and meal offers.",

  logo: "/logo/foodies-hub-logo.png",
  heroImage: "/images/hero/hero.jpg",
  socialPreviewImage: "/images/og/foodies-hub-preview.jpg",

  contact: {
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
  },
  deliveryFee: null,

  openingHours: [
    {
      days: "Monday - Sunday",
      openingTime: "12:00 PM",
      closingTime: "11:00 PM",
    },
  ],

  theme: {
    primary: "#171713",
    secondary: "#F4EFE4",
    accent: "#B89A62",
    background: "#171713",
    foreground: "#F4EFE4",
  },
};
