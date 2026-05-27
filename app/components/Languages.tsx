export const Languages = () => {
  return (
    <article>
      <div className="flex max-w-80 flex-col gap-3">
        <div className="border-zinc-850 clip-corner-xs flex items-center justify-between border bg-zinc-950/80 p-3 transition-colors duration-300 hover:border-zinc-700">
          <div className="flex min-w-0 items-center space-x-3">
            <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]"></div>
            <div className="min-w-0">
              <div className="mono truncate text-[10px] leading-tight font-bold text-white">
                FRANÇAIS
              </div>
              <div className="mono text-[8px] leading-none text-zinc-500 uppercase">
                NATIVE_FLOW
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center space-x-4 pl-3">
            <div className="flex gap-0.5">
              <div className="h-1 w-3 bg-white"></div>
              <div className="h-1 w-3 bg-white"></div>
              <div className="h-1 w-3 bg-white"></div>
              <div className="h-1 w-3 bg-white"></div>
            </div>
            <span className="mono text-[10px] font-bold text-white">
              100% OK
            </span>
          </div>
        </div>

        <div className="border-zinc-850 clip-corner-xs flex items-center justify-between border bg-zinc-950/80 p-3 transition-colors duration-300 hover:border-zinc-700">
          <div className="flex min-w-0 items-center space-x-3">
            <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-600"></div>
            <div className="min-w-0">
              <div className="mono truncate text-[10px] leading-tight font-bold text-white">
                ANGLAIS
              </div>
              <div className="mono text-[8px] leading-none text-zinc-500 uppercase">
                TOEIC_SCORE: 820
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center space-x-4 pl-3">
            <div className="flex gap-0.5">
              <div className="h-1 w-3 bg-white"></div>
              <div className="h-1 w-3 bg-white"></div>
              <div className="h-1 w-3 bg-white"></div>
              <div className="h-1 w-3 bg-zinc-800"></div>
            </div>
            <span className="mono text-[10px] font-bold text-zinc-400">
              82% EFF
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
