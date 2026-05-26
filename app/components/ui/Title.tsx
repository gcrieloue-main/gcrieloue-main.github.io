import React from "react";

type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  children: React.ReactNode;
  subtitle?: string;
  decorationText?: string;
   decorationTextSecondary?: string;
  level?: TitleLevel;
  className?: string;
  icon?: React.ReactNode;
  alternative?: "light" | "dark";
}

const Title = ({
  children,
  subtitle = "SECTION_03_TELEM_MATRIX",
  level = "h2",
  className = "",
  icon,
  alternative = "dark",
  decorationText = "SAMPLE_RATE: 250Hz",
  decorationTextSecondary = "LIVE_FEED: STABLE",
}: TitleProps) => {
  const Tag = level;

  const baseStyles = "text-lg uppercase mb-2 flex gap-2";

  if (alternative === "light")
    return (
      <div className="relative mb-12 border-b-4 border-black pb-8">
        <div className="mb-4 flex items-start justify-between gap-2">
          <span className="mono bg-black px-2.5 py-1 text-[9px] font-extrabold tracking-[0.2em] text-nowrap text-white">
            [ {subtitle} ]
          </span>
          <span className="mono text-[9px] font-black tracking-widest text-zinc-400 uppercase select-none">
            REF: PROT_DEPT_001
          </span>
        </div>

        <Tag className="mt-2 text-4xl leading-none font-black tracking-tighter text-black uppercase">
          {children}
        </Tag>

        <div className="mono mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-4 text-[10px] text-zinc-500 select-none">
          <div>
            SÉCURITÉ :{" "}
            <span className="font-extrabold text-black">
              NIVEAU 5 [ MAXIMUM SECURE ]
            </span>
          </div>
          <div>
            DISTRIBUTION :{" "}
            <span className="font-extrabold text-black">
              NEURAL-TEK LABS ONLY
            </span>
          </div>
          <div className="kojima-barcode"></div>
        </div>
      </div>
    );

  return (
    <div className="border-zinc-850 mb-10 flex items-end justify-between space-x-3 border-b pb-4">
      <div className="space-y-1">
        <span className="mono text-xs font-bold tracking-widest text-nowrap text-white uppercase">
          [ {subtitle} ]
        </span>
        <Tag className="text-2xl font-black tracking-tight text-white uppercase">
          {children}
        </Tag>
      </div>
      <div className="flex items-center space-x-3 select-none">
        <span className="mono border border-zinc-700 px-2 py-0.5 text-[8px] text-zinc-400">
          {decorationText}
        </span>
        <span className="mono hidden text-[10px] text-zinc-500 sm:block">
          {decorationTextSecondary}
        </span>
      </div>
    </div>
  );

  return (
    <Tag className={`${baseStyles} ${className}`}>
      {icon}
      {children}
    </Tag>
  );
};

export default Title;
