import React from "react";

type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  children: React.ReactNode;
  subTitle?: string;
  level?: TitleLevel;
  className?: string;
  alternative?: "light" | "dark";
  decorationText?: string;
  logoSrc?: string;
}

const SubTitle = ({
  children,
  subTitle,
  level = "h3",
  className = "",
  logoSrc,
}: TitleProps) => {
  const Tag = level;
  const resolvedLogo = logoSrc
    ? logoSrc.startsWith("/")
      ? logoSrc
      : `/${logoSrc}`
    : undefined;

  return (
    <div
      className={`flex flex-col gap-2 border-b border-zinc-100 pb-3 sm:flex-row sm:items-center sm:justify-between print:break-after-avoid print:border-b-0 print:pb-0.5 ${className}`}
      style={{ breakAfter: "avoid", pageBreakAfter: "avoid" }}
    >
      <div className="flex min-w-0 items-center gap-3">
        {resolvedLogo && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200/70 bg-white p-1.5 shadow-2xs print:h-6 print:w-6 print:border-zinc-200 print:p-0.5">
            <img
              src={resolvedLogo}
              alt=""
              className="max-h-full max-w-full object-contain print:grayscale"
              loading="lazy"
            />
          </div>
        )}
        <Tag className="text-lg font-semibold tracking-tight text-zinc-950 md:text-xl print:text-sm">
          {children}
        </Tag>
      </div>
      {subTitle && (
        <span className="shrink-0 font-mono text-xs font-normal text-zinc-500 print:text-[10px]">
          {subTitle}
        </span>
      )}
    </div>
  );
};

export default SubTitle;
