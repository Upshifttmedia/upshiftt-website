"use client";

import { useState } from "react";

const TRADES = [
  "Tree Service",
  "Landscaping",
  "Fencing",
  "Plumbing",
  "Roofing",
  "HVAC",
  "General Contractor",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `New inquiry from ${get("business") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Business: ${get("business")}`,
      `Type of business: ${get("trade")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:joel@upshiftt.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white text-base placeholder:text-white/25 focus:outline-none focus:border-[#4DD9C0]";
  const label = "block text-white/40 text-xs uppercase tracking-widest mb-2 font-[family-name:var(--font-syne)]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="business" className={label}>Business name</label>
          <input id="business" name="business" autoComplete="organization" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="trade" className={label}>Type of business</label>
        <select id="trade" name="trade" className={field} defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {TRADES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>How can we help?</label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-4 bg-[#4DD9C0] text-[#0A0A0A] font-bold text-base rounded-full hover:bg-white transition-all duration-300"
      >
        Send Message
      </button>
      {sent && (
        <p className="text-white/50 text-sm text-center">
          Your email app should open with your message ready to send. If it
          didn&apos;t, email joel@upshiftt.com directly.
        </p>
      )}
    </form>
  );
}
