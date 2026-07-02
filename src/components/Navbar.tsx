import { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/95 shadow-md backdrop-blur-md"
          : "bg-brand-cream"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#"
          className="font-heading text-xl font-bold tracking-tight text-brand-burgundy sm:text-2xl"
        >
          {siteConfig.businessName}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-burgundy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-gold-light lg:inline-flex"
          >
            Get Directions
          </a>

          {/* Hamburger */}
          <button
            type="button"
            className="relative z-60 flex h-10 w-10 items-center justify-center rounded-lg text-brand-charcoal lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-50 flex flex-col bg-brand-cream lg:hidden">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a
              href="#"
              className="font-heading text-xl font-bold text-brand-burgundy"
              onClick={() => setMobileOpen(false)}
            >
              {siteConfig.businessName}
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-1 flex-col items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-2xl font-semibold text-brand-charcoal transition-colors hover:text-brand-burgundy"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full bg-brand-gold px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-gold-light"
                onClick={() => setMobileOpen(false)}
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
