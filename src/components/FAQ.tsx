import { useState, useCallback } from "react";
import { siteConfig } from "../data/siteConfig";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle();
      }
    },
    [onToggle]
  );

  return (
    <div className="border-b border-brand-cream-dark">
      <button
        type="button"
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        id={`faq-header-${id}`}
      >
        <span className="font-heading text-base font-semibold text-brand-charcoal sm:text-lg">
          {question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-brand-burgundy transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-header-${id}`}
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-brand-charcoal-light">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-burgundy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-brand-gold" />
            <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="h-px w-12 bg-brand-gold" />
          </div>
        </div>

        <div className="mt-12">
          {siteConfig.faq.map((item, i) => (
            <FAQItem
              key={i}
              id={String(i)}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() =>
                setOpenIndex((prev) => (prev === i ? null : i))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
