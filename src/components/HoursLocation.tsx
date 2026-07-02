import { siteConfig } from "../data/siteConfig";

export default function HoursLocation() {
  return (
    <section id="hours" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="gap-16 lg:grid lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-burgundy sm:text-4xl">
              Hours & Location
            </h2>

            <div className="mt-8 overflow-hidden rounded-xl border border-brand-cream-dark">
              {siteConfig.hours.map((entry) => (
                <div
                  key={entry.day}
                  className={`flex items-center justify-between px-5 py-3 text-sm ${
                    entry.closed
                      ? "bg-brand-burgundy/10 font-semibold text-brand-burgundy"
                      : "border-b border-brand-cream-dark text-brand-charcoal last:border-b-0"
                  }`}
                >
                  <span className="font-medium">{entry.day}</span>
                  <span>{entry.closed ? "Closed" : entry.time}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-brand-charcoal-light">
              {siteConfig.hoursDisclaimer}
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3 text-sm text-brand-charcoal">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city},{" "}
                  {siteConfig.address.province} {siteConfig.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-charcoal">
                <svg className="h-5 w-5 shrink-0 text-brand-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-burgundy">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-lg bg-brand-cream px-4 py-3 text-sm text-brand-charcoal-light">
              <svg className="h-4 w-4 shrink-0 text-brand-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {siteConfig.walkInNotice}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-gold-light"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-brand-burgundy px-6 py-2.5 text-sm font-semibold text-brand-burgundy transition-colors hover:bg-brand-burgundy hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Restaurant
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="overflow-hidden rounded-2xl border border-brand-cream-dark">
              <iframe
                title="Meadows Diner location on Google Maps"
                src={siteConfig.links.googleMapsEmbed}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
