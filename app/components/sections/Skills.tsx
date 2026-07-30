"use client";

import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "@/app/context/ThemeLanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <AnimatedSection
      id="skills"
      className="max-w-5xl mx-auto w-full py-10 scroll-mt-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center gap-3">
        <span className="text-[#CC8500]">02.</span>{" "}
        {t("Technology and Skills", "Technologie a Dovednosti")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Backend */}
        <div className="group bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#CC8500]/50 hover:shadow-xl hover:shadow-[#CC8500]/5">
          <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-lg mb-3 group-hover:text-[#CC8500] transition-colors">
            Backend
          </h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
            <li>• C# & .NET / .NET Core</li>
            <li>• {t("SQL and Databases", "SQL a Databáze")}</li>
            <li>• {t("API & Architecture", "API & Architektura")}</li>
            <li>• Python & PHP</li>
            <li>• Node.js / Next.js</li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="group bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#CC8500]/50 hover:shadow-xl hover:shadow-[#CC8500]/5">
          <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-lg mb-3 group-hover:text-[#CC8500] transition-colors">
            Frontend
          </h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
            <li>• HTML5, CSS3, JavaScript</li>
            <li>• React / Next.js</li>
            <li>• Tailwind CSS</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="group bg-white dark:bg-[#181818] border border-slate-200 dark:border-slate-800 p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#CC8500]/50 hover:shadow-xl hover:shadow-[#CC8500]/5">
          <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-lg mb-3 group-hover:text-[#CC8500] transition-colors">
            {t("Tools & AI", "Nástroje a AI")}
          </h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
            <li>• VS Code / Visual Studio</li>
            <li>• Git & GitHub</li>
            <li>• {t("AI assistants", "AI asistenti")}</li>
            <li>• {t("Prompts Writing", "Psaní Promptů")}</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
