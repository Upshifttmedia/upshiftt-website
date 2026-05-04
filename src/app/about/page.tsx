import type { Metadata } from "next";
import AnimatedText from "@/components/AnimatedText";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About — We're Local. We Get It.",
  description:
    "Upshiftt was built right here on the Central Coast for the service businesses that keep our communities running. Based in Scotts Valley, CA.",
  openGraph: {
    title: "About Upshiftt — We're Local. We Get It.",
    description:
      "Built in Scotts Valley, CA for local service businesses on the Central Coast.",
    url: "https://upshiftt.com/about",
  },
};

const values = [
  {
    title: "Local First",
    description:
      "We only work with local service businesses. We understand your world — the early mornings, the job sites, the juggle. We built everything around how you actually work.",
    color: "#4DD9C0",
  },
  {
    title: "Simple by Design",
    description:
      "No complicated dashboards. No tech headaches. No onboarding calls that take three hours. Upshiftt just works — from day one.",
    color: "#60A5FA",
  },
  {
    title: "Results Over Everything",
    description:
      "If you're not capturing more leads, we haven't done our job. That's the only metric we care about. Everything we build is designed to drive real business outcomes.",
    color: "#A855F7",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#4DD9C0]/5 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              About Us
            </span>
          </FadeIn>
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
            <AnimatedText text="We're Local." delay={0.1} />
            <br />
            <AnimatedText text="We Get It." delay={0.25} />
          </h1>
          <FadeIn delay={0.4}>
            <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
              Upshiftt was built right here on the Central Coast for the service
              businesses that keep our communities running.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story text */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-[#4DD9C0]" />
                <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
                  Our Story
                </span>
              </div>
              <div className="space-y-5 text-white/55 text-lg leading-relaxed">
                <p>
                  We started Upshiftt because we watched great local businesses
                  lose jobs — not because of bad service, but because nobody
                  picked up the phone.
                </p>
                <p>
                  A plumber misses a call while under a sink. A landscaper can&apos;t
                  answer while running a mower. A contractor is on a roof. The
                  call goes to voicemail. The homeowner calls someone else. That
                  job — and all the referrals that might have come from it — is
                  gone.
                </p>
                <p>
                  We built a system that fixes that. Permanently. Based in Scotts
                  Valley, CA, we work exclusively with local service businesses
                  who want a real competitive edge without the complexity.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4DD9C0]/10 border border-[#4DD9C0]/20 flex items-center justify-center">
                  <span className="text-[#4DD9C0] font-[family-name:var(--font-syne)] font-bold text-lg">J</span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-syne)] font-semibold text-white">
                    Joel Hopkins
                  </p>
                  <p className="text-white/40 text-sm">
                    Founder — Scotts Valley, CA
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Headshot placeholder */}
          <FadeIn delay={0.2} direction="left">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DD9C0]/10 to-transparent" />
              <div className="text-center p-10">
                <div className="w-24 h-24 rounded-full bg-[#4DD9C0]/10 border border-[#4DD9C0]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4DD9C0] font-[family-name:var(--font-syne)] font-bold text-4xl">J</span>
                </div>
                <p className="text-white/30 text-sm">Joel Hopkins</p>
                <p className="text-white/20 text-xs mt-1">Founder, Upshiftt</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-[#0D0D0D] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              What We Stand For
            </span>
          </FadeIn>
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-white leading-tight">
              <AnimatedText text="Our Values" delay={0.1} />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <FadeIn key={i} delay={0.12 * i}>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 h-full hover:border-white/10 transition-all duration-400">
                  <div
                    className="w-10 h-1 rounded-full mb-6"
                    style={{ backgroundColor: value.color }}
                  />
                  <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
