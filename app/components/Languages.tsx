import { Globe } from "lucide-react";

export const Languages = () => {
  return (
    <article className="card-minimal p-5 print:border-0 print:bg-transparent print:p-0 print:shadow-none">
      <div className="mb-4 flex items-center gap-2 print:hidden">
        <Globe className="h-4 w-4 text-zinc-500" />
        <h3 className="font-mono text-xs font-medium tracking-wider text-zinc-500 uppercase">
          Langues
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 print:flex print:items-center print:gap-2 print:text-[9pt]">
        {/* French */}
        <div className="flex items-center justify-between rounded-lg border border-zinc-200/60 bg-zinc-50 p-3 print:gap-1 print:border-0 print:bg-transparent print:p-0">
          <span className="text-sm font-semibold text-zinc-900 print:text-[9pt]">
            Langues :
          </span>
          <span className="text-xs text-zinc-500 print:font-mono print:text-[8.5pt] print:text-zinc-700">
            Français (Natif)
          </span>
        </div>

        <span className="hidden font-mono text-[8.5pt] text-zinc-700 print:inline">
          •
        </span>

        {/* English */}
        <div className="flex items-center justify-between rounded-lg border border-zinc-200/60 bg-zinc-50 p-3 print:gap-1 print:border-0 print:bg-transparent print:p-0">
          <span className="text-sm font-semibold text-zinc-900 print:hidden">
            Anglais :
          </span>
          <span className="text-xs text-zinc-500 print:font-mono print:text-[8.5pt] print:text-zinc-700">
            Anglais (Professionnel, TOEIC 820)
          </span>
        </div>
      </div>
    </article>
  );
};
