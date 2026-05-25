import { twMerge } from "tailwind-merge";

import fr from "./FR.svg";
import gb from "./GB.svg";

const languages = [
  {
    flag: <img src={fr} alt="FR" width={25} />,
    text: "Français : langue native",
  },
  {
    flag: <img src={gb} alt="EN" width={25} />,
    text: "Anglais : bonne maitrise (Toeic score 820)",
  },
];

const FR = fr;

export const Languages = () => {
  return (
    <article>
      <div>
        <div className="clip-corner-sm flex border-1 border-zinc-700 bg-black/10 text-zinc-300">
          {languages.map(({ flag, text }, index) => (
            <div
              key={text}
              className={twMerge(
                "group flex flex-1 items-center gap-2",
                index !== languages.length - 1
                  ? "clip-slant-right mr-2 bg-white/10 p-2"
                  : "",
              )}
            >
              <span className="mx-2 flex-shrink-0 overflow-hidden rounded-xs saturate-70 transition-all group-hover:saturate-100">
                {flag}
              </span>
              <span className="text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
