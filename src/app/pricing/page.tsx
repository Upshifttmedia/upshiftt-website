import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";
import ROICalculator from "@/components/pricing/ROICalculator";
import FAQAccordion from "@/components/pricing/FAQAccordion";

export const metadata: Metadata = {
  title: "Pricing | Upshiftt",
  description:
    "Simple flat-rate pricing for local service businesses. See how much missed calls are costing you with our free ROI calculator.",
  openGraph: {
    title: "Pricing | Upshiftt",
    description:
      "Simple flat-rate pricing for local service businesses. No contracts. Cancel anytime.",
    url: "https://upshiftt.com/pricing",
  },
};

const CALENDLY = "https://calendly.com/joel-upshiftt/30min";

const plans = [
  {
    name: "Starter",
    price: "$297",
    featured: false,
    included: [
      "24/7 call answering",
      "Instant SMS follow-up",
      "Owner notifications (SMS + email)",
      "Website chat assistant",
      "Lead dashboard",
    ],
    excluded: ["Google review automation", "Website build"],
  },
  {
    name: "Growth",
    price: "$497",
    featured: true,
    badge: "Most Popular",
    included: [
      "Everything in Starter",
      "Google review automation",
      "Monthly lead report",
      "5-page website included",
      "Priority support",
    ],
    excluded: ["Custom website build", "Quarterly strategy call"],
  },
  {
    name: "Pro",
    price: "$797",
    featured: false,
    included: [
      "Everything in Growth",
      "Custom website build",
      "Pipeline management",
      "Quarterly strategy call",
      "White-glove onboarding",
      "Dedicated account manager",
    ],
    excluded: [],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#4DD9C0]/5 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              Pricing
            </span>
          </FadeIn>
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
            <AnimatedText text="Simple Pricing." delay={0.1} />
            <br />
            <AnimatedText text="Serious Results." delay={0.25} />
          </h1>
          <FadeIn delay={0.35}>
            <p className="text-white/60 text-xl max-w-xl leading-relaxed">
              One flat monthly fee. No contracts. No setup surprises. Cancel
              anytime.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <ROICalculator />

      {/* ── Plans ── */}
      <section className="bg-[#0D0D0D] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              Plans
            </span>
          </FadeIn>
          <div className="mb-14">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-white leading-tight">
              <AnimatedText text="Everything You Need." delay={0.05} />
              <br />
              <AnimatedText text="Nothing You Don't." delay={0.15} />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div
                  className={`relative flex flex-col rounded-2xl p-8 h-full transition-all duration-300 ${
                    plan.featured
                      ? "bg-[#0F1A18] border-2 border-[#4DD9C0]"
                      : "bg-white/[0.03] border border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Badge */}
                  {plan.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-[#4DD9C0] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-[family-name:var(--font-syne)]">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Plan name + price */}
                  <div className="mb-8">
                    <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-syne)] mb-3">
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-[family-name:var(--font-syne)] font-bold text-5xl text-white">
                        {plan.price}
                      </span>
                      <span className="text-white/35 text-sm">/mo</span>
                    </div>
                    <p className="text-white/35 text-xs mt-3 leading-relaxed">
                      Joel calls you personally within 24 hours of signup.
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.included.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-[#4DD9C0] font-bold shrink-0 mt-0.5">✓</span>
                        <span className="text-white/70 text-sm">{feat}</span>
                      </li>
                    ))}
                    {plan.excluded.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-white/20 shrink-0 mt-0.5">–</span>
                        <span className="text-white/25 text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={
                      plan.name === "Starter"
                        ? "https://links.upshiftt.com/payment-link/69faadc3c43a7488828c12eb"
                        : plan.name === "Growth"
                        ? "https://links.upshiftt.com/payment-link/69faae55c43a7488828c12ec"
                        : "https://links.upshiftt.com/payment-link/69faae681e136ab80a29feb5"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                      plan.featured
                        ? "bg-[#4DD9C0] text-[#0A0A0A] hover:bg-white"
                        : "border border-white/15 text-white hover:border-white/40 hover:bg-white/5"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-center text-white/30 text-sm mt-8">
              All plans are month-to-month. No setup fees. No cancellation fees.{" "}
              <Link href="/contact" className="text-[#4DD9C0] hover:underline">
                Need something custom?
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion />

      {/* ── Final CTA ── */}
      <section className="relative bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#4DD9C0]/5 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              Get Started
            </span>
            <span className="w-8 h-px bg-[#4DD9C0]" />
          </FadeIn>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            <AnimatedText text="Ready to Stop Missing Leads?" delay={0.1} />
          </h2>
          <FadeIn delay={0.25}>
            <p className="text-white/55 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
              Book a free 20-minute demo. We&apos;ll show you exactly how
              Upshiftt works for your business.
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div className="flex flex-col items-center gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#4DD9C0] text-[#0A0A0A] font-bold text-lg rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.02]"
              >
                Book Your Free Demo
              </a>
              <p className="text-white/35 text-sm">
                Or call the live demo line:{" "}
                <a
                  href="tel:+18313182960"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  (831) 318-2960
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
