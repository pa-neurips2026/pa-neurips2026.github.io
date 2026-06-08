import type { Metadata } from 'next';
import PersonCard from '@/components/PersonCard';
import { schedule, keynoteSpeakers, panelists } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Schedule',
};

export default function SchedulePage() {
  return (
    <div className="site-container py-12 md:py-16">
      <header className="mb-12">
        <h1 className="text-display-md text-neutral-900">Schedule</h1>
      </header>

      {/* Schedule */}
      <section className="mb-16">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Program
        </h2>
        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {schedule.map((item, i) => (
            <div key={i} className="flex gap-4 py-3.5">
              <div className="w-28 flex-shrink-0 font-ui text-xs text-neutral-500 pt-0.5 tabular-nums">
                {item.time}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  {item.tba && (
                    <span className="font-ui text-[0.625rem] font-semibold uppercase tracking-wide bg-neutral-100 text-neutral-500 px-2 py-0.5 leading-none">
                      TBA
                    </span>
                  )}
                </div>
                {item.detail && (
                  <p className="text-sm text-neutral-500 mt-0.5">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs font-ui text-neutral-400 mt-3">
          Schedule is tentative and subject to change.
        </p>
      </section>

      {/* Invited Speakers */}
      <section className="mb-16">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Invited Speakers
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {keynoteSpeakers.map((speaker) => (
            <PersonCard key={speaker.name} person={speaker} />
          ))}
        </div>
      </section>

      {/* Invited Panelists */}
      <section className="mb-16">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Invited Panelists
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {panelists.map((panelist) => (
            <PersonCard key={panelist.name} person={panelist} />
          ))}
        </div>
        <p className="text-xs font-ui text-neutral-400 mt-6">
          A cross-disciplinary panel spanning economics, psychology, social
          science, and computer science.
        </p>
      </section>

      {/* Accepted Papers */}
      <section>
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Accepted Papers
        </h2>
        <div className="bg-neutral-100 p-8 text-center">
          <p className="text-sm text-neutral-500">
            Accepted papers will be listed here after the review process
            concludes.
          </p>
        </div>
      </section>
    </div>
  );
}
