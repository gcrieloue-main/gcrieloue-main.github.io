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
    <div className="flex min-h-screen flex-col bg-[#fafafa]">
      <HeaderTitle activeTab="cv" />

      <main id="cv" className="flex-1">
        {/* Intro Section: About & Skills */}
        <section className="container mx-auto max-w-6xl px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <About />
            </motion.div>

            <motion.div
              className="lg:col-span-6"
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
        <section className="container mx-auto max-w-6xl border-t border-zinc-200/80 px-6 py-16 md:py-24">
          <Education />
        </section>

        {/* Work Experiences Section (04) */}
        <WorkExperiences />
      </main>

      <Footer />
    </div>
  );
}
