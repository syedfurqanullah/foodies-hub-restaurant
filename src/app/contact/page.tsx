"use client";

import {
    Clock,
    Mail,
    MapPin,
    Phone,
    ArrowRight,
} from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Container from "@/app/components/ui/Container";

const contactDetails = [
    {
        icon: Phone,
        title: "Call Us",
        value: "Contact number to be added",
    },
    {
        icon: Mail,
        title: "Email Us",
        value: "Email address to be added",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "Restaurant address to be added",
    },
    {
        icon: Clock,
        title: "Opening Hours",
        value: "Business hours to be confirmed",
    },
];

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#100F0D] text-white">
                {/* Hero */}
                <section className="border-b border-white/10">
                    <Container size="wide">
                        <div className="py-20 text-center sm:py-28">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
                                Get in Touch
                            </p>

                            <h1 className="section-heading mt-6 text-5xl sm:text-6xl lg:text-7xl">
                                Let&apos;s Talk
                                <span className="block text-brand-accent">
                                    Good Food.
                                </span>
                            </h1>

                            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/60">
                                Have a question or planning a visit? We would love to hear
                                from you.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* Contact Details */}
                <section className="py-16 sm:py-20">
                    <Container size="wide">
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {contactDetails.map((detail) => {
                                const Icon = detail.icon;

                                return (
                                    <div
                                        key={detail.title}
                                        className="rounded-2xl border border-white/10 bg-[#171512] p-6 transition hover:-translate-y-1 hover:border-brand-accent/50"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                                            <Icon size={23} />
                                        </div>

                                        <h2 className="mt-5 text-lg font-semibold">
                                            {detail.title}
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-white/55">
                                            {detail.value}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                {/* Contact Form */}
                <section className="pb-20 sm:pb-28">
                    <Container size="wide">
                        <div className="grid gap-12 rounded-3xl border border-white/10 bg-[#171512] p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
                                    Send a Message
                                </p>

                                <h2 className="section-heading mt-5 text-4xl sm:text-5xl">
                                    We&apos;re Here to Help.
                                </h2>

                                <p className="mt-6 max-w-md leading-8 text-white/60">
                                    Whether you have a question, feedback, or a special request,
                                    send us a message. Our team would be happy to hear from you.
                                </p>
                            </div>

                            <form
                                className="space-y-5"
                                onSubmit={(event) => event.preventDefault()}
                            >
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
                                        className="w-full rounded-xl border border-white/10 bg-[#100F0D] px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-brand-accent"
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
                                        className="w-full rounded-xl border border-white/10 bg-[#100F0D] px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-brand-accent"
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
                                        placeholder="What is this about?"
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-[#100F0D] px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-brand-accent"
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
                                        placeholder="Write your message..."
                                        required
                                        className="w-full resize-none rounded-xl border border-white/10 bg-[#100F0D] px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-brand-accent"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-accent px-6 py-4 font-semibold text-white transition hover:bg-[#d76525]"
                                >
                                    Send Message
                                    <ArrowRight size={19} />
                                </button>

                                <p className="text-xs leading-5 text-white/40">
                                    Demo form: messages are not sent or stored yet.
                                </p>
                            </form>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}