import { Globe } from "lucide-react";

export const Languages = () => {
  return (
    <article className="card-minimal p-5 print:border-0 print:bg-transparent print:p-0 print:shadow-none">
      <div className="mb-3 flex items-center gap-2">
        <Globe className="h-4 w-4 text-zinc-500" />
        <h3 className="font-mono text-xs font-medium tracking-wider text-zinc-500 uppercase">
          Langues
        </h3>
      </div>

      <div className="grid grid-cols-1 divide-y divide-zinc-200/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {/* French */}
        <div className="flex items-center justify-between pb-3 sm:pr-6 sm:pb-0">
          <div>
            <p className="text-sm font-semibold text-zinc-900">Français</p>
            <p className="text-xs text-zinc-500">Langue maternelle</p>
          </div>
          <span className="tag shrink-0">Natif</span>
        </div>

        {/* English */}
        <div className="flex items-center justify-between pt-3 sm:pt-0 sm:pl-6">
          <div>
            <p className="text-sm font-semibold text-zinc-900">Anglais</p>
            <p className="text-xs text-zinc-500">Usage professionnel</p>
          </div>
          <span className="tag shrink-0">TOEIC 820</span>
        </div>
      </div>
    </article>
  );
};
