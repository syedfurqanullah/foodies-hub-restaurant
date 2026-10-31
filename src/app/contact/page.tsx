
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Container from "../components/ui/Container";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#100F0D] text-white">
        {/* Hero Section */}
        <section className="border-b border-white/10 bg-[#171512] py-20 sm:py-24">
          <Container size="wide">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
              Get In Touch
            </span>

            <h1 className="section-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
              We'd Love to
              <span className="block text-brand-accent">
                Hear From You.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
              Have a question, feedback, or special request?
              Get in touch with our team.
            </p>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20">
          <Container size="wide">
            <div className="grid gap-12 lg:grid-cols-2">

              {/* Contact Information */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                  Contact Information
                </span>

                <h2 className="section-heading mt-4 text-3xl sm:text-4xl">
                  Let's Start a Conversation
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                  We're here to help. Reach out to us using the
                  contact details below.
                </p>

                <div className="mt-10 space-y-7">

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-brand-accent/10 p-3 text-brand-accent">
                      <Phone size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        Phone Number
                      </h3>
                      <p className="mt-2 text-sm text-white/50">
                        +92 XXX XXXXXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-brand-accent/10 p-3 text-brand-accent">
                      <Mail size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        Email Address
                      </h3>
                      <p className="mt-2 text-sm text-white/50">
                        hello@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-brand-accent/10 p-3 text-brand-accent">
                      <MapPin size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        Our Location
                      </h3>
                      <p className="mt-2 text-sm text-white/50">
                        Restaurant address to be confirmed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-brand-accent/10 p-3 text-brand-accent">
                      <Clock size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        Opening Hours
                      </h3>
                      <p className="mt-2 text-sm text-white/50">
                        Opening hours to be confirmed
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl border border-white/10 bg-[#171512] p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-[#F4EFE5]">
                  Send Us a Message
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Fill out the form and let us know how we can help.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-lg border border-white/10 bg-[#100F0D] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-brand-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-lg border border-white/10 bg-[#100F0D] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-brand-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Enter message subject"
                      required
                      className="w-full rounded-lg border border-white/10 bg-[#100F0D] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-brand-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      required
                      className="w-full resize-none rounded-lg border border-white/10 bg-[#100F0D] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-brand-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    Send Message
                    <Send size={17} />
                  </button>

                  {isSubmitted && (
                    <p className="text-center text-sm text-green-400">
                      Demo form submitted successfully. No message was sent.
                    </p>
                  )}
                </form>
              </div>

            </div>
          </Container>
        </section>

        {/* Back to Menu */}
        <section className="border-t border-white/10 py-12">
          <Container size="wide">
            <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Ready to explore our menu?
                </h2>
                <p className="mt-2 text-sm text-white/50">
                  Discover your next favorite meal.
                </p>
              </div>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Explore Menu
                <ArrowRight size={17} />
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
