import React from "react";

type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  children: React.ReactNode;
  subTitle?: string;
  level?: TitleLevel;
  className?: string;
  alternative?: "light" | "dark";
  decorationText?: string;
}

const Title = ({
  children,
  subTitle = "01_",
  level = "h2",
  className = "",
  alternative = "dark",
  decorationText = "POLLING_INTERVAL: 12ms",
}: TitleProps) => {
  const Tag = level;

  if (alternative === "light")
    return (
      <div className="flex items-center space-x-3 border-b-2 border-zinc-300 pb-2">
        <span className="mono bg-black px-2 py-0.5 text-[10px] font-bold text-nowrap text-white">
          {subTitle}
        </span>
        <Tag className="text-xl font-extrabold tracking-tight text-black uppercase">
          {children}
        </Tag>
      </div>
    );

  return (
    <div className="border-zinc-850 mb-8 flex items-center justify-between border-b pb-3">
      <div className="flex items-center space-x-2">
        <span className="h-3 w-1.5 bg-white"></span>
        <Tag className="mono text-[10px] font-bold tracking-widest text-white uppercase">
          {children}
        </Tag>
      </div>
      <span className="mono text-[8px] text-zinc-500 select-none">
        {decorationText}
      </span>
    </div>
  );
};

export default Title;
