import { Quote } from "lucide-react";

import Container from "../ui/Container";
import { testimonials } from "../data/reviews";
import Reveal from "../ui/Reveal";

export default function TestimonialsSection() {
  return (
    <section className="section-padding border-t border-white/10 bg-[#211f1a] text-[#F5F0E8]">
      <Container size="wide">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-brand-accent/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent sm:text-xs">
            <Quote size={13} aria-hidden="true" /> Guest feedback
          </span>

          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">
            Guest Reviews
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            A few notes on the dishes and the time around the table.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.04}>
              <article
                data-card-hover
                className="group relative flex h-full min-h-52 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#171713] p-4 transition duration-300 hover:border-brand-accent/40 sm:p-5"
              >
                <Quote
                  size={20}
                  aria-hidden="true"
                  className="text-brand-accent/80"
                />
                <p className="mt-4 flex-1 text-sm leading-6 text-[#F4EFE5] sm:text-base sm:leading-7">
                  {testimonial.review}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span
                    aria-hidden="true"
                    className="flex size-9 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-semibold text-brand-accent"
                  >
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white/90">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-xs text-white/40">Sample guest</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-white/40">
          Names and comments are examples for this preview, not verified reviews.
        </p>
      </Container>
    </section>
  );
}
