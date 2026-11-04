import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroHeading from "@/components/HeroHeading";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services — One System. Total Coverage.",
  description:
    "A custom mobile-first website, a 24/7 AI chat assistant, instant lead alerts, estimate follow-up, Google review requests, and a lead dashboard for local service businesses.",
  openGraph: {
    title: "Upshiftt Services — One System. Total Coverage.",
    description:
      "A new website and 24/7 AI assistant built to capture more leads. No contracts. No tech headaches.",
    url: "https://upshiftt.com/services",
  },
};

const CALENDLY = "https://calendly.com/joel-upshiftt/30min";

const services = [
  {
    number: "01",
    color: "#4DD9C0",
    title: "Custom Mobile-First Website",
    badge: "Core Service",
    short: "A modern website built to turn visitors into calls.",
    description:
      "Most customers find you on their phone. We build a fast, modern website around your services, your service area, and your real reviews — designed so a homeowner can call you or request a quote in seconds.",
    bullets: [
      "Designed for your trade and your service area",
      "Click-to-call and quote request form on every page",
      "Fast and easy to use on phones",
      "Hosting, updates, and edits handled for you",
    ],
  },
  {
    number: "02",
    color: "#60A5FA",
    title: "24/7 AI Chat Assistant",
    badge: "AI Lead Capture",
    short: "An AI assistant that answers your website visitors around the clock.",
    description:
      "When someone visits your site at 9pm with a question, they shouldn't have to wait until morning. Your AI assistant is trained on your services and answers common questions, collects job details, and offers estimate times — then hands every lead to you. It's AI, and it's clearly labeled as an assistant, so customers know what to expect.",
    bullets: [
      "Trained on your services, service area, and FAQs",
      "Collects name, phone, address, and job details",
      "Requests estimate appointments for you to confirm",
      "Never quotes prices you haven't approved",
    ],
  },
  {
    number: "03",
    color: "#F59E0B",
    title: "Instant Lead Alerts",
    badge: "Real-Time Alerts",
    short: "New leads sent straight to you.",
    description:
      "Every chat lead and quote request is emailed to you right away with the customer's details and what they need — so you can follow up quickly, even from a job site.",
    bullets: [
      "Email alert for every new lead",
      "Full customer details and job description",
      "Urgent requests clearly flagged",
      "Works on any phone, no app required",
    ],
  },
  {
    number: "04",
    color: "#A855F7",
    title: "Estimate Follow-Up",
    badge: "Win More Jobs",
    short: "Fewer estimates slipping through the cracks.",
    description:
      "Lots of jobs are lost simply because nobody followed up after the estimate. Customers who received an estimate but haven't booked get friendly, timed follow-up messages, so you stay top of mind without chasing anyone yourself.",
    bullets: [
      "Timed follow-ups after each estimate",
      "Written in your voice with your business name",
      "Stops automatically once the job is booked",
      "Included in the Growth plan",
    ],
  },
  {
    number: "05",
    color: "#4ADE80",
    title: "Google Review Requests",
    badge: "Reputation Builder",
    short: "Make it easy for happy customers to leave a review.",
    description:
      "After a job is marked complete, your customer gets a short, friendly message with a direct link to your Google listing. Asking consistently is the simplest way to grow your reviews.",
    bullets: [
      "Review request after every completed job",
      "Direct link to your Google Business listing",
      "Personalized with your business name",
      "Included in the Growth plan",
    ],
    spotlight: true,
    extra:
      "Many great local businesses have only a handful of reviews simply because asking is easy to forget. A consistent, well-timed request after every job helps your reputation keep pace with the quality of your work.",
  },
  {
    number: "06",
    color: "#F87171",
    title: "Lead Dashboard",
    badge: "Organized Leads",
    short: "Every lead organized in one place.",
    description:
      "Every chat, quote request, and booked estimate flows into one simple dashboard. See who reached out, what they needed, and what happens next — no more lost sticky notes.",
    bullets: [
      "All leads and estimate requests in one view",
      "Simple status tracking from new to booked",
      "Chat conversations saved automatically",
      "Accessible from your phone or desktop",
    ],
  },
];


export default function ServicesPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden" style={{ minHeight: "60vh" }}>
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/services-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            quality={80}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              Services
            </span>
          </div>
          <HeroHeading className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
            One System.
            <br />
            Total Coverage.
          </HeroHeading>
          <p className="text-white/80 text-xl max-w-2xl leading-relaxed">
            Every tool your business needs to capture, follow up, and grow —
            without adding to your plate.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-8">
          {services.map((svc, i) => (
            <FadeIn key={i} delay={0.1}>
              <div
                className={`group grid lg:grid-cols-[1fr_2fr] gap-8 rounded-2xl p-8 md:p-10 transition-all duration-500 ${
                  svc.spotlight
                    ? "bg-[#161616] border-l-2 border-white/5 hover:border-white/10"
                    : "bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                }`}
                style={svc.spotlight ? { borderLeftColor: "#4DD9C0", borderLeftWidth: "2px" } : {}}
              >
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
                  <ul className="flex flex-col gap-3 mb-6">
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
                  {"extra" in svc && svc.extra && (
                    <p className="text-white/70 text-sm leading-relaxed border-t border-white/5 pt-6">
                      {svc.extra}
                    </p>
                  )}
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
            <div className="bg-white/[0.03] border border-dashed border-white/15 rounded-2xl p-7 mb-16 text-left">
              <p className="text-[#4DD9C0] text-xs uppercase tracking-widest font-semibold font-[family-name:var(--font-syne)] mb-2">
                Coming Soon
              </p>
              <p className="font-[family-name:var(--font-syne)] font-bold text-white text-xl mb-2">
                24/7 AI Phone Answering
              </p>
              <p className="text-white/55 text-sm leading-relaxed">
                An AI voice assistant that answers your business line when you
                can&apos;t. Ask about early access when you book your demo.
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Plans start at $297/month with your new website included. No
              contracts. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#4DD9C0] text-[#0A0A0A] font-bold text-lg rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.02]"
              >
                See Pricing
              </Link>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 border border-white/15 text-white font-semibold text-lg rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Book a Free Demo
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
