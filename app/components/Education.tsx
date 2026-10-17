import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import Title from "./ui/Title";

export const Education = () => {
  const diplomas = [
    {
      period: "2008 — 2010",
      degree: "Master ALMA (Architectures Logicielles)",
      institution: "Université de Nantes",
    },
    {
      period: "2007 — 2008",
      degree: "Licence Informatique",
      institution: "Université de Nantes",
    },
    {
      period: "2005 — 2007",
      degree: "DUT Informatique",
      institution: "Université de Nantes",
    },
  ];

  const certifications = [
    {
      name: "AWS Developer Associate",
      issuer: "Amazon Web Services",
      image:
        "//images.ctfassets.net/oamir411dfuu/4UybNQnbhP8T8ePXL5suhn/ae6636795ad6ce74fd7ea6b440fc1c8f/AWS-Developer-Associate-2020.png",
      url: "https://www.youracclaim.com/badges/58e7bc73-22b5-45c6-af0e-297f2058fde2",
    },
    {
      name: "Java SE 8 Programmer",
      issuer: "Oracle Certified Associate",
      image:
        "//images.ctfassets.net/oamir411dfuu/1IqY5wK96YNf9svZ7kC0rq/1fbc1c89477fb18e4218606303738e31/Oracle_Associates_Badge__1_.png",
      url: "https://www.youracclaim.com/badges/cc833095-25ab-47da-b13e-051e017646dc",
    },
  ];

  return (
    <div className="w-full">
      <Title
        level="h2"
        icon={<GraduationCap />}
        subtitle="03 • Diplômes & Certifications"
      >
        Formation
      </Title>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Diplomas */}
        <motion.article
          id="education"
          className="space-y-4 lg:col-span-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {diplomas.map((item) => (
            <div
              key={item.degree}
              className="card-minimal flex flex-col gap-2 p-5 sm:flex-row sm:items-baseline sm:justify-between sm:p-6"
            >
              <div>
                <h3 className="text-base font-semibold tracking-tight text-zinc-950">
                  {item.degree}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-500">
                  {item.institution}
                </p>
              </div>
              <span className="shrink-0 font-mono text-xs font-medium text-zinc-500">
                {item.period}
              </span>
            </div>
          ))}
        </motion.article>

        {/* Certifications */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="card-minimal flex h-full flex-col justify-between p-5">
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-4 w-4 text-zinc-500" />
              <h3 className="font-mono text-xs font-medium tracking-wider text-zinc-500 uppercase">
                Certifications Officielles
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-zinc-200/60 bg-zinc-50 p-3 transition-all duration-200 hover:bg-zinc-100/80"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-10 w-10 shrink-0 object-contain"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-zinc-900 group-hover:text-black">
                      {cert.name}
                    </p>
                    <p className="truncate text-[11px] text-zinc-500">
                      {cert.issuer}
                    </p>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-900" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
