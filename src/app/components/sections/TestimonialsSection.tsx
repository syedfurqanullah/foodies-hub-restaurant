
import { Star, Quote } from "lucide-react";

import Container from "../ui/Container";
import { testimonials } from "../data/Testimonials";

export default function TestimonialsSection() {
    return (
        <section className="section-padding bg-[#100d0a] text-[#F5F0E8]">
            <Container size="wide">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
                        Customer Feedback
                    </span>

                    <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">
                        What People Say
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                        Every meal is an opportunity to create a memorable
                        experience. Here is what our sample customers say.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.id}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-brand-accent/40 hover:bg-white/[0.06]"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <Quote
                                    size={32}
                                    className="text-brand-accent"
                                />

                                <div className="flex gap-1">
                                    {Array.from(
                                        { length: testimonial.rating },
                                        (_, index) => (
                                            <Star
                                                key={index}
                                                size={16}
                                                className="fill-brand-accent text-brand-accent"
                                            />
                                        )
                                    )}
                                </div>
                            </div>

                            <p className="min-h-28 text-sm leading-7 text-white/75">
                                "{testimonial.review}"
                            </p>

                            <div className="mt-7 border-t border-white/10 pt-5">
                                <h3 className="font-semibold text-white">
                                    {testimonial.name}
                                </h3>

                                <p className="mt-1 text-xs text-brand-accent">
                                    {testimonial.role}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <p className="mt-8 text-center text-xs text-white/40">
                    Demo testimonials — sample content, not verified customer reviews.
                </p>

            </Container>
        </section>
    );
}
