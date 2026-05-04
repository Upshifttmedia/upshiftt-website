"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

const CALENDLY = "https://calendly.com/joel-upshiftt/30min";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0D1512] to-[#0A0A0A]" />
        {/* Teal glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#4DD9C0]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-[#4DD9C0]/3 blur-[100px]" />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#4DD9C0 1px, transparent 1px), linear-gradient(90deg, #4DD9C0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full"
      >
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              24/7 Receptionist & Automation
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-7xl lg:text-[88px] leading-[1.0] tracking-tight text-white mb-8">
            <AnimatedText text="Every Call Answered." delay={0.2} />
            <br />
            <AnimatedText text="Every Lead Captured." delay={0.4} />
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          >
            Upshiftt keeps your business running 24/7 — so you never lose
            another job to voicemail.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#4DD9C0] text-[#0A0A0A] font-semibold text-base rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.02]"
            >
              Book a Free Demo
            </a>
            <a
              href="tel:+18313182960"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/15 text-white font-medium text-base rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#4DD9C0] animate-pulse" />
              Hear It Live
            </a>
          </motion.div>
        </div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4"
        >
          {[
            { value: "24/7", label: "Always On" },
            { value: "< 3s", label: "Answer Time" },
            { value: "100%", label: "Lead Capture" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.5 + i * 0.15 }}
              className="bg-white/5 border border-white/8 rounded-2xl px-6 py-4 text-right backdrop-blur-sm"
            >
              <div className="text-3xl font-[family-name:var(--font-syne)] font-bold text-[#4DD9C0]">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs mt-1 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  );
}
