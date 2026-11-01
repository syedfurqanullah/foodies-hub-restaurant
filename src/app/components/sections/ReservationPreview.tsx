"use client";

import { useState, type FormEvent } from "react";
import { CalendarDays } from "lucide-react";

export default function ReservationPreview() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reservation" className="border-t border-white/10 py-16 md:py-20">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#1B1B1B] p-5 sm:p-7">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#B89A62]/10 text-[#B89A62]"><CalendarDays size={22} /></span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B89A62]">Table request · Demo</span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Reserve a Table</h2>
            <p className="mt-2 text-sm leading-6 text-white/50">Choose a date and time to preview the reservation experience.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-white/70">Your name<input required name="name" autoComplete="name" className="mt-2 min-h-11 w-full rounded-lg border border-white/10 bg-[#111] px-3 text-white outline-none focus:border-[#B89A62]" placeholder="Name for the table" /></label>
          <label className="text-sm text-white/70">Guests<select name="guests" defaultValue="2" className="mt-2 min-h-11 w-full rounded-lg border border-white/10 bg-[#111] px-3 text-white outline-none focus:border-[#B89A62]">{[1, 2, 3, 4, 5, 6, 7, 8].map((count) => <option key={count} value={count}>{count} {count === 1 ? "guest" : "guests"}</option>)}</select></label>
          <label className="text-sm text-white/70">Date<input required name="date" type="date" className="mt-2 min-h-11 w-full rounded-lg border border-white/10 bg-[#111] px-3 text-white outline-none focus:border-[#B89A62]" /></label>
          <label className="text-sm text-white/70">Time<input required name="time" type="time" className="mt-2 min-h-11 w-full rounded-lg border border-white/10 bg-[#111] px-3 text-white outline-none focus:border-[#B89A62]" /></label>
          <button type="submit" className="min-h-12 rounded-lg bg-[#B89A62] px-5 py-3 text-sm font-bold text-[#171713] transition hover:bg-[#9c7d48] sm:col-span-2">Request a Table</button>
        </form>
        {submitted && <p role="status" className="mt-4 rounded-lg border border-[#B89A62]/25 bg-[#B89A62]/10 p-3 text-sm leading-6 text-[#DCC99E]">Demo only: this request was not sent. No table is reserved until the restaurant confirms it.</p>}
        <p className="mt-3 text-center text-xs leading-5 text-white/40">Preview only. Your details are not sent or stored.</p>
      </div>
    </section>
  );
}
