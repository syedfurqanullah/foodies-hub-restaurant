import { Quote, Star } from "lucide-react";

import Container from "../ui/Container";
import { testimonials } from "../data/Testimonials";
import Reveal from "../ui/Reveal";

export default function TestimonialsSection() {
  return (
    <section className="section-padding border-t border-white/10 bg-[#211f1a] text-[#F5F0E8]">
      <Container size="wide">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-brand-accent/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent sm:text-xs">
            <Quote size={13} aria-hidden="true" /> Sample guest reviews
          </span>

          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">
            Words Worth Sharing
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Example review cards for this concept preview. Replace them with
            approved feedback from real guests before launch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.06}>
              <article data-card-3d className="group relative flex h-full min-h-64 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#171713] p-6 transition duration-300 hover:border-brand-accent/40 sm:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-brand-accent/[0.07] blur-2xl transition group-hover:bg-brand-accent/[0.12]"
                />

                <div className="relative flex items-center justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full border border-brand-accent/25 bg-brand-accent/10 text-brand-accent">
                    <Quote size={18} aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium text-white/55">
                    Sample
                  </span>
                </div>

                <p className="relative mt-6 flex-1 font-display text-lg leading-8 text-[#F4EFE5] sm:text-xl">
                  “{testimonial.review}”
                </p>

                <div className="relative mt-6 flex items-end justify-between gap-3 border-t border-white/10 pt-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-xs font-semibold text-brand-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-white/90">
                        {testimonial.name}
                      </h3>
                      <p className="mt-1 text-xs text-white/45">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex shrink-0 gap-0.5 text-brand-accent"
                    aria-label={`${testimonial.rating} out of 5 sample stars`}
                  >
                    {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={13}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-center text-xs text-white/40">
          All names, quotes, and ratings shown here are illustrative demo content, not verified reviews.
        </p>
      </Container>
    </section>
  );
}
