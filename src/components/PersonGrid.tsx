import Avatar from './Avatar';
import type { Person } from '@/lib/data';

interface PersonGridProps {
  people: Person[];
  /** Avatar diameter in px. */
  size?: number;
}

// Picks the badge to show beneath a person: a discipline (panelists) takes
// precedence, otherwise the confirmation status (speakers).
function badgeFor(
  person: Person,
): { label: string; tone: 'primary' | 'neutral' } | null {
  if (person.role) return { label: person.role, tone: 'primary' };
  if (person.confirmed === true)
    return { label: person.status ?? 'Confirmed', tone: 'primary' };
  if (person.confirmed === false)
    return { label: person.status ?? 'Tentative', tone: 'neutral' };
  return null;
}

export default function PersonGrid({ people, size = 80 }: PersonGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8">
      {people.map((person) => {
        const badge = badgeFor(person);
        return (
          <div
            key={person.name}
            className="flex flex-col items-center text-center"
          >
            <Avatar
              name={person.name}
              src={person.photo}
              size={size}
              className="rounded-full"
            />
            <h3 className="text-sm font-bold text-neutral-900 mt-3 leading-tight">
              {person.name}
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              {person.affiliation}
            </p>
            {badge && (
              <span
                className={`font-ui text-[0.625rem] font-semibold uppercase tracking-wide px-2 py-0.5 leading-none mt-2 ${
                  badge.tone === 'primary'
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-neutral-100 text-neutral-500'
                }`}
              >
                {badge.label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
