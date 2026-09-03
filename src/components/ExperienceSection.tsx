import { ArrowUpRight } from 'lucide-react';
import type { Experience, PortfolioData } from '../types/portfolio';

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function formatMonth(value: string) {
  return monthFormatter.format(new Date(`${value}-01T00:00:00Z`));
}

function formatPeriod(experience: Experience) {
  if (experience.displayPeriod) return experience.displayPeriod;
  return `${formatMonth(experience.startDate)} — ${
    experience.endDate ? formatMonth(experience.endDate) : 'Present'
  }`;
}

export function ExperienceSection({
  experience,
}: Pick<PortfolioData, 'experience'>) {
  const featured = experience.filter((role) => role.featured);
  const history = experience.filter((role) => !role.featured);

  return (
    <section id="experience" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Experience</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Where I&apos;ve worked.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted">
              My recent roles and the kinds of engineering problems I focused on in each.
            </p>
          </div>

          <div>
            {featured.map((role, index) => (
              <article
                key={`${role.company}-${role.startDate}`}
                className={`relative pb-12 pl-8 sm:pl-12 ${
                  index < featured.length - 1 ? 'border-l border-line' : ''
                }`}
              >
                <span
                  className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-accent ring-4 ring-surface"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-accent-strong">{formatPeriod(role)}</p>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-2xl font-semibold tracking-tight">{role.role}</h3>
                  <span className="text-muted">
                    {role.company}
                    {role.client ? ` · ${role.client}` : ''}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl leading-7 text-muted">{role.summary}</p>
                <ul className="mt-6 grid gap-4">
                  {role.achievements.slice(0, 2).map((achievement) => (
                    <li
                      key={achievement}
                      className="flex max-w-2xl gap-3 text-sm leading-6"
                    >
                      <ArrowUpRight
                        size={15}
                        className="mt-1 shrink-0 text-accent-strong"
                        aria-hidden="true"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            {history.length > 0 && (
              <div className="mt-2 border-t border-line pt-7">
                <p className="eyebrow">Earlier</p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {history.map((role) => (
                    <article key={`${role.company}-${role.startDate}`}>
                      <p className="font-mono text-xs text-muted">{formatPeriod(role)}</p>
                      <h3 className="mt-2 font-semibold">{role.role}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {role.company}
                        {role.client ? ` · ${role.client}` : ''}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
