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
    { title: "Gilles CRIELOUE" },
    {
      name: "description",
      content: "Gilles CRIELOUE - Développeur full-stack senior",
    },
  ];
}

export default function CV() {
  return (
    <div className="min-h-screen">
      <div className="grain"></div>
      <HeaderTitle
        activeTab="cv"
        badgeText="PROFILE"
        bracketText="[ FULL_STACK_DEVELOPER ]"
        specLine1="MODEL SPECIFICATION: TYPE-01"
        specLine2="SPEC_DIR: //05.B25.2026"
        specBold="VALUABLE ASSET"
      />

      <div className="hazard-bar-inverted"></div>

      <div className="border-t-2">
        <main id="cv">
          <section className="container mx-auto px-5 max-md:px-2">
            <div className="mt-14 flex gap-14 max-lg:flex-col">
              <div className="pat-10 flex-1">
                <About />
              </div>
              <div className="flex-1 max-lg:mt-14">
                <Skills />
              </div>
            </div>
          </section>

          <div className="hazard-bar mt-14 rounded-md"></div>

          <section id="cv-content" className="pattern-dense-grid">
            <motion.div
              className="container mx-auto px-5 pt-14 max-md:px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
            >
              <Education />
            </motion.div>

            <div className="hazard-bar-inverted mt-10"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
            >
              <WorkExperiences />
            </motion.div>
          </section>
        </main>
      </div>

      <div className="hazard-bar"></div>

      <Footer />
    </div>
  );
}
