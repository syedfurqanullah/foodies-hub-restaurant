# Foodies Hub Restaurant Website

A responsive restaurant website concept built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. It includes restaurant pages, a sample menu, deals, a gallery, cart controls, and a WhatsApp order preview.

## Features

- Responsive home, menu, deals, about, gallery, contact, and cart pages
- Menu search, category filters, and item links
- Cart quantity controls with browser storage
- WhatsApp order preview for the sample checkout flow
- Page metadata, social preview images, sitemap, and robots rules
- Subtle card motion with reduced-motion support

## Getting Started

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Mode

The project starts with `demoMode: true`. The restaurant details, menu, prices, deals, photos, and reviews are sample content. The cart is stored in the visitor's browser. Checkout opens a sample WhatsApp draft; it does not send an order to a restaurant. The contact form opens an email draft and does not send data to a server.

## Customize for a Restaurant

Update `src/app/components/config/restaurant.ts` with details approved by the restaurant. Replace sample menu and deal content in `src/app/components/data/`. Use restaurant-approved photos and verified reviews.

Confirm all business details before sharing a preview, including contact information, opening hours, delivery areas, menu prices, dietary tags, allergens, and delivery fees. Do not add dietary or allergen claims until the restaurant verifies them.

Keep `demoMode: true` for previews. Set it to `false` only after the restaurant approves the content and the WhatsApp number is verified.

## Production SEO

Set `NEXT_PUBLIC_SITE_URL` to the final website address, for example:

```env
NEXT_PUBLIC_SITE_URL=https://your-restaurant-domain.com
```

Canonical URLs, the sitemap, and search indexing are enabled only when `demoMode` is `false` and the site URL is valid. Restaurant structured data also needs an approved phone number and address. The cart page stays out of search results.

## Ordering Limitations

This project is currently a frontend demo. It does not include an order database, admin dashboard, online payments, delivery-zone checks, or order tracking. Add and verify these services before using the site for automated production ordering.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |

## Project Structure

- `src/app/` - pages, metadata, sitemap, robots rules, and global styles
- `src/app/components/config/` - restaurant and WhatsApp settings
- `src/app/components/data/` - sample dishes, deals, gallery images, and reviews
- `src/app/components/layout/` - shared navigation, footer, and cart components
- `public/images/` - demo photos and social preview image
