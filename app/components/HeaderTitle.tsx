import { Link } from "react-router";

interface HeaderTitleProps {
  activeTab: "cv" | "blog";
  badgeText: string;
  bracketText: string;
  titleText: string;
  specLine1: string;
  specLine2: string;
  specBold: string;
}

export const HeaderTitle = ({
  activeTab,
  badgeText,
  bracketText,
  titleText,
  specLine1,
  specLine2,
  specBold,
}: HeaderTitleProps) => {
  const activeClass =
    "text-black hover:text-zinc-700 transition-colors underline decoration-black decoration-2 underline-offset-4";
  const inactiveClass =
    "text-zinc-500 hover:text-black transition-colors hover:underline";

  return (
    <section className="pattern-master-light relative w-full overflow-hidden border-b border-zinc-200 bg-white py-16 text-zinc-900">
      <div className="container mx-auto px-5 max-md:px-2">
        <div className="mb-6 flex gap-4 font-mono text-[11px] font-bold tracking-widest uppercase">
          <Link
            to="/"
            className={activeTab === "cv" ? activeClass : inactiveClass}
          >
            // CV
          </Link>
          <Link
            to="/blog"
            className={activeTab === "blog" ? activeClass : inactiveClass}
          >
            // BLOG
          </Link>
        </div>

        <div className="mb-8 flex flex-col items-start justify-between border-b-2 border-black pb-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="mono bg-black px-2 py-0.5 text-[9px] font-bold tracking-widest text-white animate-pulse">
                {badgeText}
              </span>
              <span className="mono text-xs font-bold tracking-widest text-zinc-600 uppercase">
                {bracketText}
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tighter text-black uppercase">
              {titleText}
            </h2>
          </div>

          <div className="mt-4 flex items-center space-x-6 select-none md:mt-0">
            <div className="dots-decal text-black opacity-30"></div>
            <div className="mono text-right text-[9px] leading-tight text-zinc-500">
              <div>{specLine1}</div>
              <div>{specLine2}</div>
              <div className="font-extrabold text-black uppercase">{specBold}</div>
            </div>
            <div className="kojima-barcode"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
