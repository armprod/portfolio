"use client";
import ExperienceCard from "../ui/ExperienceCard";
import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      role: "IT Student",
      company: "SŠTE Brno Olomoucká",
      period: "2023 - Present",
      description: t(
        "Application and web development, network administration, cyber security, database management",
        "Vývoj aplikací a webových stránek, správa sítí, kybernetická bezpečnost, správa databází",
      ),

      skills: [
        "C#",
        ".NET",
        "Git",
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "SQL",
        "Python",
      ],
    },
    {
      role: t("IT Enthusiast", "IT Nadšenec"),
      company: t("Self-Taught", "Samouk"),
      period: "2025 - Present",
      description: t(
        "C# cross-platform applications, Avalonia UI framework, Modern WEB apllications using React, Typescript and Node.js",
        "Multiplatformní aplikace v jazyce C#, framework Avalonia UI, moderní webové aplikace využívající React, TypeScript a Node.js",
      ),
      skills: [
        "C#",
        ".NET",
        "AI Prompting",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <AnimatedSection
      id="experience"
      className="max-w-5xl mx-auto w-full py-16 scroll-mt-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        <span className="text-[#CC8500]">04.</span>{" "}
        {t("Experience", "Zkušenosti")}
      </h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            skills={exp.skills}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
