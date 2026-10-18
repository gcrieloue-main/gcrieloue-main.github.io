import { Sparkles, Code2, Layers, Cloud, GitBranch } from "lucide-react";
import { Languages } from "./Languages";
import Title from "./ui/Title";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Langages & IA",
      icon: <Code2 className="h-4 w-4 text-zinc-500" />,
      skills: [
        "Java",
        "Kotlin",
        "TypeScript",
        "Python",
        "SQL",
        "Agents IA & LLM",
      ],
    },
    {
      title: "Frameworks",
      icon: <Layers className="h-4 w-4 text-zinc-500" />,
      skills: ["Spring Boot", "React", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Cloud & Données",
      icon: <Cloud className="h-4 w-4 text-zinc-500" />,
      skills: [
        "GCP",
        "AWS (Lambda, Serverless)",
        "Kubernetes",
        "PostgreSQL",
        "Redis",
        "MongoDB",
      ],
    },
    {
      title: "DevOps & Architecture",
      icon: <GitBranch className="h-4 w-4 text-zinc-500" />,
      skills: [
        "Pattern BFF",
        "Software Craftsmanship",
        "GitOps (Flux)",
        "GitHub Actions",
        "GitLab CI",
        "Terraform",
        "Docker",
      ],
    },
  ];

  return (
    <div className="flex h-full flex-col">
      <Title level="h2" icon={<Sparkles />} subtitle="02 • Savoir-faire">
        Compétences
      </Title>

      {/* Web view: interactive minimal cards */}
      <div className="space-y-6 print:hidden">
        <article id="skills" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card-minimal flex flex-col justify-between p-5"
            >
              <div>
                <div className="mb-3 flex items-center gap-2">
                  {category.icon}
                  <h3 className="font-mono text-xs font-medium tracking-wider text-zinc-500 uppercase">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </article>

        {/* Languages block */}
        <div className="pt-2">
          <Languages />
        </div>
      </div>

      {/* Print view: borderless, airy, elegant typographic list */}
      <div className="hidden space-y-2.5 print:block">
        <div className="space-y-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="text-[9pt] leading-relaxed">
              <span className="font-semibold text-zinc-900">
                {category.title} :{" "}
              </span>
              <span className="font-mono text-[8.5pt] text-zinc-700">
                {category.skills.join(" • ")}
              </span>
            </div>
          ))}
          <div className="border-t border-zinc-200/60 pt-2 text-[9pt] leading-relaxed">
            <span className="font-semibold text-zinc-900">Langues : </span>
            <span className="font-mono text-[8.5pt] text-zinc-700">
              Français (Natif) • Anglais (Professionnel, TOEIC 820)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
