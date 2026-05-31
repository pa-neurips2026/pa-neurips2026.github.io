import type { Metadata } from 'next';
import PersonCard from '@/components/PersonCard';
import { organizers, programCommittee } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Committee',
};

export default function CommitteePage() {
  return (
    <div className="site-container py-12 md:py-16">
      <header className="mb-12">
        <h1 className="text-display-md text-neutral-900 mb-3">Committee</h1>
        <p className="text-base text-neutral-700 leading-relaxed">
          The workshop is led by an organizing team spanning academia and
          industry, supported by a program committee of reviewers drawn from
          machine learning and adjacent fields.
        </p>
      </header>

      {/* Organizing Committee */}
      <section className="mb-16">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Organizing Committee
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {organizers.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* Program Committee */}
      <section>
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-6">
          Program Committee
        </h2>
        <p className="text-base text-neutral-700 leading-relaxed mb-3">
          {programCommittee.description}
        </p>
        <p className="text-sm text-neutral-500 italic">
          {programCommittee.note}
        </p>
      </section>
    </div>
  );
}
