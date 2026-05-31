export const Footer = () => {
  return (
    <footer className="p-4 py-8 text-zinc-300">
      <div className="container mx-auto flex flex-col items-start justify-between gap-4 px-5 max-md:px-2 sm:flex-row md:items-center">
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
        <div className="mono flex items-center gap-4 self-end text-[9px] text-zinc-500 select-none md:self-center">
          <img
            className="w-10 opacity-50 drop-shadow-sm select-none"
            src="/images/logo-gc.svg"
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
