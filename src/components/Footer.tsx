import { useState } from 'react';
import { Check, Copy, Download, Github, Linkedin, Mail } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';

export function Footer({ personal }: Pick<PortfolioData, 'personal'>) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <footer id="contact" className="bg-ink text-canvas">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          Start a conversation
        </p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="text-balance max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-7xl">
              Want to get in touch?
            </h2>
            <a
              href={`mailto:${personal.email}`}
              className="mt-8 inline-flex items-center gap-2 border-b border-canvas/30 pb-1 text-lg transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
              {personal.email}
            </a>
          </div>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-canvas/25 px-5 py-3 text-sm hover:border-accent"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>

        <div className="mt-20 flex flex-col gap-5 border-t border-canvas/20 pt-7 text-sm text-canvas/65 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {personal.name}</p>
          <div className="flex flex-wrap items-center gap-5 sm:ml-auto">
            {personal.socials.github && (
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent"
              >
                <Github size={15} /> GitHub
              </a>
            )}
            {personal.socials.linkedin && (
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            )}
            {personal.resumeUrl && (
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center gap-1.5 hover:text-accent"
                download
              >
                <Download size={15} /> Résumé
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
