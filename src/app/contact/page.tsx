
"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../components/ui/Container";
import { restaurantConfig } from "../components/config/restaurant";
import Reveal from "../components/ui/Reveal";
import ReservationPreview from "../components/sections/ReservationPreview";

const contactDetails = [
  {
    title: "Call Us",
    value: restaurantConfig.demoMode ? `Demo only: ${restaurantConfig.contact.phone} (not connected)` : restaurantConfig.contact.phone || "Contact to be confirmed",
    link: !restaurantConfig.demoMode && restaurantConfig.contact.phone
      ? `tel:${restaurantConfig.contact.phone.replace(/\s/g, "")}`
      : null,
    description: restaurantConfig.demoMode ? "Demo detail; no call will be placed." : "Call the restaurant.",
  },
  {
    title: "Email Us",
    value: restaurantConfig.demoMode ? `${restaurantConfig.contact.email} (demo only)` : restaurantConfig.contact.email || "Contact to be confirmed",
    link: !restaurantConfig.demoMode && restaurantConfig.contact.email
      ? `mailto:${restaurantConfig.contact.email}`
      : null,
    description: restaurantConfig.demoMode ? "Demo detail; no email will be sent." : "Email the restaurant.",
  },
  {
    title: "Visit Us",
    value: restaurantConfig.demoMode ? `${restaurantConfig.contact.address} - illustrative area only` : restaurantConfig.contact.address || "Address to be confirmed",
    link: !restaurantConfig.demoMode && restaurantConfig.contact.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantConfig.contact.address)}` : null,
    description: restaurantConfig.demoMode ? "Illustrative area only; this is not a real restaurant location." : "Get directions.",
  },
];

export default function ContactPage() {
  const [formNotice, setFormNotice] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get("subject") ?? "Website inquiry");
    const body = [
      `Name: ${formData.get("name") ?? ""}`,
      `Email: ${formData.get("email") ?? ""}`,
      "",
      String(formData.get("message") ?? ""),
    ].join("\n");

    if (restaurantConfig.demoMode || !restaurantConfig.contact.email) {
      setFormNotice("Demo only: your message was not sent. A restaurant email address will be connected after approval.");
      return;
    }
    window.location.href = `mailto:${restaurantConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <main className="bg-[#111111] text-[#F5F0E8]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#B89A62]/10 blur-3xl" />

          <Container>
            <div className="relative py-24 text-center md:py-32">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A62]">
                Get In Touch · Demo details
              </span>

              <h1 className="mx-auto mt-5 max-w-3xl font-serif text-[clamp(2.25rem,9vw,3.75rem)] leading-tight md:text-7xl">
                We&apos;d Love to <span className="text-[#B89A62]">Hear</span>{" "}
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
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B89A62]">
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
                  {contactDetails.map((item, index) => {
                    const Icon = item.title === "Call Us" ? Phone : item.title === "Email Us" ? Mail : MapPin;
                    const content = (
                      <>
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B89A62]/10 text-[#B89A62]">
                          <Icon size={21} aria-hidden="true" />
                        </span>
                        <span className="min-w-0 [overflow-wrap:anywhere]">
                          <span className="block text-sm font-semibold">{item.title}</span>
                          <span className="mt-1 block text-sm text-[#B89A62]">{item.value}</span>
                          <span className="mt-1 block text-xs text-white/40">{item.description}</span>
                        </span>
                      </>
                    );

                    return (
                      <Reveal key={item.title} delay={index * 0.06}>
                        {item.link ? (
                          <a href={item.link} target={item.title === "Visit Us" ? "_blank" : undefined} rel={item.title === "Visit Us" ? "noreferrer" : undefined} className="group flex min-h-18 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#B89A62]/50 hover:bg-white/[0.06]">
                            {content}
                          </a>
                        ) : (
                          <div className="flex min-h-18 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                            {content}
                          </div>
                        )}
                      </Reveal>
                    );
                  })}
                </div>
              </div>

              {/* Contact form */}
              <Reveal className="rounded-xl border border-white/10 bg-[#1B1B1B] p-5 sm:p-7 lg:p-8" delay={0.12}>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B89A62]">
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
                      <label htmlFor="contact-name" className="mb-2 block text-sm text-white/70">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        required
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#B89A62]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-sm text-white/70">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        required
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#B89A62]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="mb-2 block text-sm text-white/70">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      required
                      type="text"
                      placeholder="What is this about?"
                      className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#B89A62]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-sm text-white/70">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#B89A62]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#B89A62] px-6 py-4 text-sm font-bold text-[#171713] transition hover:bg-[#9c7d48]"
                  >
                    Send Message →
                  </button>

                  {formNotice && <p role="status" className="rounded-lg border border-[#B89A62]/25 bg-[#B89A62]/10 p-3 text-center text-xs leading-5 text-[#DCC99E]">{formNotice}</p>}
                  <p className="text-center text-xs text-white/45">
                    {!restaurantConfig.demoMode && restaurantConfig.contact.email
                      ? "This opens your email app with the message prepared. You will need to send it there."
                      : "Demo only: submitting shows a preview confirmation. No message is sent or stored."}
                  </p>
                </form>
              </Reveal>
            </div>
          </Container>
        </section>

        <ReservationPreview />

        {/* Illustrative Karachi area */}
        <section id="location" className="border-t border-white/10 py-16">
          <Container>
            <div className="rounded-xl border border-white/10 bg-[#1B1B1B] p-6 text-center sm:p-8 lg:p-10">
              <MapPin size={28} className="mx-auto text-[#B89A62]" aria-hidden="true" />
              <h2 className="mt-4 font-serif text-3xl">
                Find Our Location
              </h2>
              <p className="mt-3 text-sm text-white/50">
                {restaurantConfig.contact.address || "Location added after restaurant approval"}
              </p>
              <p className="mt-2 text-xs leading-5 text-white/40">Illustrative area only; this map shows the general Clifton area in Karachi, not a real restaurant location.</p>
              <div className="relative mx-auto mt-6 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-[#111]">
                <iframe
                  title="Illustrative map of Clifton, Karachi"
                  src="https://maps.google.com/maps?q=Clifton%2C%20Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[0.45]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
