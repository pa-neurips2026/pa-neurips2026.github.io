import Avatar from './Avatar';
import type { Person } from '@/lib/data';

interface PersonCardProps {
  person: Person;
  showBio?: boolean;
}

export default function PersonCard({ person, showBio = true }: PersonCardProps) {
  return (
    <article className="group bg-white border border-neutral-200 hover:border-primary-300 transition-colors duration-200 p-5 flex gap-4">
      <Avatar name={person.name} src={person.photo} size={64} />
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-bold text-neutral-900">{person.name}</h3>
          {person.role && (
            <span className="font-ui text-[0.625rem] font-semibold uppercase tracking-wide bg-primary-100 text-primary-700 px-2 py-0.5 leading-none">
              {person.role}
            </span>
          )}
          {person.confirmed === false && (
            <span className="font-ui text-[0.625rem] font-semibold uppercase tracking-wide bg-neutral-100 text-neutral-500 px-2 py-0.5 leading-none">
              Tentative
            </span>
          )}
        </div>
        <p className="text-sm text-neutral-500 mt-0.5">{person.affiliation}</p>
        {showBio && person.bio && (
          <p className="text-sm text-neutral-700 leading-relaxed mt-2">
            {person.bio}
          </p>
        )}
      </div>
    </article>
  );
}
