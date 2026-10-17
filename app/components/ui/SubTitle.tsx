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

const SubTitle = ({
  children,
  subTitle,
  level = "h3",
  className = "",
}: TitleProps) => {
  const Tag = level;

  return (
    <div
      className={`flex flex-col gap-1 border-b border-zinc-100 pb-2 sm:flex-row sm:items-baseline sm:justify-between print:break-after-avoid print:border-b-0 print:pb-0.5 ${className}`}
      style={{ breakAfter: "avoid", pageBreakAfter: "avoid" }}
    >
      <Tag className="text-lg font-semibold tracking-tight text-zinc-950 md:text-xl print:text-sm">
        {children}
      </Tag>
      {subTitle && (
        <span className="shrink-0 font-mono text-xs font-normal text-zinc-500 print:text-[10px]">
          {subTitle}
        </span>
      )}
    </div>
  );
};

export default SubTitle;
