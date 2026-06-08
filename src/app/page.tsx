import Link from 'next/link';
import Avatar from '@/components/Avatar';
import PersonGrid from '@/components/PersonGrid';
import {
  workshop,
  organizers,
  keynoteSpeakers,
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
        <PersonGrid people={keynoteSpeakers} size={72} />
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
              <Avatar name={person.name} src={person.photo} size={72} className="rounded-full" />
              <h3 className="text-sm font-bold text-neutral-900 mt-2.5 leading-tight">
                {person.name}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">{person.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom boxes: CFP, community working session, and awards */}
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
              Submit extended abstracts and short papers (including position
              papers) on evaluating and building models that help humans
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
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
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

          {/* Best Paper Award */}
          <div className="bg-neutral-100 border border-transparent p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
              </svg>
              <h3 className="text-base font-bold text-neutral-900">
                Best Paper Award
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed flex-1">
              Recognizing an outstanding accepted submission, selected by the
              Program Committee. Details to follow.
            </p>
          </div>

          {/* Student Travel Award */}
          <div className="bg-neutral-100 border border-transparent p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <h3 className="text-base font-bold text-neutral-900">
                Student Travel Award
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed flex-1">
              Travel support to help students attend and present at the
              workshop. Details to follow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
