import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Github, Linkedin } from "lucide-react";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isScrolled ? "shadow-xs" : ""
      }`}
    >
      <div
        className={`container mx-auto max-w-6xl px-6 transition-all duration-300 ease-in-out ${
          isScrolled ? "py-2.5 md:py-3" : "py-6 md:py-8"
        }`}
      >
        <div
          className={`flex flex-col transition-all duration-300 ease-in-out md:flex-row md:justify-between ${
            isScrolled ? "gap-2 md:items-center" : "gap-6 md:items-end"
          }`}
        >
          {/* Identity & Status */}
          <div className="flex flex-col justify-center">
            {/* Availability status badge - hides smoothly on scroll */}
            <div
              className={`flex items-center gap-2.5 transition-all duration-300 ease-in-out ${
                isScrolled
                  ? "pointer-events-none mb-0 max-h-0 -translate-y-1 overflow-hidden opacity-0"
                  : "mb-2.5 max-h-8 translate-y-0 opacity-100"
              }`}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs font-medium tracking-wide text-zinc-500 uppercase">
                Disponible pour missions • Nantes / Remote
              </span>
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
                className={`hidden font-mono text-xs text-zinc-400 transition-all duration-300 ease-in-out sm:inline ${
                  isScrolled
                    ? "max-w-xs opacity-100"
                    : "pointer-events-none max-w-0 overflow-hidden opacity-0"
                }`}
              >
                / Senior Full-Stack
              </span>
            </div>

            {/* Full Subtitle - folds away smoothly on scroll */}
            <p
              className={`max-w-xl text-sm font-normal text-zinc-600 transition-all duration-300 ease-in-out md:text-base ${
                isScrolled
                  ? "pointer-events-none mt-0 max-h-0 -translate-y-1 overflow-hidden opacity-0"
                  : "mt-1.5 max-h-12 translate-y-0 opacity-100"
              }`}
            >
              {subtitleText}
            </p>
          </div>

          {/* Navigation & External Links */}
          <div
            className={`flex flex-wrap items-center justify-between gap-4 transition-all duration-300 md:justify-end ${
              isScrolled ? "pt-0" : "pt-2 md:pt-0"
            }`}
          >
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

            {/* Quick social links */}
            <div className="flex items-center gap-1.5 border-l border-zinc-200 pl-3">
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
  );
};
