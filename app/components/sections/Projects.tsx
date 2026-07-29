"use client";

import ProjectCard from "../ui/ProjectCard";
import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "@/app/context/ThemeLanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const finishedProjects = [
    {
      title: "Armprod Calculator",
      description: t(
        "A robust cross-platform desktop calculator in Avalonia (.NET) with arbitrary precision and advanced math support",
        "Robustní multiplatformní desktopová kalkulačka v Avalonia (.NET) s libovolnou přesností a pokročilou podporou matematiky",
      ),
      images: [
        "/images/ArmprodCalculatorIconNew.ico",
        "/images/Armprod_Calculator_basic.png",
        "/images/Armprod_Calculator_scientific.png",
      ],
      tags: ["C#", ".NET", "Avalonia UI"],
      githubUrl: "https://github.com",
    },
    {
      title: t("My personal web portfolio", "Mé osobní webové portfolio"),
      description: t(
        "A modern website created using Next.js, TypeScript and Tailwind CSS",
        "Moderní webová stránka vytvořená pomocí Next.js, TypeScriptu a Tailwind CSS",
      ),
      images: ["/images/Armprod_Calculator_basic.png"],
      tags: ["Next.js", "Tailwind"],
      githubUrl: "https://github.com",
    },
  ];

  return (
    <AnimatedSection
      id="projects"
      className="max-w-5xl mx-auto w-full py-16 scroll-mt-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center gap-3">
        <span className="text-[#CC8500]">03.</span> {t("Projects", "Projekty")}
      </h2>

      {/* Finished Projects */}
      <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
        {t("Finished Projects", "Dokončené projekty")}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {finishedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            tags={project.tags}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>

      {/* Upcoming Projects */}
      <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
        {t("Upcoming Projects", "Připravované projekty")}
        <span className="text-xs bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded-full font-normal animate-pulse">
          WiP
        </span>
      </h3>
      <div className="group bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-[#CC8500] hover:shadow-xl hover:shadow-[#CC8500]/10">
        <div className="bg-slate-50/50 dark:bg-[#181818]/60 border border-slate-200 dark:border-slate-800/80 border-dashed rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-[#CC8500] transition-colors">
                Armprod Notepad
              </h4>
              <span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                {t("Currently in Development", "Právě ve vývoji")}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
              {t(
                "A sophisticated and user-friendly text editor for all your notes and jottings, inspired by Obsidian",
                "Propracovaný a uživatelsky přívětivý textový editor pro všechny vaše poznámky, inspirovaný aplikací Obsidian",
              )}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-slate-100 dark:bg-[#252525] text-amber-600 dark:text-amber-500/80 px-2.5 py-1 rounded">
                C#
              </span>
              <span className="text-xs bg-slate-100 dark:bg-[#252525] text-amber-600 dark:text-amber-500/80 px-2.5 py-1 rounded">
                ASP.NET Core
              </span>
              <span className="text-xs bg-slate-100 dark:bg-[#252525] text-amber-600 dark:text-amber-500/80 px-2.5 py-1 rounded">
                SQL
              </span>
            </div>
          </div>
          <div className="text-xs text-slate-500">
            {t("Link to GitHub after release", "Odkaz na GitHub po vydání")}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
