
import type { RestaurantConfig } from "../types/restaurant";

export const restaurantConfig: RestaurantConfig = {
  demoMode: true,
  name: "Foodies Hub",
  tagline: "Fire-kissed plates. Good times.",
  description:
    "A modern Karachi neighborhood grill and kitchen concept serving flame-grilled favorites, comfort food, and relaxed dining.",

  logo: "/logo/foodies-hub-logo.png?v=2",
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
      days: "Daily (sample)",
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
