import React from "react";

type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  children: React.ReactNode;
  subTitle?: string;
  level?: TitleLevel;
  className?: string;
  icon?: React.ReactNode;
    alternative?: "light" | "dark";
}

const Title = ({ children, subTitle = "01_", level = "h2", className = "", icon, alternative="dark" }: TitleProps) => {
  const Tag = level;

if (alternative === "light")
  return    <div className="flex items-center space-x-3 border-b-2 border-zinc-300 pb-2">
                            <span className="bg-black text-white px-2 py-0.5 mono text-[10px] font-bold text-nowrap">{subTitle}</span>
                            <Tag className="text-xl font-extrabold uppercase tracking-tight text-black">{children}</Tag>
                        </div>

   return (
      <div className="mb-8 flex justify-between items-center border-b border-zinc-850 pb-3">
                    <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-3 bg-white"></span>
                        <Tag className="mono text-[10px] text-white font-bold uppercase tracking-widest">{children}</Tag>
                    </div>
                    <span className="mono text-[8px] text-zinc-500">POLLING_INTERVAL: 12ms</span>
                </div>
   );

};

export default Title;
