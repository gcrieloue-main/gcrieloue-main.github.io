import { useStore } from "~/store";
import { useEffect } from "react";
import Title from "./Title";
import { User } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export const About = () => {
  const { cvParagraphs, fetchCvParagraphs } = useStore();

  useEffect(() => {
    void fetchCvParagraphs();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Time between each child's animation
        delayChildren: 0.5, // Initial wait before the first one starts
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="flex h-full flex-col">
      <Title level="h2" icon={<User />} subtitle="SECTION_01_ABOUT_ME">
        À propos de moi
      </Title>
      <div className="flex flex-1 justify-between gap-10 rounded-xl border-1 border-zinc-900 p-4">
        <article id="about" className="about">
          <div className="flex flex-col gap-8 text-white">
            <div className="flex flex-row gap-10">
              <div className="pattern-stripes flex flex-col gap-2 rounded-lg border-slate-500/30 bg-black/20 p-4 text-sm text-gray-300">
                <p>Je suis Gilles CRIELOUE, Ingénieur logiciel.</p>
                <p>
                  Je suis détenteur d'un master 2 en architectures logicielles,
                  et fort d'une expérience de plus de 15 ans en développement.
                </p>
                <p>
                  J'ai un profil Full-Stack avec des expériences fortes en
                  Java/Kotlin et avec les frameworks Javascript tels que React.
                </p>
              </div>
            </div>
            <motion.div
              className="flex flex-wrap gap-4 md:px-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex grow flex-col justify-center space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xs font-bold tracking-tighter text-gray-500 uppercase">
                    Disponibilité
                  </h3>
                  <p className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                    <span className="font-semibold">Nantes / Remote</span>
                  </p>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>

                <ul className="space-y-3 text-sm">
                  <li className="group flex items-center gap-3">
                    <span className="text-gray-500 transition-colors">
                      Email:
                    </span>
                    <a
                      href="mailto:gilles@crieloue.fr"
                      className="font-medium underline decoration-white/20 underline-offset-4 transition-all hover:text-blue-400"
                    >
                      gilles@crieloue.fr
                    </a>
                  </li>
                  <li className="group flex items-center gap-3">
                    <span className="text-gray-500 transition-colors">
                      Web:
                    </span>
                    <a
                      href="http://gilles.crieloue.fr"
                      className="font-medium underline decoration-white/20 underline-offset-4 transition-all hover:text-blue-400"
                    >
                      gilles.crieloue.fr
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  className="clip-corner-sm flex aspect-2/1 h-25 flex-col items-center justify-center border p-6 text-center max-md:h-20"
                  variants={itemVariants}
                >
                  <div className="pat-micro-grid absolute inset-0 opacity-20"></div>
                  <p className="text-sm font-medium tracking-wide uppercase opacity-80">
                    Freelance IT
                  </p>
                  <p className="text-xl font-bold text-transparent text-white max-md:text-lg">
                    Full-Stack
                  </p>
                </motion.div>
                <motion.div
                  className="clip-corner-sm flex aspect-square h-25 flex-col items-center justify-center border hover:scale-105 max-md:h-20"
                  variants={itemVariants}
                >
                  <div className="pat-micro-grid absolute inset-0 opacity-20"></div>
                  <span className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase">
                    BAC
                  </span>
                  <span className="text-3xl font-black max-md:text-2xl">
                    +5
                  </span>
                </motion.div>
                <motion.div
                  className="clip-corner-sm flex aspect-square h-25 flex-col items-center justify-center border hover:scale-105 max-md:h-20"
                  variants={itemVariants}
                >
                  <div className="pat-micro-grid absolute inset-0 opacity-20"></div>
                  <span className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase">
                    Années XP
                  </span>
                  <span className="text-3xl font-black max-md:text-2xl">
                    15
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </div>
  );
};
