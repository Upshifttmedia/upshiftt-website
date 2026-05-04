"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";

const testimonials = [
  {
    quote:
      "I was losing jobs every week to missed calls. Upshiftt completely changed that — the phone gets answered every time and I get a text immediately. It's been a game changer.",
    name: "Mike R.",
    business: "Plumbing Contractor, Santa Cruz County",
  },
  {
    quote:
      "My Google reviews went from 12 to 47 in two months. I didn't do anything differently — Upshiftt just handles it automatically after every job.",
    name: "Sarah T.",
    business: "Landscaping & Lawn Care, Scotts Valley",
  },
  {
    quote:
      "As a solo contractor I can't always answer my phone. Knowing there's a real person picking up for me gives my customers confidence and keeps my schedule full.",
    name: "Dave M.",
    business: "General Contractor, Aptos",
  },
];

export default function SocialProof() {
  return (
    <section className="relative bg-[#0D0D0D] py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <FadeIn className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#4DD9C0]" />
          <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
            Trusted by Local Businesses
          </span>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-white leading-tight">
              <AnimatedText text="Built for the businesses that keep our communities running." delay={0.1} />
            </h2>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-white/50 text-lg leading-relaxed pt-2">
              We work with plumbers, landscapers, contractors, and service
              professionals across the Central Coast. Our system is built around
              how local businesses actually operate.
            </p>
          </FadeIn>
        </div>

        {/* Local scene image */}
        <FadeIn className="mb-12">
          <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden border border-white/5">
            <Image
              src="/local-scene.jpg"
              alt="Local service businesses on the Central Coast"
              fill
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 via-transparent to-[#0D0D0D]/60" />
          </div>
        </FadeIn>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={0.12 * i}>
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-7 flex flex-col justify-between h-full">
                <blockquote className="text-white/60 text-base leading-relaxed mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-white/5 pt-5">
                  <p className="font-[family-name:var(--font-syne)] font-semibold text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-white/35 text-xs mt-1">{t.business}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
