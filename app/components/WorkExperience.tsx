import { motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

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
      className="workExperience bg-white/10 rounded-xl width-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <header className="flex gap-5 m-2 bg-white/10 p-2 rounded-md">
        <div className="content-center">
          {logoSrc && (
            <img
              className="rounded-sm"
              src={logoSrc}
              alt={title}
              width="25px"
              height="25px"
            />
          )}
        </div>
        <div>
          {" "}
          <h3 className="flex gap-2 items-center text-xl font-semibold text-gray-100">
            {title}
          </h3>
          <span className="font-semibold text-sm text-gray-300 uppercase">
            {date}
          </span>
        </div>
      </header>

      <div className="prose dark:prose-invert px-4">
        <div>
          <div className="text-gray-300">{children}</div>
          <h4>Envir. Technique :</h4>
          <ul className="tag-list">
            {skills.map((skill) => (
              <li key={skill} dangerouslySetInnerHTML={{ __html: skill }} />
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};
