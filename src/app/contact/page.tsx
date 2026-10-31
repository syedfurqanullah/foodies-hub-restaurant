
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Container from "../components/ui/Container";

const contactDetails = [
  {
    icon: "☎",
    title: "Call Us",
    value: "+92 300 1234567",
    link: "tel:+923001234567",
    description: "We're happy to assist you.",
  },
  {
    icon: "✉",
    title: "Email Us",
    value: "hello@foodieshub.com",
    link: "mailto:hello@foodieshub.com",
    description: "Send us your questions anytime.",
  },
  {
    icon: "⌖",
    title: "Visit Us",
    value: "Your Restaurant Address",
    link: "#location",
    description: "We look forward to welcoming you.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#111111] text-[#F5F0E8]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E87532]/10 blur-3xl" />

          <Container>
            <div className="relative py-24 text-center md:py-32">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E87532]">
                Get In Touch
              </span>

              <h1 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
                We&apos;d Love to <span className="text-[#E87532]">Hear</span>{" "}
                From You
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                Have a question, feedback, or want to make an inquiry?
                We&apos;re always happy to connect with you.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact content */}
        <section className="py-20 md:py-24">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              {/* Left information */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E87532]">
                  Contact Information
                </span>

                <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                  Let&apos;s Start a Conversation
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                  Whether you have a question about our menu, an order, or
                  anything else, our team is ready to help.
                </p>

                <div className="mt-10 space-y-4">
                  {contactDetails.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#E87532]/50 hover:bg-white/[0.06]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E87532]/10 text-2xl text-[#E87532]">
                        {item.icon}
                      </span>

                      <span>
                        <span className="block text-sm font-semibold">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm text-[#E87532]">
                          {item.value}
                        </span>
                        <span className="mt-1 block text-xs text-white/40">
                          {item.description}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact form */}
              <div className="rounded-3xl border border-white/10 bg-[#1B1B1B] p-6 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E87532]">
                  Send a Message
                </span>

                <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                  How Can We Help?
                </h2>

                <p className="mt-3 text-sm text-white/50">
                  Fill out the form and let us know what&apos;s on your mind.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#E87532]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#E87532]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="What is this about?"
                      className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#E87532]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#E87532]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#E87532] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#d96325]"
                  >
                    Send Message →
                  </button>

                  {submitted && (
                    <p className="text-center text-sm text-[#E87532]">
                      Demo form submitted. Connect a backend to receive messages.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </Container>
        </section>

        {/* Location placeholder */}
        <section id="location" className="border-t border-white/10 py-16">
          <Container>
            <div className="rounded-3xl border border-white/10 bg-[#1B1B1B] p-8 text-center md:p-14">
              <span className="text-3xl text-[#E87532]">⌖</span>
              <h2 className="mt-4 font-serif text-3xl">
                Find Our Location
              </h2>
              <p className="mt-3 text-sm text-white/50">
                Our restaurant address and map will be added here.
              </p>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
