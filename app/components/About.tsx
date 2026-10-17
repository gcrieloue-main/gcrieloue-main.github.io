import { useStore } from "~/api";
import { useEffect } from "react";
import Title from "./ui/Title";
import { User, MapPin, CheckCircle2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export const About = () => {
  const { cvParagraphs, fetchCvParagraphs } = useStore();

  useEffect(() => {
    void fetchCvParagraphs();
  }, [fetchCvParagraphs]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="flex h-full flex-col">
      <Title level="h2" icon={<User />} subtitle="01 • Présentation">
        À propos
      </Title>

      <article id="about" className="space-y-8">
        {/* Presentation narrative */}
        <Presentation />

        {/* Highlight metric cards */}
        <motion.div
          className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="card-minimal flex min-h-[124px] flex-col justify-between p-4 sm:p-5"
            variants={itemVariants}
          >
            <span className="font-mono text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
              Expérience
            </span>
            <div className="mt-3">
              <span className="block text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
                15+ ans
              </span>
              <p
                className="mt-1 truncate text-xs leading-snug text-zinc-500"
                title="Architecture & Dev"
              >
                Architecture & Dev
              </p>
            </div>
          </motion.div>

          <motion.div
            className="card-minimal flex min-h-[124px] flex-col justify-between p-4 sm:p-5"
            variants={itemVariants}
          >
            <span className="font-mono text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
              Diplôme
            </span>
            <div className="mt-3">
              <span className="block text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
                Bac +5
              </span>
              <p
                className="mt-1 truncate text-xs leading-snug text-zinc-500"
                title="Master 2 ALMA"
              >
                Master 2 ALMA
              </p>
            </div>
          </motion.div>

          <motion.div
            className="card-minimal flex min-h-[124px] flex-col justify-between p-4 sm:p-5"
            variants={itemVariants}
          >
            <span className="font-mono text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
              Statut
            </span>
            <div className="mt-3">
              <span className="block text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
                Freelance
              </span>
              <p
                className="mt-1 truncate text-xs leading-snug text-zinc-500"
                title="Full-Stack Senior"
              >
                Full-Stack Senior
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Location & Work mode */}
        <div className="card-minimal flex flex-wrap items-center justify-between gap-4 bg-zinc-50/50 p-5">
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-zinc-500" />
            <div>
              <p className="font-mono text-xs font-medium tracking-wider text-zinc-500 uppercase">
                Localisation
              </p>
              <p className="text-sm font-semibold text-zinc-900">
                Nantes, France
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>Télétravail (Remote) / Hybride</span>
          </div>
        </div>
      </article>
    </div>
  );
};

const Presentation = () => {
  return (
    <div className="max-w-prose space-y-4 text-base leading-relaxed text-zinc-700">
      <p className="text-lg leading-snug font-medium text-zinc-900">
        Ingénieur logiciel senior fort de plus de 15 années d'expérience en
        conception et développement de systèmes critiques et plateformes web
        modernes.
      </p>
      <p>
        Spécialisé dans les écosystèmes <strong>Java / Kotlin</strong> pour les
        architectures back-end distribuées et{" "}
        <strong>React / TypeScript</strong> pour les interfaces utilisateur
        exigeantes, j’accompagne les équipes de bout en bout : cadrage,
        architecture, intégration continue et mise en production.
      </p>
      <p>
        Pragmatique et attentif à la qualité du code, j'accorde une importance
        primordiale à la résilience, aux performances et à l’expérience
        utilisateur.
      </p>
    </div>
  );
};
