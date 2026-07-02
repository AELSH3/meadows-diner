import type { ReactNode } from "react";

const cards: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Free Coffee Refills",
    text: "Enjoy as many refills as you'd like with your meal. Freshly brewed and always ready.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Busy Weekends",
    text: "Weekends can be busy, especially Sunday mornings. Arriving earlier helps, and the wait is always worth it.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "~15 Tables",
    text: "We're a cozy neighbourhood diner with about 15 tables. Walk-in only — no reservations needed or accepted.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 3v18" />
      </svg>
    ),
  },
  {
    title: "Vegetarian Options",
    text: "Veggie omelette, French toast, pancakes, grilled cheese, and more — there's always something for everyone.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 20.981a6.932 6.932 0 0 1-2-4.981c0-3.5 2.5-6 5.5-7.5" />
        <path d="M17 3c-2 0-6 2-8 6.5S7 17 7 20" />
        <path d="M22 3c-4 0-8 .5-10 3s-2 7 0 10" />
      </svg>
    ),
  },
  {
    title: "Street Parking",
    text: "Street parking is available along Preston Street. There are also nearby public lots within walking distance.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function VisitInfo() {
  return (
    <section id="visit" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-burgundy sm:text-4xl">
            Planning Your Visit
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-brand-gold" />
            <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="h-px w-12 bg-brand-gold" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-brand-cream-dark bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-burgundy/10 text-brand-burgundy">
                {card.icon}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-brand-charcoal">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal-light">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-burgundy px-6 py-8 text-center sm:px-12">
          <p className="text-lg leading-relaxed font-medium text-brand-cream">
            No reservations — just come by and we'll welcome you as soon as a
            table is available.
          </p>
        </div>
      </div>
    </section>
  );
}
