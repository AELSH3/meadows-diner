import type { ReactNode } from "react";
import { siteConfig } from "../data/siteConfig";
import heroImg from "../assets/diner-interior.png";

const badges: { label: string; icon: ReactNode }[] = [
  {
    label: "Walk-ins Only",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Open 7 Days",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Little Italy",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Vegetarian Options",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 20.981a6.932 6.932 0 0 1-2-4.981c0-3.5 2.5-6 5.5-7.5" />
        <path d="M17 3c-2 0-6 2-8 6.5S7 17 7 20" />
        <path d="M22 3c-4 0-8 .5-10 3s-2 7 0 10" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Meadows Diner interior — classic booths and checkered floor"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-espresso/90 via-brand-espresso/75 to-brand-espresso/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
            {siteConfig.heroHeadline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/85 sm:text-xl">
            {siteConfig.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-gold-light"
            >
              Explore the Menu
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href={siteConfig.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Get Directions
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
              >
                {b.icon}
                {b.label}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm italic text-white/60">
            Weekend waits are possible, but the food is worth it.
          </p>
        </div>
      </div>
    </section>
  );
}
