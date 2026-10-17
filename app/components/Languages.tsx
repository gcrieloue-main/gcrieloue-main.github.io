import { Globe } from "lucide-react";

export const Languages = () => {
  return (
    <article className="card-minimal p-5">
      <div className="mb-4 flex items-center gap-2">
        <Globe className="h-4 w-4 text-zinc-500" />
        <h3 className="font-mono text-xs font-medium tracking-wider text-zinc-500 uppercase">
          Langues
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* French */}
        <div className="flex items-center justify-between rounded-lg border border-zinc-200/60 bg-zinc-50 p-3">
          <div>
            <div className="text-sm font-semibold text-zinc-900">Français</div>
            <div className="text-xs text-zinc-500">Langue maternelle</div>
          </div>
          <span className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-600">
            Natif
          </span>
        </div>

        {/* English */}
        <div className="flex items-center justify-between rounded-lg border border-zinc-200/60 bg-zinc-50 p-3">
          <div>
            <div className="text-sm font-semibold text-zinc-900">Anglais</div>
            <div className="text-xs text-zinc-500">
              Professionnel (TOEIC 820)
            </div>
          </div>
          <span className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-600">
            B2 / C1
          </span>
        </div>
      </div>
    </article>
  );
};
