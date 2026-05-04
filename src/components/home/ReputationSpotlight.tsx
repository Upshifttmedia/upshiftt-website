"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";

const stats = [
  {
    value: "3x",
    label: "more calls for businesses with 50+ Google reviews",
  },
  {
    value: "72%",
    label: "of customers check Google reviews before calling",
  },
  {
    value: "Auto",
    label: "every review request sent without you lifting a finger",
  },
];

export default function ReputationSpotlight() {
  return (
    <section className="relative bg-[#111111] py-24 md:py-36 overflow-hidden">
      {/* Subtle teal glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#4DD9C0]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#4DD9C0]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <FadeIn className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#4DD9C0]" />
          <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
            Reputation
          </span>
        </FadeIn>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column — content */}
          <div>
            {/* Headline */}
            <div className="mb-8">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                <AnimatedText text="More Reviews." delay={0.05} />
                <br />
                <AnimatedText text="More Calls." delay={0.15} />
                <br />
                <AnimatedText text="More Jobs." delay={0.25} />
              </h2>
            </div>

            {/* Body */}
            <FadeIn delay={0.2} className="mb-12">
              <p className="text-white/60 text-lg leading-relaxed">
                Every completed job triggers an automatic review request to your
                customer. No chasing. No awkward asks. Just a steady stream of
                5-star Google reviews building your reputation while you work.
              </p>
            </FadeIn>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-12">
              {stats.map((stat, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="bg-[#111111] px-5 py-8 flex flex-col gap-2">
                    <span className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-[#4DD9C0] leading-none">
                      {stat.value}
                    </span>
                    <span className="text-white/45 text-xs leading-snug">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Mock Google review widget */}
            <FadeIn delay={0.2}>
              <div>
                {/* Stars row */}
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#4DD9C0"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="text-white/40 text-xs ml-1 font-[family-name:var(--font-syne)]">
                    Google Review
                  </span>
                </div>

                {/* Review card */}
                <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-7">
                  <p className="text-white/75 text-base leading-relaxed mb-6 italic">
                    &ldquo;Called at 8pm on a Friday and someone picked up
                    immediately. Had a quote by morning. Absolutely
                    recommend.&rdquo;
                  </p>
                  <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                    <div className="w-8 h-8 rounded-full bg-[#4DD9C0]/15 flex items-center justify-center shrink-0">
                      <span className="text-[#4DD9C0] text-xs font-bold font-[family-name:var(--font-syne)]">
                        M
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-[family-name:var(--font-syne)] font-semibold text-sm">
                        Mike R.
                      </p>
                      <p className="text-white/35 text-xs">Santa Cruz County</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-[#4DD9C0] font-semibold text-sm hover:gap-3 transition-all duration-200 group"
                  >
                    See how it works
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column — image card */}
          <FadeIn delay={0.15} direction="left">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-teal-500/20">
              <Image
                src="/reputation.jpg"
                alt="Customer leaving a 5-star Google review"
                fill
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
