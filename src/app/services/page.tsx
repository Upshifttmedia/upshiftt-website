import type { Metadata } from "next";
import AnimatedText from "@/components/AnimatedText";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services — One System. Total Coverage.",
  description:
    "Every tool your business needs to capture, follow up, and grow — 24/7 call answering, SMS follow-up, owner alerts, web chat, review automation, and a lead dashboard.",
  openGraph: {
    title: "Upshiftt Services — One System. Total Coverage.",
    description:
      "Everything you need to capture every lead, 24/7. No contracts. No tech headaches.",
    url: "https://upshiftt.com/services",
  },
};

const CALENDLY = "https://calendly.com/joel-upshiftt/30min";

const services = [
  {
    number: "01",
    color: "#4DD9C0",
    title: "24/7 Call Answering",
    badge: "Core Service",
    short: "Never miss a call again, day or night.",
    description:
      "Your dedicated receptionist team answers every call — mornings, evenings, weekends, and holidays. Callers are greeted professionally, their needs are understood, and their contact info and job details are captured every time. No more voicemail. No more lost jobs.",
    bullets: [
      "Live answering 24 hours a day, 7 days a week",
      "Professional receptionists trained for service businesses",
      "Full call summary sent to you after every call",
      "Custom greeting using your business name",
    ],
  },
  {
    number: "02",
    color: "#60A5FA",
    title: "Instant SMS Follow-Up",
    badge: "Caller Experience",
    short: "Every caller gets a text within seconds.",
    description:
      "The moment a call ends, your caller automatically receives a confirmation text. They know you have their info and will be in touch. This one touch dramatically reduces the chance they call a competitor while waiting to hear back from you.",
    bullets: [
      "Automated text sent within seconds of call end",
      "Customizable message using your business name",
      "Confirms caller details and next steps",
      "Makes your business feel responsive and professional",
    ],
  },
  {
    number: "03",
    color: "#F59E0B",
    title: "Owner Notifications",
    badge: "Real-Time Alerts",
    short: "Instant alerts to your phone and email.",
    description:
      "As soon as a call ends, you receive a detailed notification via text and email. You get the caller's name, number, what they need, and any urgency notes — so you can prioritize and follow up fast, even when you're on a job site.",
    bullets: [
      "Text + email alert after every call",
      "Full caller summary included",
      "Urgent calls flagged for immediate follow-up",
      "Works with any phone, no app required",
    ],
  },
  {
    number: "04",
    color: "#A855F7",
    title: "Website Chat Assistant",
    badge: "Web Lead Capture",
    short: "Capture leads from your site 24/7.",
    description:
      "Not every potential customer will call — some will visit your website first. Your chat assistant answers common questions, qualifies visitors, and captures their contact info around the clock. Every web lead flows into your dashboard automatically.",
    bullets: [
      "Smart chat widget on your website",
      "Answers FAQs and captures contact info",
      "Available 24/7 — never goes offline",
      "Leads sent to you instantly",
    ],
  },
  {
    number: "05",
    color: "#4ADE80",
    title: "Google Review Automation",
    badge: "Reputation Builder",
    short: "Build your reputation on autopilot.",
    description:
      "After every completed job, an automated follow-up message goes out asking the customer to leave a Google review. Most businesses see a 3–5x increase in review volume within the first 60 days — without lifting a finger.",
    bullets: [
      "Automated review request after every job",
      "Direct link to your Google Business listing",
      "Dramatically increases review volume",
      "Builds trust with new potential customers",
    ],
  },
  {
    number: "06",
    color: "#F87171",
    title: "Lead Dashboard",
    badge: "Organized Leads",
    short: "Every lead logged and organized in one place.",
    description:
      "Every call, chat, and web lead flows into a single, clean dashboard. See exactly who called, when, what they needed, and what happened next. No more lost sticky notes, no more forgotten callbacks. Everything in one place.",
    bullets: [
      "Unified view of all leads and contacts",
      "Call notes and summaries automatically logged",
      "Simple follow-up status tracking",
      "Accessible from your phone or desktop",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#4DD9C0]/5 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              Services
            </span>
          </FadeIn>
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
            <AnimatedText text="One System." delay={0.1} />
            <br />
            <AnimatedText text="Total Coverage." delay={0.25} />
          </h1>
          <FadeIn delay={0.4}>
            <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
              Every tool your business needs to capture, follow up, and grow —
              without adding to your plate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service cards */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-8">
          {services.map((svc, i) => (
            <FadeIn key={i} delay={0.1}>
              <div className="group grid lg:grid-cols-[1fr_2fr] gap-8 bg-white/[0.03] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="font-[family-name:var(--font-syne)] font-bold text-5xl tabular-nums"
                      style={{ color: `${svc.color}30` }}
                    >
                      {svc.number}
                    </span>
                    <span
                      className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full font-[family-name:var(--font-syne)]"
                      style={{ color: svc.color, backgroundColor: `${svc.color}15` }}
                    >
                      {svc.badge}
                    </span>
                  </div>
                  <div
                    className="w-3 h-3 rounded-full mb-4"
                    style={{ backgroundColor: svc.color, boxShadow: `0 0 16px ${svc.color}50` }}
                  />
                  <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-white mb-2">
                    {svc.title}
                  </h2>
                  <p className="text-white/40 text-sm">{svc.short}</p>
                </div>

                {/* Right */}
                <div>
                  <p className="text-white/55 text-base leading-relaxed mb-6">
                    {svc.description}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {svc.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: svc.color }}
                        />
                        <span className="text-white/50 text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="relative bg-[#0D0D0D] py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#4DD9C0]/5 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              One flat monthly fee. No contracts. No setup surprises. Reach out
              to get a quote built around your business.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#4DD9C0] text-[#0A0A0A] font-bold text-lg rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.02]"
            >
              Get Your Custom Quote
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
