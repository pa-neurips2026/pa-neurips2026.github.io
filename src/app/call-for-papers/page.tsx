import type { Metadata } from 'next';
import { workshop, cfp } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Call for Papers',
};

export default function CallForPapersPage() {
  return (
    <div className="site-container py-12 md:py-16">
      <header className="mb-12">
        <h1 className="text-display-md text-neutral-900 mb-3">Call for Papers</h1>
        <p className="text-base text-neutral-700 leading-relaxed">
          We invite submissions to {workshop.shortName}, on evaluating and
          building language models that help humans flourish.
        </p>
      </header>

      {/* OpenReview button */}
      <section className="mb-12">
        <a
          href={workshop.openReviewUrl}
          aria-disabled="true"
          className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors px-5 py-3"
        >
          Submit on OpenReview
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <p className="text-xs font-ui text-neutral-400 mt-2">
          The OpenReview submission portal is not open yet. This link will be
          enabled once submissions open.
        </p>
      </section>

      {/* Submission details */}
      <section className="mb-12">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Submission Details
        </h2>
        <div className="space-y-4">
          {cfp.details.map((d, i) => (
            <p key={i} className="text-base text-neutral-700 leading-relaxed">
              {d}
            </p>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="mb-12">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Topics of Interest
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
          {cfp.topics.map((topic) => (
            <li key={topic} className="flex gap-2 text-sm text-neutral-700 leading-relaxed">
              <span className="text-primary-500 mt-1 flex-shrink-0">▪</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Important dates */}
      <section>
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Important Dates
        </h2>
        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {cfp.importantDates.map((d) => (
            <div key={d.label} className="flex items-center justify-between py-3">
              <span className="text-sm text-neutral-700">{d.label}</span>
              <span className="font-ui text-sm font-medium text-neutral-900">
                {d.value}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs font-ui text-neutral-400 mt-3">
          All dates are tentative and will be finalized once the workshop
          proposal is accepted.
        </p>
      </section>
    </div>
  );
}
