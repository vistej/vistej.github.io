import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { useTheme } from './hooks/useTheme';
import { portfolio } from './lib/schema';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm text-canvas focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar personal={portfolio.personal} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero personal={portfolio.personal} />
        <ProjectsSection projects={portfolio.projects} />
        <ExperienceSection experience={portfolio.experience} />
        <CapabilitiesSection skills={portfolio.skills} education={portfolio.education} />
      </main>
      <Footer personal={portfolio.personal} />
    </div>
  );
}
