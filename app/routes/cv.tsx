import type { Route } from "./+types/cv";
import { About } from "~/components/About";
import { Skills } from "~/components/Skills";
import { Education } from "~/components/Education";
import { motion } from "framer-motion";
import { WorkExperiences } from "~/components/WorkExperiences";
import { HeaderTitle } from "~/components/ui/HeaderTitle";
import { Footer } from "~/components/ui/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gilles CRIELOUE — Développeur Full-Stack Senior & Freelance" },
    {
      name: "description",
      content:
        "Profil professionnel, compétences techniques, formation et expériences de Gilles CRIELOUE, ingénieur logiciel senior full-stack.",
    },
  ];
}

export default function CV() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] print:block print:min-h-0 print:bg-white">
      <HeaderTitle activeTab="cv" />

      <main id="cv" className="flex-1 print:block">
        {/* Print-only Header */}
        <div className="container mx-auto mb-4 hidden max-w-6xl border-b border-zinc-300 px-6 pt-6 pb-6 print:mb-3 print:block print:p-0 print:pb-3">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-black">
                Gilles Crieloue
              </h1>
              <p className="mt-0.5 text-sm font-medium text-zinc-800">
                Ingénieur Logiciel Senior Full-Stack & Freelance IT
              </p>
            </div>
            <div className="text-right font-mono text-xs text-zinc-600">
              <p>Nantes, France • Remote</p>
              <p className="text-[11px] text-zinc-500">
                github.com/gcrieloue-main • linkedin.com/in/gilles-crieloue
              </p>
            </div>
          </div>
        </div>

        {/* Intro Section: About & Skills */}
        <section className="container mx-auto max-w-6xl px-6 py-12 md:py-20 print:p-0 print:py-1">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 print:grid-cols-2 print:gap-6">
            <motion.div
              className="lg:col-span-6 print:col-span-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <About />
            </motion.div>

            <motion.div
              className="lg:col-span-6 print:col-span-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Skills />
            </motion.div>
          </div>
        </section>

        {/* Education & Certifications Section (03) */}
        <section className="container mx-auto max-w-6xl border-t border-zinc-200/80 px-6 py-16 md:py-24 print:border-t-0 print:p-0 print:py-2">
          <Education />
        </section>

        {/* Work Experiences Section (04) */}
        <WorkExperiences />
      </main>

      <Footer />
    </div>
  );
}
