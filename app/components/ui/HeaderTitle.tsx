import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Github, Linkedin, Printer } from "lucide-react";

interface HeaderTitleProps {
  activeTab: "cv" | "blog";
  badgeText?: string;
  bracketText?: string;
  titleText?: string;
  subtitleText?: string;
  specLine1?: string;
  specLine2?: string;
  specBold?: string;
}

export const HeaderTitle = ({
  activeTab,
  titleText = "Gilles Crieloue",
  subtitleText = "Ingénieur Logiciel Senior Full-Stack & Freelance IT",
}: HeaderTitleProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setIsScrolled((prev) => {
          // Collapse header only when scrolled down past 80px
          if (!prev && scrollY > 80) {
            return true;
          }
          // Restore full header only when scrolled back near the top (< 25px)
          if (prev && scrollY < 25) {
            return false;
          }
          return prev;
        });
        rafId = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isScrolled ? "shadow-xs" : ""
        }`}
      >
        <div
          className={`container mx-auto max-w-6xl px-6 transition-all duration-300 ease-in-out ${
            isScrolled ? "py-2.5 md:py-3" : "py-6 md:py-8"
          }`}
        >
          <div className="flex flex-col gap-3 transition-all duration-300 ease-in-out md:flex-row md:items-center md:justify-between">
            {/* Identity & Status */}
            <div className="flex flex-col justify-center">
              {/* Availability status badge - hides smoothly on scroll */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isScrolled
                    ? "pointer-events-none grid-rows-[0fr] opacity-0"
                    : "grid-rows-[1fr] opacity-100"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2.5 pb-2">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="font-mono text-xs font-medium tracking-wide text-zinc-500 uppercase">
                      Disponible pour missions • Nantes / Remote
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Compact Subtitle on scroll */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0">
                <h1
                  className={`font-semibold tracking-tight text-zinc-950 transition-all duration-300 ease-in-out ${
                    isScrolled ? "text-lg md:text-xl" : "text-3xl md:text-4xl"
                  }`}
                >
                  <Link to="/" className="transition-opacity hover:opacity-75">
                    {titleText}
                  </Link>
                </h1>

                {/* In scrolled mode, show a discreet short label inline */}
                <span
                  className={`hidden items-center font-mono text-xs whitespace-nowrap text-zinc-400 transition-all duration-300 ease-in-out sm:inline-flex ${
                    isScrolled
                      ? "max-w-xs opacity-100"
                      : "pointer-events-none max-w-0 overflow-hidden opacity-0"
                  }`}
                >
                  / Senior Full-Stack
                </span>
              </div>

              {/* Full Subtitle - folds away smoothly on scroll */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isScrolled
                    ? "pointer-events-none grid-rows-[0fr] opacity-0"
                    : "grid-rows-[1fr] opacity-100"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-xl pt-1.5 text-sm font-normal text-zinc-600 md:text-base">
                    {subtitleText}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation & External Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 md:justify-end">
              {/* Nav Tabs */}
              <nav className="flex items-center gap-1 rounded-lg border border-zinc-200/60 bg-zinc-100/80 p-1 text-xs font-medium">
                <Link
                  to="/"
                  className={`rounded-md px-3.5 py-1.5 transition-all duration-200 ${
                    activeTab === "cv"
                      ? "bg-white font-semibold text-zinc-950 shadow-xs"
                      : "text-zinc-600 hover:bg-white/50 hover:text-zinc-950"
                  }`}
                >
                  Parcours / CV
                </Link>
                <Link
                  to="/blog"
                  className={`rounded-md px-3.5 py-1.5 transition-all duration-200 ${
                    activeTab === "blog"
                      ? "bg-white font-semibold text-zinc-950 shadow-xs"
                      : "text-zinc-600 hover:bg-white/50 hover:text-zinc-950"
                  }`}
                >
                  Articles
                </Link>
              </nav>

              {/* Quick social links & print action */}
              <div className="flex items-center gap-1.5 border-l border-zinc-200 pl-3">
                {activeTab === "cv" && (
                  <button
                    onClick={() => window.print()}
                    className="flex cursor-pointer items-center gap-1 rounded-md p-1.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                    title="Imprimer ou enregistrer le CV en PDF"
                    aria-label="Imprimer ou exporter en PDF"
                  >
                    <Printer className="h-4 w-4" />
                    <span className="hidden font-mono text-[11px] sm:inline">
                      PDF
                    </span>
                  </button>
                )}
                <a
                  href="https://github.com/gcrieloue-main"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/gilles-crieloue"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stable placeholder in normal document flow: prevents content jumping when header shrinks */}
      <div
        className="pointer-events-none invisible w-full select-none print:hidden"
        aria-hidden="true"
      >
        <div className="container mx-auto max-w-6xl px-6 py-6 md:py-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2.5 pb-2">
                <span className="h-2 w-2"></span>
                <span className="font-mono text-xs uppercase">Disponible</span>
              </div>
              <div className="text-3xl font-semibold md:text-4xl">
                {titleText}
              </div>
              <p className="max-w-xl pt-1.5 text-sm md:text-base">
                {subtitleText}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="h-[38px] w-32"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
