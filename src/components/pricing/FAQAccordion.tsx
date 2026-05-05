"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    q: "Is there a contract?",
    a: "No contracts, ever. Month-to-month only. Cancel anytime with no fees or penalties.",
  },
  {
    q: "How quickly can I get set up?",
    a: "Most clients are fully live within 48–72 hours of signing up. Joel calls you personally within 24 hours to kick things off.",
  },
  {
    q: "What if I want to change plans?",
    a: "You can upgrade or downgrade at any time. We'll adjust your billing at the next cycle.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None at all. We handle everything — setup, configuration, and ongoing management. You just run your business.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-white mb-12 text-center">
            Common Questions
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.07 * i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left bg-[#111111] border border-white/5 rounded-2xl px-7 py-6 hover:border-white/10 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-[family-name:var(--font-syne)] font-semibold text-white text-base">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-white/10 text-[#4DD9C0] transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <line x1="6" y1="1" x2="6" y2="11" />
                      <line x1="1" y1="6" x2="11" y2="6" />
                    </svg>
                  </span>
                </div>
                {open === i && (
                  <p className="text-white/55 text-[15px] leading-relaxed mt-4 pr-10">
                    {faq.a}
                  </p>
                )}
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
