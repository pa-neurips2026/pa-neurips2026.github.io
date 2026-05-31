import { workshop } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="site-container py-8">
        <p className="text-neutral-400 text-xs text-center">
          {workshop.shortName} · {workshop.status}. Details on this site are
          tentative and subject to change pending acceptance of the workshop
          proposal.
        </p>
      </div>
    </footer>
  );
}
