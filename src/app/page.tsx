import Link from 'next/link';
import Avatar from '@/components/Avatar';
import {
  workshop,
  keynoteSpeakers,
  organizers,
} from '@/lib/data';

export default function HomePage() {
  return (
    <div className="site-container py-12 md:py-16">
      {/* Hero */}
      <section className="mb-16">
        <span className="font-ui text-[0.6875rem] font-semibold uppercase tracking-wide bg-swiss-orange/15 text-swiss-orange rounded-full px-2.5 py-0.5">
          {workshop.status}
        </span>
        <h1 className="text-display-md md:text-display-lg text-neutral-900 mt-4 mb-4">
          {workshop.title}
        </h1>

        {/* Location & date placeholders */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-1 text-sm font-ui text-neutral-600 mb-2">
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {workshop.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {workshop.date}
          </span>
        </div>
        <p className="text-xs font-ui text-neutral-400">{workshop.venueNote}</p>
      </section>

      {/* Abstract */}
      <section className="mb-16">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Abstract
        </h2>
        <div className="space-y-4">
          {workshop.abstract.map((para, i) => (
            <p key={i} className="text-base text-neutral-700 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Themes / pillars */}
      <section className="mb-16">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Themes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {workshop.pillars.map((pillar) => (
            <div key={pillar.title} className="bg-neutral-100 p-5 flex flex-col">
              <h3 className="text-base font-bold text-neutral-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Invited Speakers teaser */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
            Invited Speakers
          </h2>
          <Link
            href="/schedule"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Full schedule →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {keynoteSpeakers.map((speaker) => (
            <div key={speaker.name} className="flex flex-col items-center text-center">
              <Avatar name={speaker.name} size={96} className="rounded-full" />
              <h3 className="font-bold text-neutral-900 mt-3">{speaker.name}</h3>
              <p className="text-sm text-neutral-500">{speaker.affiliation}</p>
              {speaker.confirmed ? (
                <span className="font-ui text-[0.625rem] font-semibold uppercase tracking-wide text-primary-700 mt-1">
                  Confirmed
                </span>
              ) : (
                <span className="font-ui text-[0.625rem] font-semibold uppercase tracking-wide text-neutral-400 mt-1">
                  Tentative
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs font-ui text-neutral-400 mt-4">
          Invited speakers are tentative; this list will be updated as
          invitations are confirmed.
        </p>
      </section>

      {/* Organizers teaser */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
            Organizers
          </h2>
          <Link
            href="/committee"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Full committee →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6">
          {organizers.map((person) => (
            <div key={person.name} className="flex flex-col items-center text-center">
              <Avatar name={person.name} size={72} className="rounded-full" />
              <h3 className="text-sm font-bold text-neutral-900 mt-2.5 leading-tight">
                {person.name}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">{person.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom boxes: CFP + Best Paper Award */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Call for Papers */}
          <Link
            href="/call-for-papers"
            className="group bg-neutral-100 hover:bg-primary-50 border border-transparent hover:border-primary-300 transition-colors p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">
                Call for Papers
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed flex-1">
              Submit extended abstracts and short papers — including position
              papers — on evaluating and building models that help humans
              flourish. Double-blind, non-archival.
            </p>
            <span className="font-ui text-sm font-medium text-primary-600 group-hover:text-primary-700 mt-4 inline-flex items-center gap-1">
              Read the call
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>

          {/* Community working session */}
          <div className="bg-neutral-100 border border-transparent p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-swiss-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-3-6.65" />
              </svg>
              <h3 className="text-base font-bold text-neutral-900">
                Community Working Session
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed flex-1">
              The program closes with a structured working session on open
              problems — operationalizing flourishing across cultures, avoiding
              benchmark overfitting, and training models that support autonomy
              rather than dependency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
