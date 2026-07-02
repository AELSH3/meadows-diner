import { useState } from "react";
import { siteConfig } from "../data/siteConfig";

const sections = siteConfig.menu.sections;

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-burgundy sm:text-4xl">
            The Menu
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-brand-gold" />
            <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
            </svg>
            <span className="h-px w-12 bg-brand-gold" />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {sections.map((section, i) => (
            <button
              key={section.title}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeTab === i
                  ? "bg-brand-burgundy text-white"
                  : "bg-brand-cream text-brand-charcoal hover:bg-brand-cream-dark"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {sections.map((section, i) => {
            if (i !== activeTab) return null;
            return (
              <div key={section.title}>
                {"note" in section && section.note && (
                  <p className="mb-6 text-center text-sm italic text-brand-charcoal-light">
                    {section.note}
                  </p>
                )}

                <div className="grid gap-x-12 gap-y-1 md:grid-cols-2">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="border-b border-brand-cream-dark py-5"
                    >
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-heading text-lg font-semibold text-brand-charcoal">
                          {item.name}
                        </h3>
                        {"tag" in item && item.tag && (
                          <span className="shrink-0 rounded-full bg-brand-cream px-2.5 py-0.5 text-[11px] font-semibold text-brand-burgundy">
                            {item.tag}
                          </span>
                        )}
                        <span className="flex-1 border-b border-dotted border-brand-charcoal/20" />
                        <span className="shrink-0 font-body text-base font-semibold text-brand-olive">
                          {item.price}
                        </span>
                      </div>
                      {"description" in item && item.description && (
                        <p className="mt-1.5 text-sm leading-relaxed text-brand-charcoal-light">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-xs text-brand-charcoal-light">
          {siteConfig.menu.disclaimer}
        </p>
      </div>
    </section>
  );
}
