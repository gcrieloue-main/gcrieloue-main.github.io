import { motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";
import SubTitle from "./ui/SubTitle";

interface WorkExperienceProps {
  skills: string[];
  title: string;
  date: string;
  logoSrc?: string;
}

export const WorkExperience: FC<PropsWithChildren<WorkExperienceProps>> = ({
  skills,
  title,
  date,
  logoSrc,
  children,
}) => {
  // Deduplicate and clean trailing punctuation from skill names
  const uniqueSkills = Array.from(
    new Set(skills.map((s) => s.trim().replace(/,+$/, ""))),
  );

  return (
    <motion.article
      className="group card-minimal relative p-6 md:p-8 print:mb-2.5 print:rounded-none print:border-x-0 print:border-t print:border-b-0 print:border-zinc-200 print:bg-transparent print:p-0 print:pt-2.5 print:pb-0.5 first:print:border-t-0 first:print:pt-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <SubTitle level="h3" subTitle={date} logoSrc={logoSrc}>
        {title}
      </SubTitle>

      <div className="mt-5 space-y-6 print:mt-2 print:space-y-2">
        <div className="prose prose-zinc prose-p:text-sm prose-p:leading-relaxed prose-p:text-zinc-600 prose-ul:text-sm prose-ul:text-zinc-600 prose-li:my-1 prose-h4:text-xs prose-h4:font-mono prose-h4:font-semibold prose-h4:text-zinc-500 prose-h4:uppercase prose-h4:tracking-wider prose-h4:mb-2 print:prose-p:my-1 print:prose-p:text-[9pt] print:prose-p:leading-relaxed print:prose-ul:my-1 print:prose-ul:text-[8.5pt] print:prose-li:my-0.5 print:prose-h4:mb-1 print:prose-h4:text-[8pt] max-w-none">
          {children}
        </div>

        <div className="border-t border-zinc-100 pt-4 print:border-t-0 print:pt-1">
          <p className="mb-2.5 font-mono text-[11px] font-medium tracking-wider text-zinc-400 uppercase print:hidden">
            Environnement technique
          </p>
          {/* Web: tag pills */}
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0 print:hidden">
            {skills.map((skill) => (
              <li
                key={skill}
                className="tag"
                dangerouslySetInnerHTML={{ __html: skill }}
              />
            ))}
          </ul>
          {/* Print: clean, uncluttered typographic line */}
          <div className="hidden font-mono text-[8.5pt] leading-normal text-zinc-700 print:block">
            <span className="mr-1.5 text-[8pt] font-semibold tracking-wider text-zinc-900 uppercase">
              Technologies :
            </span>
            {uniqueSkills.map((skill, idx) => (
              <span key={skill}>
                <span dangerouslySetInnerHTML={{ __html: skill }} />
                {idx < uniqueSkills.length - 1 && (
                  <span className="mx-1 text-zinc-400">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
