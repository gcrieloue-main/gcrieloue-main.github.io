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
      className="workExperience width-full mt-8 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <SubTitle level="h3" subTitle={date} alternative="light">
        {title}
      </SubTitle>

      <div>
        <div className="prose prose-headings:font-semibold prose-p:text-sm prose-ul:text-sm prose-p:leading-relaxed prose-p:text-zinc-800 prose-headings:text-zinc-800 px-4">
          <div>{children}</div>
          <h4>Envir. Technique :</h4>
          <ul className="tag-list tag-list-dark">
            {skills.map((skill) => (
              <li key={skill} dangerouslySetInnerHTML={{ __html: skill }} />
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};
