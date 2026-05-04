"use client";

import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";

const stats = [
  { value: "62%", label: "of callers won't leave a voicemail" },
  { value: "85%", label: "of missed calls never call back" },
  { value: "$30K+", label: "in lost revenue per year from 1 missed call/day" },
];

export default function Problem() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 md:py-28 overflow-hidden">
      {/* Side accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-gradient-to-b from-transparent via-[#4DD9C0] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              The Problem
            </span>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: headline + body */}
          <div>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
              <AnimatedText text="Most calls go to voicemail." delay={0.1} />
              <br />
              <AnimatedText text="Most voicemails go unreturned." delay={0.2} />
            </h2>
            <FadeIn delay={0.3}>
              <p className="text-white/55 text-lg leading-relaxed">
                Local service businesses miss up to 50% of their inbound calls.
                Every missed call is a missed job. Your competitor picks up —
                you don&apos;t. That job is gone.
              </p>
            </FadeIn>
          </div>

          {/* Right: stat callouts */}
          <div className="flex flex-col gap-6 lg:pt-4">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={0.15 * i} direction="left">
                <div className="flex gap-6 items-start border-b border-white/5 pb-6">
                  <span className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-[#4DD9C0] tabular-nums shrink-0 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-white/50 text-base leading-snug pt-1">
                    {stat.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
