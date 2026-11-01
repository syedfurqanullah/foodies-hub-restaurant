
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import CartAddedPanel from "./components/layout/CartAddedPanel";
import { CartProvider } from "./components/context/CartContext";
import { restaurantConfig } from "./components/config/restaurant";
import { deploymentSiteUrl, publicSiteUrl } from "./seo";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const restaurantSchema =
  publicSiteUrl && !restaurantConfig.demoMode && restaurantConfig.contact.phone && restaurantConfig.contact.address
    ? {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "@id": `${publicSiteUrl}/#restaurant`,
        name: restaurantConfig.name,
        description: restaurantConfig.description,
        url: publicSiteUrl,
        image: `${publicSiteUrl}${restaurantConfig.socialPreviewImage}`,
        telephone: restaurantConfig.contact.phone,
        ...(restaurantConfig.contact.email
          ? { email: restaurantConfig.contact.email }
          : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: restaurantConfig.contact.address,
        },
        ...(restaurantConfig.socialLinks
          ? {
              sameAs: Object.values(restaurantConfig.socialLinks).filter(Boolean),
            }
          : {}),
        hasMenu: `${publicSiteUrl}/menu`,
      }
    : null;

export const metadata: Metadata = {
  ...(deploymentSiteUrl ? { metadataBase: new URL(deploymentSiteUrl) } : {}),
  ...(publicSiteUrl ? { alternates: { canonical: publicSiteUrl } } : {}),
  title: {
    default: `${restaurantConfig.name} | ${restaurantConfig.tagline}`,
    template: `%s | ${restaurantConfig.name}`,
  },
  description: restaurantConfig.description,
  applicationName: restaurantConfig.name,
  icons: {
    icon: [
      { url: "/icons/foodies-hub-favicon.ico", type: "image/x-icon" },
      { url: "/logo/foodies-hub-icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: "/logo/foodies-hub-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: restaurantConfig.name,
    title: `${restaurantConfig.name} | ${restaurantConfig.tagline}`,
    description: restaurantConfig.description,
    ...(publicSiteUrl ? { url: publicSiteUrl } : {}),
    ...(deploymentSiteUrl
      ? { images: [{ url: restaurantConfig.socialPreviewImage, width: 1200, height: 630, alt: restaurantConfig.name }] }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurantConfig.name} | ${restaurantConfig.tagline}`,
    description: restaurantConfig.description,
    ...(deploymentSiteUrl ? { images: [restaurantConfig.socialPreviewImage] } : {}),
  },
  robots: publicSiteUrl
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        <CartProvider>
          {restaurantSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(restaurantSchema).replace(/</g, "\\u003c"),
              }}
            />
          )}
          <Navbar />
          {children}
          <CartAddedPanel />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
