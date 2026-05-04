import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-[family-name:var(--font-syne)] text-xl font-800 tracking-widest text-white uppercase">
                UPSHIF<span className="text-[#4DD9C0]">TT</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              24/7 call answering and automation for local service businesses on
              the Central Coast.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4 font-[family-name:var(--font-syne)]">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4 font-[family-name:var(--font-syne)]">
              Contact
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <a
                href="mailto:joel@upshiftt.com"
                className="hover:text-white transition-colors"
              >
                joel@upshiftt.com
              </a>
              <a
                href="tel:+18314259125"
                className="hover:text-white transition-colors"
              >
                (831) 425-9125
              </a>
              <span>Scotts Valley, CA 95066</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 Upshiftt. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/25 text-xs hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/25 text-xs hover:text-white/50 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="69efe370af0133639a9f10a2"
        data-source="WEB_USER"
        async
      />
    </footer>
  );
}
