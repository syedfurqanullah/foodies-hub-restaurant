# Foodies Hub — Restaurant Website

A modern, responsive restaurant website demo built with **Next.js, React, TypeScript, and Tailwind CSS**. Foodies Hub showcases a polished restaurant experience with menu browsing, special deals, a food gallery, and an interactive shopping cart.

## Live Demo

[View Live Website](https://foodies-hub-restaurant.vercel.app/)

## Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- **Restaurant Pages** — Home, Menu, Deals, About, Gallery, Contact, and Cart.
- **Menu Browsing** — Explore food items with search and category filtering.
- **Special Deals** — Browse featured restaurant offers and combo deals.
- **Interactive Cart** — Add items, update quantities, and remove products.
- **Cart Persistence** — Cart data is saved in the browser using LocalStorage.
- **Order Preview** — Review order details through a local checkout preview.
- **Contact & Reservation UI** — Forms demonstrate the intended user experience.
- **SEO Setup** — Metadata, sitemap, robots rules, and social preview support.
- **Smooth UI Details** — Subtle animations with reduced-motion support.

## Tech Stack

- **Framework:** Next.js
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Storage:** Browser LocalStorage
- **Deployment:** Vercel

## Getting Started

Clone the repository:

```bash
git clone https://github.com/syedfurqanullah/foodies-hub-restaurant.git
```

Navigate to the project directory:

```bash
cd foodies-hub-restaurant
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
└── app/
    ├── components/
    │   ├── config/
    │   ├── context/
    │   ├── data/
    │   ├── layout/
    │   ├── sections/
    │   ├── types/
    │   ├── ui/
    │   └── utils/
    ├── about/
    ├── cart/
    ├── contact/
    ├── deals/
    ├── gallery/
    ├── menu/
    ├── globals.css
    ├── layout.tsx
    ├── page.tsx
    ├── robots.ts
    └── sitemap.ts

public/
└── images/
```

## Demo Notice

Foodies Hub is currently a **frontend demonstration project**. Restaurant details, menu items, prices, deals, images, and reviews are sample content.

The cart and checkout flow are for demonstration purposes only. Orders are not submitted to a restaurant or stored on a server. Contact and reservation forms also display a preview instead of sending real submissions.

The project does not currently include a backend database, admin dashboard, online payment integration, delivery-zone validation, or order tracking.

## Customization

The demo can be adapted for a real restaurant by updating its approved business information, menu, pricing, images, contact details, and opening hours.

All restaurant information should be verified before using the website in a production environment.

## Author

**Furqan**

- [GitHub](https://github.com/syedfurqanullah)
- [Portfolio](https://syedfurqanullah.netlify.app/)
- [LinkedIn](https://www.linkedin.com/in/furqan-ullah/)