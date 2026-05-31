interface FooterProps {
  rightLabel?: string;
}

export const Footer = ({
  rightLabel = `SYSTEM VERSION: ${__APP_VERSION__} // COMPILED: ${new Date().getFullYear()}`,
}: FooterProps) => {
  return (
    <footer className="p-4 py-8 text-zinc-300">
      <div className="container mx-auto flex flex-col items-start justify-between gap-4 px-5 max-md:px-2 md:flex-row md:items-center">
        <ul className="space-y-3 text-sm">
          <li className="group flex items-center gap-3">
            <span className="text-gray-500 transition-colors">Email:</span>
            <a
              href="mailto:gilles@crieloue.fr"
              className="font-medium underline decoration-white/20 underline-offset-4 transition-all hover:text-blue-400"
            >
              gilles@crieloue.fr
            </a>
          </li>
          <li className="group flex items-center gap-3">
            <span className="text-gray-500 transition-colors">Web:</span>
            <a
              href="http://gilles.crieloue.fr"
              className="font-medium underline decoration-white/20 underline-offset-4 transition-all hover:text-blue-400"
            >
              gilles.crieloue.fr
            </a>
          </li>
        </ul>
        {rightLabel && (
          <div className="mono self-end text-[9px] text-zinc-500 select-none md:self-center">
            {rightLabel}
          </div>
        )}
      </div>
    </footer>
  );
};
