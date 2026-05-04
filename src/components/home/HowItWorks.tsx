"use client";

import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";

const steps = [
  {
    color: "#4DD9C0",
    label: "Someone calls your number",
    badge: "24/7",
    description:
      "Day or night, every call gets answered instantly. No voicemail. No missed opportunities.",
  },
  {
    color: "#60A5FA",
    label: "Your receptionist answers",
    badge: "Live Voice",
    description:
      "A warm, professional receptionist greets the caller, understands their need, and captures their name, number, and job details.",
  },
  {
    color: "#F59E0B",
    label: "Caller gets a follow-up text",
    badge: "Instant SMS",
    description:
      "The caller receives a confirmation text before they hang up — so they feel taken care of immediately.",
  },
  {
    color: "#A855F7",
    label: "You get notified instantly",
    badge: "Owner Alert",
    description:
      "You receive a text and email with the caller's name, number, and what they need — while you're still on the job.",
  },
  {
    color: "#F87171",
    label: "Your website captures visitors too",
    badge: "Web Chat",
    description:
      "A smart chat assistant answers questions and captures contact info from every website visitor around the clock.",
  },
  {
    color: "#4ADE80",
    label: "Reviews build automatically",
    badge: "Auto Review",
    description:
      "After every completed job, an automated message asks for a Google review — building your reputation without any extra effort.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0D0D0D] py-24 md:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#4DD9C0]/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <FadeIn className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#4DD9C0]" />
          <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
            The System
          </span>
        </FadeIn>

        <div className="mb-16">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            <AnimatedText text="How Upshiftt Works" delay={0.1} />
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={0.1 * i} direction="up">
              <div className="group relative bg-white/[0.03] border border-white/5 rounded-2xl p-7 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-500 h-full">
                {/* Step number */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-3 h-3 rounded-full mt-1 shrink-0"
                    style={{ backgroundColor: step.color, boxShadow: `0 0 16px ${step.color}60` }}
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full font-[family-name:var(--font-syne)]"
                    style={{ color: step.color, backgroundColor: `${step.color}15` }}
                  >
                    {step.badge}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-white mb-3 leading-snug">
                  {step.label}
                </h3>
                <p className="text-white/80 leading-relaxed" style={{ fontSize: "15px" }}>
                  {step.description}
                </p>

                {/* Step index */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-0" />
                <span className="absolute bottom-5 right-6 font-[family-name:var(--font-syne)] text-5xl font-bold text-white/3 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
