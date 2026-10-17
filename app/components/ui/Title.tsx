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
  action?: React.ReactNode;
}

const cleanSubtitle = (sub?: string): string | null => {
  if (!sub) return null;
  // Convert legacy SECTION_01_ABOUT_ME or SECTION_EXPERIENCES to clean editorial label
  const cleaned = sub
    .replace(/^SECTION_\d+_?/i, "")
    .replace(/^SECTION_/i, "")
    .replace(/_MATRIX|_TELEM|_FEED/g, "")
    .replace(/\/\/.*/, "")
    .replace(/_/g, " ")
    .trim();
  return cleaned || null;
};

const Title = ({
  children,
  subtitle,
  level = "h2",
  className = "",
  icon,
  action,
}: TitleProps) => {
  const Tag = level;
  const label = cleanSubtitle(subtitle);

  return (
    <div
      className={`mb-8 border-b border-zinc-200/80 pb-4 md:mb-12 ${className}`}
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="space-y-1.5">
          {label && (
            <span className="font-mono text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
              {label}
            </span>
          )}
          <div className="flex items-center gap-3">
            {icon && (
              <span className="text-zinc-400 [&>svg]:h-5 [&>svg]:w-5">
                {icon}
              </span>
            )}
            <Tag className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
              {children}
            </Tag>
          </div>
        </div>

        {action && (
          <div className="w-full shrink-0 pb-0.5 sm:w-auto">{action}</div>
        )}
      </div>
    </div>
  );
};

export default Title;
