import { siteConfig } from "../data/siteConfig";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export default function AnnouncementBar() {
  const today = DAYS[new Date().getDay()];
  const entry = siteConfig.hours.find((h) => h.day === today);

  return (
    <div className="bg-brand-burgundy text-brand-cream text-xs sm:text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2">
        <svg
          className="hidden h-3.5 w-3.5 shrink-0 sm:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>

        <span>
          All-day breakfast&ensp;·&ensp;{today} {entry?.time}
        </span>
      </div>
    </div>
  );
}
