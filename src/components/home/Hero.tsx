"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

const CALENDLY = "https://calendly.com/joel-upshiftt/30min";
const DEMO_SITE = "https://redwood-ridge-care.base44.app";

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
      {/* Animated background layer */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {/* Base photo */}
        <Image
          src="/hero-bg.jpg"
          alt="Local service professional at work"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 50%, rgba(10,10,10,0.85) 100%)",
            zIndex: 1,
          }}
        />

        {/* Radial teal glow — top center */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(77,217,192,0.12) 0%, transparent 70%)",
          }}
        />

        {/* SVG dot grid */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(77,217,192,0.08)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>

        {/* Teal orb — top left */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(77,217,192,0.10)",
            filter: "blur(120px)",
          }}
        />

        {/* Purple orb — bottom right */}
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.08)",
            filter: "blur(120px)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full"
      >
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              Websites + 24/7 AI Assistant
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-7xl lg:text-[88px] leading-[1.0] tracking-tight text-white mb-8">
            <AnimatedText text="A Website That" delay={0.2} />
            <br />
            <AnimatedText text="Books Jobs While You Work." delay={0.4} />
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
            className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          >
            Upshiftt builds modern websites for Santa Cruz County service
            businesses — with a 24/7 AI assistant that answers customers,
            captures leads, and books estimates while you&apos;re on the job.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 1.0 }}
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
              href={DEMO_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/15 text-white font-medium text-base rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#4DD9C0] animate-pulse" />
              See a Demo Site
            </a>
          </motion.div>
        </div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 1.4 }}
          className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4"
        >
          {[
            { value: "24/7", label: "AI Assistant" },
            { value: "Mobile", label: "First Websites" },
            { value: "Local", label: "Scotts Valley Based" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 1.5 + i * 0.15 }}
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
