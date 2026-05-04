"use client";

import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";

const features = [
  {
    icon: "📞",
    title: "24/7 Call Answering",
    description: "Never miss a call again, day or night. Every call answered by a live, professional receptionist.",
  },
  {
    icon: "💬",
    title: "Instant SMS Follow-Up",
    description: "Every caller gets a text within seconds of hanging up — so they know you've got them covered.",
  },
  {
    icon: "🔔",
    title: "Owner Notifications",
    description: "Real-time alerts to your phone and email with caller details so you can follow up fast.",
  },
  {
    icon: "🤖",
    title: "Website Chat Assistant",
    description: "Capture leads from your site 24/7 with a smart chat assistant that never sleeps.",
  },
  {
    icon: "⭐",
    title: "Google Review Automation",
    description: "Build your reputation on autopilot — automated review requests after every completed job.",
  },
  {
    icon: "📊",
    title: "Lead Dashboard",
    description: "Every lead logged and organized in one place. Nothing falls through the cracks.",
  },
];

export default function WhatIsIncluded() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40 overflow-hidden">
      {/* Teal glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4DD9C0]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <FadeIn className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#4DD9C0]" />
          <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
            What&apos;s Included
          </span>
        </FadeIn>

        <div className="mb-16 max-w-3xl">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            <AnimatedText text="Everything You Need." delay={0.1} />
            <br />
            <AnimatedText text="Nothing You Don't." delay={0.25} />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={0.08 * i}>
              <div className="group bg-white/[0.03] border border-white/5 rounded-2xl p-7 hover:border-[#4DD9C0]/20 hover:bg-white/[0.05] transition-all duration-400 h-full">
                <div className="text-3xl mb-5">{feature.icon}</div>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-white text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
