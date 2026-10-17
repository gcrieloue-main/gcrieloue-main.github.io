import { Link } from "react-router";
import { Github, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-200/80 bg-white py-12 text-zinc-600 transition-colors md:py-16 print:hidden">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Identity & Mission */}
          <div className="max-w-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold tracking-tight text-zinc-950">
                Gilles Crieloue
              </span>
              <span className="text-zinc-300">•</span>
              <span className="font-mono text-xs text-zinc-500">
                Freelance IT
              </span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              Conception d'architectures logicielles résilientes, développement
              full-stack et intégration d'agents IA.
            </p>
          </div>

          {/* Navigation & Social */}
          <div className="flex flex-wrap items-center gap-8 text-xs font-medium">
            <nav className="flex items-center gap-6">
              <Link
                to="/"
                className="text-zinc-600 transition-colors hover:text-zinc-950"
              >
                Parcours / CV
              </Link>
              <Link
                to="/blog"
                className="text-zinc-600 transition-colors hover:text-zinc-950"
              >
                Articles
              </Link>
            </nav>

            <div className="flex items-center gap-4 border-l border-zinc-200 pl-6">
              <a
                href="https://github.com/gcrieloue-main"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-600 transition-colors hover:text-zinc-950"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/gilles-crieloue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-600 transition-colors hover:text-zinc-950"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex cursor-pointer items-center gap-1 rounded-md border border-zinc-200 p-2 text-zinc-500 transition-all hover:bg-zinc-50 hover:text-zinc-950"
              title="Haut de page"
              aria-label="Retour en haut de page"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-end border-t border-zinc-100 pt-6 font-mono text-[11px] text-zinc-400">
          <div>© {new Date().getFullYear()} Gilles Crieloue</div>
        </div>
      </div>
    </footer>
  );
};
