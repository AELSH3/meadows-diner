import { siteConfig } from "../data/siteConfig";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.09 6.26L21 9.27l-5.18 4.73L17.82 22 12 17.77 6.18 22l1.09-7.95L2 9.27l6.91-1.01z" />
    </svg>
  );
}

function FiveStars() {
  return (
    <div className="flex gap-0.5 text-brand-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { rating, totalReviews, testimonials } = siteConfig.reviews;

  return (
    <section id="reviews" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-burgundy sm:text-4xl">
            What Guests Are Saying
          </h2>

          <div className="mt-6 inline-flex flex-col items-center gap-2 rounded-xl bg-brand-cream px-8 py-5">
            <div className="flex items-center gap-2">
              <span className="font-heading text-4xl font-bold text-brand-burgundy">
                {rating}
              </span>
              <div className="flex gap-0.5 text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(rating) ? "" : "opacity-30"}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-brand-charcoal-light">
              from {totalReviews.toLocaleString()}+ Google reviews
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-brand-cream-dark bg-brand-cream/50 p-6"
            >
              <FiveStars />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brand-charcoal">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-brand-burgundy">
                &mdash; {review.author}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-brand-charcoal-light">
          Rating reflects Google reviews at time of writing and may change.
        </p>
      </div>
    </section>
  );
}
