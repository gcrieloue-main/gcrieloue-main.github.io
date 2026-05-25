import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Title from "./Title";

export const Education = () => {
  return (
    <div className="">
      <Title
        level="h2"
        icon={<GraduationCap />}
        subtitle="SECTION_03_EDUCATION"
      >
        Formation
      </Title>
      <div className="flex justify-between gap-10 p-4">
        <motion.article
          id="education"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-full px-2 py-1">
            <div className="prose dark:prose-invert">
              <ul>
                <li>
                  2008 - 2010 :{" "}
                  <strong>Master ALMA (Architectures Logicielles)</strong> à
                  l'Université de Nantes
                </li>
                <li>
                  2007 - 2008 : Licence Informatique à l'Université de Nantes
                </li>
                <li>2005 - 2007 : DUT Informatique à l'Université de Nantes</li>
              </ul>
            </div>
          </div>
        </motion.article>
        <div className="flex rounded-xl max-lg:hidden">
          <h3 className="text-mono text-vertical clip-corner-sm mr-2 max-w-40 border-r-2 border-zinc-700 bg-white/5 p-1 text-center text-sm uppercase [writing-mode:vertical-rl]">
            // Certifications
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="clip-corner-sm flex max-w-40 flex-col items-center gap-3 border-1 border-zinc-800 bg-black/10 p-2 grayscale">
              <img
                src="//images.ctfassets.net/oamir411dfuu/4UybNQnbhP8T8ePXL5suhn/ae6636795ad6ce74fd7ea6b440fc1c8f/AWS-Developer-Associate-2020.png"
                alt="AWS-Developer-Associate-2020"
                width="80"
                height="auto"
              />
              <span className="text-center text-sm">
                <a href="https://www.youracclaim.com/badges/58e7bc73-22b5-45c6-af0e-297f2058fde2">
                  AWS Developer Associate
                </a>
              </span>
            </div>
            <div className="clip-corner-sm flex max-w-40 flex-col items-center gap-3 border-1 border-zinc-800 bg-black/10 p-2 grayscale">
              <img
                src="//images.ctfassets.net/oamir411dfuu/1IqY5wK96YNf9svZ7kC0rq/1fbc1c89477fb18e4218606303738e31/Oracle_Associates_Badge__1_.png"
                alt="Oracle-Certification-badge OC-Associate"
                width="80"
                height="auto"
              />
              <span className="text-center text-sm">
                <a href="https://www.youracclaim.com/badges/cc833095-25ab-47da-b13e-051e017646dc">
                  Java SE 8 Programmer
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
