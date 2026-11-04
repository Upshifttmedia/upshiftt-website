"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";

const stats = [
  {
    value: "1",
    label: "job marked complete",
  },
  {
    value: "1",
    label: "friendly message with your Google review link",
  },
  {
    value: "0",
    label: "awkward asks or chasing customers",
  },
];

export default function ReputationSpotlight() {
  return (
    <section className="relative bg-[#111111] py-24 md:py-36 overflow-hidden">
      {/* Subtle teal glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#4DD9C0]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#4DD9C0]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <FadeIn className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#4DD9C0]" />
          <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
            Reputation
          </span>
        </FadeIn>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column — content */}
          <div>
            {/* Headline */}
            <div className="mb-8">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                <AnimatedText text="More Reviews." delay={0.05} />
                <br />
                <AnimatedText text="More Calls." delay={0.15} />
                <br />
                <AnimatedText text="More Jobs." delay={0.25} />
              </h2>
            </div>

            {/* Body */}
            <FadeIn delay={0.2} className="mb-12">
              <p className="text-white/60 text-lg leading-relaxed">
                Reviews are one of the first things customers check before they
                call. After each completed job, your customer gets a short,
                friendly message with a direct link to your Google listing — so
                happy customers actually leave the review.
              </p>
            </FadeIn>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-12">
              {stats.map((stat, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="bg-[#111111] px-5 py-8 flex flex-col gap-2">
                    <span className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-[#4DD9C0] leading-none">
                      {stat.value}
                    </span>
                    <span className="text-white/45 text-xs leading-snug">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Mock Google review widget */}
            <FadeIn delay={0.2}>
              <div>
                {/* Sample review request message */}
                <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-[family-name:var(--font-syne)]">
                  Example message
                </p>
                <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-7">
                  <p className="text-white/75 text-base leading-relaxed">
                    Hi Sarah, thanks for choosing Redwood Ridge Tree Care today!
                    If you were happy with the work, would you mind leaving us a
                    quick Google review? It really helps a small local business.
                  </p>
                  <p className="text-[#4DD9C0] text-sm mt-4 font-semibold">
                    ★ Leave a review →
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[#4DD9C0] font-semibold text-sm hover:gap-3 transition-all duration-200 group"
                  >
                    See how it works
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column — image card */}
          <FadeIn delay={0.15} direction="left">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-teal-500/20">
              <Image
                src="/reputation.jpg"
                alt="Customer leaving a 5-star Google review"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
