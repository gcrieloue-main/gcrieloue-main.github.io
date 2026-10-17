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
  return (
    <motion.article
      className="card-minimal relative p-6 md:p-8"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <SubTitle level="h3" subTitle={date}>
        {title}
      </SubTitle>

      <div className="mt-5 space-y-6">
        <div className="prose prose-zinc prose-p:text-sm prose-p:leading-relaxed prose-p:text-zinc-600 prose-ul:text-sm prose-ul:text-zinc-600 prose-li:my-1 prose-h4:text-xs prose-h4:font-mono prose-h4:font-semibold prose-h4:text-zinc-500 prose-h4:uppercase prose-h4:tracking-wider prose-h4:mb-2 max-w-none">
          {children}
        </div>

        <div className="border-t border-zinc-100 pt-4">
          <p className="mb-2.5 font-mono text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
            Environnement technique
          </p>
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {skills.map((skill) => (
              <li
                key={skill}
                className="tag"
                dangerouslySetInnerHTML={{ __html: skill }}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};
