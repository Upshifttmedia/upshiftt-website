import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Upshiftt Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/35 text-sm mb-12">Effective Date: April 27, 2025</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-10 text-white/60">
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Who We Are
              </h2>
              <p className="leading-relaxed">
                Upshiftt is owned and operated by Joel Hopkins, based in Scotts
                Valley, CA 95066. You can reach us at{" "}
                <a href="mailto:joel@upshiftt.com" className="text-[#4DD9C0] hover:underline">
                  joel@upshiftt.com
                </a>{" "}
                or by phone at (831) 425-9125. This Privacy Policy explains how
                we collect, use, and protect information when you use our
                website or services.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Information We Collect
              </h2>
              <p className="leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-none space-y-2">
                {[
                  "Contact information: name, phone number, and email address provided when booking a demo or contacting us.",
                  "Business information: your business name, type of service, and general location.",
                  "Usage data: pages visited, time on site, and browser type, collected via standard analytics tools.",
                  "Call and SMS data: information collected through our receptionist and messaging services on behalf of our clients.",
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
                How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-3">We use collected information to:</p>
              <ul className="list-none space-y-2">
                {[
                  "Provide, operate, and improve our services.",
                  "Respond to your inquiries and schedule demos.",
                  "Send service-related communications.",
                  "Analyze website performance and user experience.",
                  "Comply with legal obligations.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4DD9C0] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed mt-3">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                SMS Communications
              </h2>
              <p className="leading-relaxed">
                By providing your phone number and using our services, you
                consent to receive SMS messages related to your account,
                service notifications, and follow-up communications. Message
                and data rates may apply. You can opt out at any time by
                replying STOP to any message or by contacting us directly.
                We do not share your phone number with third parties for
                marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Data Security
              </h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect
                your information from unauthorized access, disclosure,
                alteration, or destruction. However, no method of
                transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Your Rights
              </h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, contact us at{" "}
                <a href="mailto:joel@upshiftt.com" className="text-[#4DD9C0] hover:underline">
                  joel@upshiftt.com
                </a>
                . California residents may have additional rights under the
                California Consumer Privacy Act (CCPA).
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of significant changes by updating the effective
                date at the top of this page. Continued use of our services
                after changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white mb-3">
                Contact
              </h2>
              <p className="leading-relaxed">
                Questions about this Privacy Policy? Contact us at:
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
