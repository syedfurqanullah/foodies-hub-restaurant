export interface Testimonial {
  id: string;
  name: string;
  review: string;
}

// Placeholder copy for the layout; replace it with approved guest reviews before launch.
export const testimonials: Testimonial[] = [
  {
    id: "review-one",
    name: "Ayesha K.",
    review: "The burger was juicy, and the fries were still hot when they reached the table. I would come back for the pasta.",
  },
  {
    id: "review-two",
    name: "Hamza R.",
    review: "We split the pizza between four of us. The crust had a nice crunch, and there was plenty to go around.",
  },
  {
    id: "review-three",
    name: "Sana M.",
    review: "The mixed grill was a good choice for the table. The chicken was tender, and the sauces added a lot.",
  },
  {
    id: "review-four",
    name: "Bilal A.",
    review: "Stopped in after work for pasta and mint lemonade. Both hit the spot, and the service was quick.",
  },
];
