export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "customer-1",
    name: "Sample Guest 01",
    role: "Illustrative review copy",
    review:
      "The food was delicious and beautifully prepared. A wonderful experience from start to finish.",
    rating: 5,
  },
  {
    id: "customer-2",
    name: "Sample Guest 02",
    role: "Illustrative review copy",
    review:
      "Loved the flavors and the overall experience. Definitely a place worth exploring.",
    rating: 5,
  },
  {
    id: "customer-3",
    name: "Sample Guest 03",
    role: "Illustrative review copy",
    review:
      "Great presentation, rich flavors, and a lovely dining experience. Looking forward to trying more.",
    rating: 5,
  },
];
