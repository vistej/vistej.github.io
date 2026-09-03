import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';

interface NavbarProps {
  personal: PortfolioData['personal'];
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const links = [
  ['Work', '#projects'],
  ['Journey', '#experience'],
  ['Capabilities', '#skills'],
  ['About', '#about'],
] as const;

export function Navbar({ personal, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#about" className="group flex items-center gap-3 font-semibold">
          <span className="grid size-8 place-items-center rounded-full bg-ink text-xs text-canvas transition-transform group-hover:-rotate-6">
            VP
          </span>
          <span className="hidden sm:inline">{personal.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/60 hover:text-ink"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-canvas px-5 py-5 md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium hover:bg-surface"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
