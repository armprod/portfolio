"use client";
import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "@/app/context/ThemeLanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <AnimatedSection
      id="hero"
      className="max-w-5xl mx-auto w-full py-16 scroll-mt-16"
    >
      <p className="text-[#CC8500] font-medium mb-3">
        {t("Hi, my name is", "Ahoj, jmenuji se")}
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
        Daniel Knieradl{" "}
        <span className="text-slate-400 dark:text-slate-500">/ Armprod</span>
      </h1>

      <p className="text-[#CC8500] font-medium mb-3">
        {t("And I make apps ...", "A vytvářím aplikace ...")}
      </p>

      <div className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
        <p>
          {t(
            "AI Prompt Engineering | Full Stack Developer | Studying at an IT School | Self-Education",
            "AI Prompt Engineering | Full Stack Developer | Studium na IT škole | Samostatné vzdělávání",
          )}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="bg-[#CC8500] hover:bg-[#b07200] text-slate-950 font-semibold px-6 py-3 rounded-lg transition shadow-lg shadow-[#CC8500]/20"
        >
          {t("View my projects", "Zobrazit projekty")}
        </a>
        <a
          href="#contact"
          className="border border-slate-300 dark:border-slate-700 hover:border-[#CC8500] dark:hover:border-[#CC8500] text-slate-700 dark:text-slate-300 hover:text-[#CC8500] dark:hover:text-[#CC8500] font-semibold px-6 py-3 rounded-lg transition"
        >
          {t("Contact Me", "Kontaktujte mě")}
        </a>
      </div>
    </AnimatedSection>
  );
}
