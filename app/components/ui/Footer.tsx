import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="container mx-auto p-4 py-8 text-zinc-300">
      <div className="flex justify-between">
        <div className="mono flex flex-row gap-16 text-[10px] tracking-[0.2em] uppercase">
          <div className="space-y-3">
            <p className="border-b border-zinc-700 pb-2 font-semibold text-zinc-200">
              FIND_ME
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/gcrieloue-main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  GITHUB
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/gilles-crieloue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="border-b border-zinc-700 pb-2 font-semibold text-zinc-200">
              LINKS
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  CV
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mono flex items-center gap-4 self-end text-[9px] text-zinc-400 select-none md:self-center">
          <img
            className="w-10 opacity-80 drop-shadow-sm transition-opacity select-none hover:opacity-100"
            src="/images/logo-gc.svg"
            alt="GC Logo"
          />
          <div className="flex flex-col gap-1">
            <span>SYSTEM VERSION // {__APP_VERSION__}</span>
            <span>COMPILED // {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
