"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";

const CALENDLY = "https://calendly.com/joel-upshiftt/30min";

export default function HomeCTA() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1512] via-[#0A0A0A] to-[#0A0A0A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#4DD9C0]/6 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <FadeIn className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#4DD9C0]" />
          <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
            Get Started
          </span>
          <span className="w-8 h-px bg-[#4DD9C0]" />
        </FadeIn>

        <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
          <AnimatedText text="Ready for a Website That Works as Hard as You Do?" delay={0.1} />
        </h2>

        <FadeIn delay={0.3}>
          <p className="text-white/55 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Book a free 20-minute demo. We&apos;ll show you a new website and AI
            assistant built around your business.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="flex flex-col items-center gap-5">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#4DD9C0] text-[#0A0A0A] font-bold text-lg rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.02]"
            >
              Book Your Free Demo
            </a>
            <p className="text-white/35 text-sm">
              Or{" "}
              <a
                href="https://redwood-ridge-care.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white underline underline-offset-4 transition-colors"
              >
                see a live demo site
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
