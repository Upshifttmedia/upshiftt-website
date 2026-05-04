"use client";

import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";

function IconPhone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4DD9C0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/>
    </svg>
  );
}

function IconMessage() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4DD9C0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  );
}

function IconBell() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4DD9C0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4DD9C0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      <line x1="9" y1="10" x2="15" y2="10"/>
      <line x1="9" y1="14" x2="13" y2="14"/>
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4DD9C0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4DD9C0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>
  );
}

const features = [
  {
    Icon: IconPhone,
    title: "24/7 Call Answering",
    description: "Never miss a call again, day or night. Every call answered by a live, professional receptionist.",
  },
  {
    Icon: IconMessage,
    title: "Instant SMS Follow-Up",
    description: "Every caller gets a text within seconds of hanging up — so they know you've got them covered.",
  },
  {
    Icon: IconBell,
    title: "Owner Notifications",
    description: "Real-time alerts to your phone and email with caller details so you can follow up fast.",
  },
  {
    Icon: IconChat,
    title: "Website Chat Assistant",
    description: "Capture leads from your site 24/7 with a smart chat assistant that never sleeps.",
  },
  {
    Icon: IconStar,
    title: "Google Review Automation",
    description: "Build your reputation on autopilot — automated review requests after every completed job.",
  },
  {
    Icon: IconDashboard,
    title: "Lead Dashboard",
    description: "Every lead logged and organized in one place. Nothing falls through the cracks.",
  },
];

export default function WhatIsIncluded() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 md:py-28 overflow-hidden">
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
                <div className="mb-5 w-10 h-10 flex items-center justify-center rounded-xl bg-[#4DD9C0]/8">
                  <feature.Icon />
                </div>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-white text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed" style={{ fontSize: "15px" }}>
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
