import { useStore } from "~/store";
import { useEffect } from "react";
import Title from "./ui/Title";
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
      <Title
        level="h2"
        icon={<User />}
        subtitle="SECTION_01_ABOUT_ME"
        decorationText="SCANNING"
        decorationTextSecondary="PROFILE"
      >
        À propos de moi
      </Title>
      <article id="about" className="about">
        <div className="flex flex-col gap-8 text-white">
          <Presentation />
          <motion.div
            className="flex flex-wrap gap-4 md:px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
                <span className="text-3xl font-black max-md:text-2xl">+5</span>
              </motion.div>
              <motion.div
                className="clip-corner-sm flex aspect-square h-25 flex-col items-center justify-center border hover:scale-105 max-md:h-20"
                variants={itemVariants}
              >
                <div className="pat-micro-grid absolute inset-0 opacity-20"></div>
                <span className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase">
                  Années XP
                </span>
                <span className="text-3xl font-black max-md:text-2xl">15</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="mt-10 flex grow flex-col justify-center space-y-4">
          <div className="space-y-1">
            <h3 className="text-xs font-bold tracking-tighter text-gray-500 uppercase">
              Disponibilité
            </h3>
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
              <span className="font-semibold">Nantes / Remote</span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

const Presentation = () => {
  return (
    <div className="flex flex-row gap-10">
      <div className="pattern-stripes text-m flex flex-col gap-2 border-l-3 border-white bg-black/20 p-4 text-gray-300">
        <p>Je suis Gilles CRIELOUE, Ingénieur logiciel senior fullstack.</p>
        <p>
          Titulaire d’un Master 2 en Architectures Logicielles et fort de plus
          de 15 ans d’expérience, j’accompagne les projets de bout en bout avec
          une double expertise technique.
        </p>
        <p>
          Spécialisé dans les écosystèmes Java / Kotlin pour le back-end et
          React pour le front-end, je conçois des architectures robustes,
          évolutives et centrées sur le besoin utilisateur.
        </p>
      </div>
    </div>
  );
};

