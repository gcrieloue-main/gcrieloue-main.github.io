import { ShieldCheck } from "lucide-react";
import { Languages } from "./Languages";
import Title from "./Title";

export const Skills = () => {
  return (
    <div className="pat-10 flex h-full flex-col">
      <Title level="h2" icon={<ShieldCheck />} subtitle="SECTION_02_SKILLS">
        Compétences
      </Title>
      <div className="flex flex-1 flex-col justify-between gap-10 rounded-xl p-4">
        <article id="skills">
          <div>
            <h3 className="pb-2 text-sm">Langages</h3>
            <ul className="tag-list px-0">
              <li>Java, Kotlin</li>
              <li>HTML, CSS, Javascript</li>
            </ul>
            <h3 className="pt-4 pb-2 text-sm">Frameworks / Serveurs</h3>
            <ul className="tag-list px-0">
              <li>Spring</li>
              <li>Angular, Vue.js, React</li>
              <li>MongoDB, Oracle, PostgreSQL</li>
              <li>AWS, GCP</li>
            </ul>
            <h3 className="pt-4 pb-2 text-sm">Méthodologie</h3>
            <ul className="tag-list px-0">
              <li>Intégration continue (Jenkins, Gitlab)</li>
              <li>Méthodologie agile, SCRUM</li>
            </ul>
          </div>
        </article>
        <div className="mt-10">
          <Languages />
        </div>
      </div>
    </div>
  );
};
