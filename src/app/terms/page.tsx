import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Upshiftt Terms of Service — the agreement governing use of our services.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <section className="pt-40 pb-32 max-w-3xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#4DD9C0]" />
            <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
              Legal
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-white/35 text-sm mb-12">Effective Date: April 27, 2025</p>

          <div className="space-y-10 text-white/60">
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using Upshiftt&apos;s website or services, you agree to
                be bound by these Terms of Service. If you do not agree to
                these terms, please do not use our services. These terms apply
                to all users, clients, and visitors of Upshiftt.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Services
              </h2>
              <p className="leading-relaxed">
                Upshiftt provides 24/7 live call answering, SMS follow-up,
                owner notifications, website chat, Google review automation,
                and lead management services for local service businesses.
                Service specifics are defined in individual client agreements.
                We reserve the right to modify, suspend, or discontinue any
                part of our services at any time with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Client Responsibilities
              </h2>
              <p className="leading-relaxed mb-3">As a client of Upshiftt, you agree to:</p>
              <ul className="list-none space-y-2">
                {[
                  "Provide accurate and up-to-date information about your business.",
                  "Use our services only for lawful purposes.",
                  "Not use our services to engage in deceptive, fraudulent, or harmful activities.",
                  "Maintain the confidentiality of any login credentials provided.",
                  "Comply with all applicable laws and regulations in your jurisdiction.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4DD9C0] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Payment
              </h2>
              <p className="leading-relaxed">
                Upshiftt uses Stripe for payment processing. By providing
                payment information, you authorize Upshiftt to charge your
                payment method on the agreed billing schedule. All fees are
                stated in U.S. dollars. Subscription fees are billed monthly
                in advance and are non-refundable except as required by law.
                Failure to maintain a valid payment method may result in
                service suspension.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content, branding, software, and materials provided by
                Upshiftt are the intellectual property of Joel Hopkins /
                Upshiftt and are protected by applicable copyright and
                trademark laws. You may not reproduce, distribute, or create
                derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Upshiftt shall not be
                liable for any indirect, incidental, special, consequential,
                or punitive damages arising from your use of our services.
                Our total liability to you for any claims arising under these
                terms shall not exceed the amount you paid to Upshiftt in the
                three months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Termination
              </h2>
              <p className="leading-relaxed">
                Either party may terminate the service agreement with 30 days&apos;
                written notice. Upshiftt reserves the right to terminate
                services immediately if a client violates these terms or
                engages in activity that harms Upshiftt or its clients.
                Upon termination, your access to services will cease and any
                outstanding fees become immediately due.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms of Service are governed by the laws of the State
                of California, without regard to conflict of law principles.
                Any disputes arising from these terms shall be resolved in the
                courts of Santa Cruz County, California.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Contact
              </h2>
              <p className="leading-relaxed">
                Questions about these Terms of Service? Contact us at:
              </p>
              <div className="mt-3 space-y-1 text-white/50">
                <p>Upshiftt · Joel Hopkins</p>
                <p>Scotts Valley, CA 95066</p>
                <p>
                  <a href="mailto:joel@upshiftt.com" className="text-[#4DD9C0] hover:underline">
                    joel@upshiftt.com
                  </a>
                </p>
                <p>(831) 425-9125</p>
              </div>
            </section>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
