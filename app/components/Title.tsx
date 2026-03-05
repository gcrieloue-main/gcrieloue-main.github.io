import React from "react";

type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  children: React.ReactNode;
  level?: TitleLevel;
  className?: string;
  icon?: React.ReactNode;
}

const Title = ({ children, level = "h2", className = "", icon }: TitleProps) => {
  const Tag = level;


  const baseStyles = "text-lg uppercase mb-2 flex gap-2";

  return <Tag className={`${baseStyles} ${className}`}>{icon}{children}</Tag>;
};

export default Title;
