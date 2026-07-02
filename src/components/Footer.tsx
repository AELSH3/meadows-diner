import { siteConfig } from "../data/siteConfig";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal py-16 text-brand-cream/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="gap-12 lg:grid lg:grid-cols-3">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-cream">
              {siteConfig.businessName}
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Classic breakfast and lunch made with care in Ottawa's Little Italy.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <p>
                {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.province} {siteConfig.address.postalCode}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-brand-cream"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-brand-cream uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-brand-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-brand-cream uppercase">
              Hours
            </h3>
            <div className="mt-4 space-y-1.5 text-sm">
              <p>Monday - Sunday: 8:00 a.m. - 2:00 p.m.</p>
              <p className="text-brand-gold">Open 7 days a week</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream/10 transition-colors hover:bg-brand-cream/20"
                aria-label="Get Directions"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream/10 transition-colors hover:bg-brand-cream/20"
                aria-label="Call Restaurant"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-cream/10 pt-8">
          <div className="flex flex-col items-center gap-3 text-center text-xs sm:flex-row sm:justify-between sm:text-left">
            <p className="text-brand-cream/50">
              Walk-ins only — we do not accept reservations.
            </p>
            <p className="text-brand-cream/50">
              &copy; 2026 {siteConfig.businessName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
