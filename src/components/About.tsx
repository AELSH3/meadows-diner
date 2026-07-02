const stats = [
  { value: "4.5", label: "Google Stars" },
  { value: "154+", label: "Reviews" },
  { value: "Walk-ins", label: "Only" },
];

export default function About() {
  return (
    <section id="about" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="items-center gap-16 lg:grid lg:grid-cols-2">
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-olive to-brand-olive-light p-12">
            <svg className="h-32 w-32 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 11h18M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
              <path d="M12 11v8" />
              <path d="M5 19h14" />
              <path d="M3 11a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2" />
            </svg>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
          </div>

          <div className="mt-10 lg:mt-0">
            <h2 className="font-heading text-3xl font-bold text-brand-burgundy sm:text-4xl">
              A Little Italy Favourite
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-charcoal-light">
              <p>
                Meadows Diner is a cozy neighbourhood spot on Preston Street in
                Ottawa's Little Italy, serving classic all-day breakfast and
                hearty lunch made with care. Every dish is prepared fresh, the
                way it should be — generous portions, honest prices, and the kind
                of food that brings you back.
              </p>
              <p>
                Family-owned and community-driven, Meadows has become the go-to
                spot for regulars looking for a solid eggs benny, a piled-high
                smoked meat sandwich, or the famous poutine loaded with cheese
                curds, bacon, and hollandaise. The menu keeps it classic while
                the kitchen keeps it fresh.
              </p>
              <p>
                Walk-ins only, no fuss, just good food and friendly faces. The
                kind of place where you can bring the whole family, linger over
                free-refill coffee, and feel right at home.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-brand-cream-dark pt-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-brand-burgundy sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-brand-charcoal-light">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
