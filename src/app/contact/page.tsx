import type { Metadata } from "next";
import HeroHeading from "@/components/HeroHeading";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact — Let's Talk.",
  description:
    "Book a free 20-minute demo with Upshiftt. We'll show you exactly what our system looks like for your business. Based in Scotts Valley, CA.",
  openGraph: {
    title: "Contact Upshiftt — Let's Talk.",
    description:
      "Book a free demo or call our live demo line at (831) 318-2960.",
    url: "https://upshiftt.com/contact",
  },
};

const CALENDLY = "https://calendly.com/joel-upshiftt/30min";

export default function ContactPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#4DD9C0]/5 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              Contact
            </span>
          </FadeIn>
          <HeroHeading className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
            Let&apos;s Talk.
          </HeroHeading>
          <FadeIn delay={0.15}>
            <p className="text-white/80 text-xl max-w-xl leading-relaxed">
              Book a free 20-minute demo and we&apos;ll show you exactly what
              Upshiftt looks like for your business.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 pb-32 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Calendly CTA */}
          <FadeIn>
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#4DD9C0]/10 border border-[#4DD9C0]/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📅</span>
              </div>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-white mb-4">
                Book a Free Demo
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                Choose a time that works for you. We&apos;ll walk you through
                exactly how Upshiftt would work for your specific business.
              </p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#4DD9C0] text-[#0A0A0A] font-bold text-base rounded-full hover:bg-white transition-all duration-300"
              >
                Schedule on Calendly
              </a>
              <p className="text-white/25 text-xs mt-4">
                Free · No obligation · 20 minutes
              </p>
            </div>
          </FadeIn>

          {/* Right: Contact details */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-8 pt-2">
              <div>
                <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-white mb-8">
                  Or reach us directly
                </h2>
              </div>

              {[
                {
                  icon: "📞",
                  label: "Live Demo Line",
                  value: "(831) 318-2960",
                  href: "tel:+18313182960",
                  note: "You'll hear our receptionist answer — this is the live system.",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "joel@upshiftt.com",
                  href: "mailto:joel@upshiftt.com",
                  note: "We respond within one business day.",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Scotts Valley, CA 95066",
                  href: null,
                  note: "Serving local businesses across the Central Coast.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 border-b border-white/5 pb-7 last:border-0"
                >
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-1 font-[family-name:var(--font-syne)]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white text-lg font-[family-name:var(--font-syne)] font-semibold hover:text-[#4DD9C0] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-lg font-[family-name:var(--font-syne)] font-semibold">
                        {item.value}
                      </p>
                    )}
                    <p className="text-white/35 text-xs mt-1">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
