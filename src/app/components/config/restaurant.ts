
import type { RestaurantConfig } from "../types/restaurant";

export const restaurantConfig: RestaurantConfig = {
  name: "Foodies Hub",
  tagline: "Good Food. Great Moments.",
  description:
    "Discover delicious food, freshly prepared meals, and memorable dining experiences.",

  logo: "/logo/foodies-hub-logo.svg",
  heroImage: "/images/hero/restaurant-hero.jpg",

  contact: {
    phone: "+92 300 0000000",
    whatsapp: "923000000000",
    email: "hello@foodieshub.com",
    address: "Your Restaurant Address, Karachi, Pakistan",
  },

  socialLinks: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },

  openingHours: [
    {
      days: "Monday - Sunday",
      openingTime: "12:00 PM",
      closingTime: "11:00 PM",
    },
  ],

  theme: {
    primary: "#1C1C1C",
    secondary: "#F5F0E8",
    accent: "#E87532",
    background: "#FAF9F6",
    foreground: "#242424",
  },
};
