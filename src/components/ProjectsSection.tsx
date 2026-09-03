import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, LockKeyhole } from 'lucide-react';
import type { PortfolioData, Project } from '../types/portfolio';

function ProjectCard({ project, prominent }: { project: Project; prominent: boolean }) {
  const destination = project.links.demo ?? project.links.github;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className={`group flex min-h-[25rem] flex-col rounded-[2rem] border border-line bg-surface p-7 shadow-card transition-colors hover:border-accent/60 sm:p-9 ${
        prominent ? 'lg:col-span-2 lg:min-h-[29rem]' : ''
      }`}
    >
      <span className="eyebrow">{project.category}</span>
      <div className="mt-auto pt-16">
        <h3
          className={`text-balance font-semibold leading-tight tracking-[-0.035em] ${
            prominent ? 'text-4xl sm:text-5xl' : 'text-3xl'
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-5 max-w-3xl leading-7 text-muted">{project.description}</p>
        <ul className="mt-6 grid gap-2 text-sm leading-6">
          {project.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-line pt-5">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-canvas px-3 py-1.5 font-mono text-[0.68rem] text-muted"
            >
              {technology}
            </span>
          ))}
          <div className="ml-auto">
            {destination ? (
              <a
                href={destination}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong"
              >
                View project <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <LockKeyhole size={13} />
                {project.linkLabel ?? 'Private work'}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection({ projects }: Pick<PortfolioData, 'projects'>) {
  const categories = useMemo(
    () => ['Selected', ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  );
  const [activeCategory, setActiveCategory] = useState('Selected');
  const visibleProjects =
    activeCategory === 'Selected'
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-end">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            A few things I&apos;ve worked on.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted lg:justify-self-end">
          Projects from my professional work, open-source experiments, and graduate
          research.
        </p>
      </div>

      <div className="mt-12 flex gap-2 overflow-x-auto pb-3" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
              activeCategory === category
                ? 'border-accent bg-accent text-white dark:text-neutral-950'
                : 'border-line text-muted hover:border-accent/60 hover:text-ink'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-5 grid gap-5 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} prominent={index === 0} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
