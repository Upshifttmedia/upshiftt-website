"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";

const CALENDLY = "https://calendly.com/joel-upshiftt/30min";

const perks = [
  {
    title: "Website setup fee waived",
    description: "Your new website is built as part of your monthly plan — no upfront build cost.",
  },
  {
    title: "Locked-in founding pricing",
    description: "Your monthly rate stays the same for as long as you're with us.",
  },
  {
    title: "Built and managed by Joel",
    description: "You work directly with the founder — no call centers, no handoffs.",
  },
];

const industries = [
  "Tree Service",
  "Landscaping",
  "Fencing",
  "Plumbing",
  "Roofing",
  "HVAC",
  "Contractors",
];

export default function SocialProof() {
  return (
    <section className="relative bg-[#0D0D0D] py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <FadeIn className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#4DD9C0]" />
          <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
            Founding Client Offer
          </span>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-white leading-tight">
              <AnimatedText text="Now accepting 3 founding clients in Santa Cruz County." delay={0.1} />
            </h2>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed pt-2">
              Upshiftt is local to Scotts Valley and built for the businesses
              that keep our communities running. Our first clients get a new
              website and AI assistant at founding rates — and a direct line to
              the person building it.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {industries.map((name) => (
                <span
                  key={name}
                  className="text-xs text-white/60 border border-white/10 rounded-full px-3 py-1.5"
                >
                  {name}
                </span>
              ))}
            </div>
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

        {/* Perk cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {perks.map((p, i) => (
            <FadeIn key={i} delay={0.12 * i}>
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-7 h-full">
                <span className="text-[#4DD9C0] font-bold text-lg">✓</span>
                <p className="font-[family-name:var(--font-syne)] font-semibold text-white text-lg mt-3 mb-2">
                  {p.title}
                </p>
                <p className="text-white/55 text-sm leading-relaxed">{p.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex justify-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-[#4DD9C0] text-[#0A0A0A] font-bold text-base rounded-full hover:bg-white transition-all duration-300"
            >
              Claim a Founding Spot
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
