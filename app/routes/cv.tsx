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

const HeaderTitle = () => (
  <section className="pattern-master-light relative w-full overflow-hidden border-b border-zinc-200 bg-white py-16 text-zinc-900">
    <div className="container mx-auto px-5 max-md:px-2">
      <div className="mb-8 flex flex-col items-start justify-between border-b-2 border-black pb-6 md:flex-row md:items-end">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <span className="mono bg-black px-2 py-0.5 text-[9px] font-bold tracking-widest text-white">
              PROFILE
            </span>
            <span className="mono text-xs font-bold tracking-widest text-zinc-600 uppercase">
              [ FULL_STACK_DEVELOPER ]
            </span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tighter text-black uppercase">
            GILLES CRIELOUE
          </h2>
        </div>

        <div className="mt-4 flex items-center space-x-6 select-none md:mt-0">
          <div className="dots-decal text-black opacity-30"></div>
          <div className="mono text-right text-[9px] leading-tight text-zinc-500">
            <div>MODEL SPECIFICATION: TYPE-01</div>
            <div>SPEC_DIR: //05.B25.2026</div>
            <div className="font-extrabold text-black uppercase">
              VALUABLE ASSET
            </div>
          </div>
          <div className="kojima-barcode"></div>
        </div>
      </div>
    </div>
  </section>
);

export default function CV() {
  return (
    <div className="min-h-screen">
      <div className="grain"></div>
      <HeaderTitle />

      <div className="hazard-bar-inverted"></div>

      <div className="border-t-2">
        <main id="cv">
          <section className="container mx-auto px-5 max-md:px-2">
            <div className="mt-14 flex gap-8 max-lg:flex-col">
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

      <footer className="p-4 py-8 text-zinc-300">
        <ul className="space-y-3 text-sm">
          <li className="group flex items-center gap-3">
            <span className="text-gray-500 transition-colors">Email:</span>
            <a
              href="mailto:gilles@crieloue.fr"
              className="font-medium underline decoration-white/20 underline-offset-4 transition-all hover:text-blue-400"
            >
              gilles@crieloue.fr
            </a>
          </li>
          <li className="group flex items-center gap-3">
            <span className="text-gray-500 transition-colors">Web:</span>
            <a
              href="http://gilles.crieloue.fr"
              className="font-medium underline decoration-white/20 underline-offset-4 transition-all hover:text-blue-400"
            >
              gilles.crieloue.fr
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
