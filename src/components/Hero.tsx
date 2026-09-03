import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, MapPin } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';

type HeroProps = Pick<PortfolioData, 'personal'>;

export function Hero({ personal }: HeroProps) {
  return (
    <section id="about" className="relative overflow-hidden border-b border-line">
      <div className="noise absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-5xl"
        >
          <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="eyebrow">{personal.title}</p>
            <span className="flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={14} aria-hidden="true" />
              {personal.location}
            </span>
          </div>
          <h1 className="text-balance max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-7xl lg:text-[6.4rem]">
            Hi, I&apos;m {personal.name.split(' ')[0]}
            <span className="text-accent">.</span>
          </h1>
          <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-2xl">
              <p className="text-xl font-medium leading-8 sm:text-2xl">{personal.headline}.</p>
              <p className="mt-4 text-lg leading-8 text-muted">{personal.bio}</p>
            </div>
            <div className="flex items-center gap-3">
              {personal.socials.github && (
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent-strong"
                >
                  <Github size={18} />
                </a>
              )}
              {personal.socials.linkedin && (
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent-strong"
                >
                  <Linkedin size={18} />
                </a>
              )}
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:text-neutral-950"
              >
                Explore work <ArrowDownRight size={17} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
