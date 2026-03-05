import type { Route } from "./+types/cv";
import { About } from "~/components/About";
import { Skills } from "~/components/Skills";
import { Education } from "~/components/Education";
import { motion } from "framer-motion";
import { WorkExperiences } from "~/components/WorkExperiences";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gilles CRIELOUE - CV" },
    { name: "description", content: "Gilles CRIELOUE - CV" },
  ];
}

export default function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-800">
      <div>
        <div className="bg-black/30 p-4">
          <header className="container">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl">Crieloue Gilles</h1>
              <p className="text-xl">Développeur full-stack senior</p>
            </div>
          </header>
        </div>
        <div className="border-t-2 p-2">
          <main className="container" id="cv">
            <section>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
                className="mt-8 flex gap-8 max-lg:flex-col"
              >
                <div className="flex-1">
                  <About />
                </div>
                <Skills />
              </motion.div>
            </section>
            <section id="cv-content">
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
              >
                <Education />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <WorkExperiences />
              </motion.div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
