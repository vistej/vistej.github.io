import { BrainCircuit, Cloud, Component, Network } from 'lucide-react';
import type { ComponentType } from 'react';
import type { PortfolioData } from '../types/portfolio';

interface Capability {
  key: string;
  label: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

const capabilities: Capability[] = [
  {
    key: 'frontend',
    label: 'Platform interfaces',
    description: 'Design systems and web foundations that scale across products and teams.',
    icon: Component,
  },
  {
    key: 'backend',
    label: 'Connected systems',
    description: 'Service boundaries and APIs shaped around dependable product workflows.',
    icon: Network,
  },
  {
    key: 'cloudDevOps',
    label: 'Cloud reliability',
    description: 'Observable delivery systems designed for predictable operation.',
    icon: Cloud,
  },
  {
    key: 'aiMachineLearning',
    label: 'AI-native tooling',
    description: 'Agentic workflows and retrieval systems that amplify engineering work.',
    icon: BrainCircuit,
  },
];

export function CapabilitiesSection({
  skills,
  education,
}: Pick<PortfolioData, 'skills' | 'education'>) {
  const degree = education[0];

  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="max-w-3xl">
        <p className="eyebrow">Capabilities</p>
        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          What I work with.
        </h2>
      </div>

      <div className="mt-14 grid border-l border-t border-line sm:grid-cols-2">
        {capabilities.map(({ key, label, description, icon: Icon }) => (
          <article key={key} className="border-b border-r border-line p-7 sm:p-9">
            <Icon size={24} className="text-accent-strong" />
            <h3 className="mt-8 text-xl font-semibold">{label}</h3>
            <p className="mt-3 max-w-md leading-7 text-muted">{description}</p>
            <p className="mt-6 font-mono text-xs leading-6 text-muted">
              {(skills[key] ?? []).slice(0, 6).join(' · ')}
            </p>
          </article>
        ))}
      </div>

      {degree && (
        <div
          id="education"
          className="mt-16 flex flex-col justify-between gap-5 rounded-[2rem] bg-ink p-7 text-canvas sm:flex-row sm:items-end sm:p-10"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-canvas/60">
              Academic foundation
            </p>
            <h3 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              {degree.degree} · {degree.specialization}
            </h3>
          </div>
          <p className="shrink-0 text-sm text-canvas/70">
            {degree.institution}
            <br />
            {degree.period}
          </p>
        </div>
      )}
    </section>
  );
}
