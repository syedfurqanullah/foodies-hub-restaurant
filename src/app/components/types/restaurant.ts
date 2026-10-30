
export interface RestaurantSocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export interface RestaurantContact {
  phone: string;
  whatsapp: string;
  email?: string;
  address: string;
}

export interface RestaurantHours {
  days: string;
  openingTime: string;
  closingTime: string;
}

export interface RestaurantTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  heroImage: string;
  contact: RestaurantContact;
  socialLinks: RestaurantSocialLinks;
  openingHours: RestaurantHours[];
  theme: RestaurantTheme;
}
