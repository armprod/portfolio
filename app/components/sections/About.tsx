"use client";
import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "@/app/context/ThemeLanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <AnimatedSection
      id="about-me"
      className="max-w-5xl mx-auto w-full py-16 scroll-mt-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
        <span className="text-[#CC8500]">01.</span> {t("About Me", "O mně")}
      </h2>
      <div className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl space-y-4">
        <p>
          {t(
            "I’m studying Information Technology and work as a full-stack developer. In the world of IT, I’ve long focused on programming – my main area of expertise is the C# and .NET ecosystem, but I’m also actively expanding my knowledge to include modern web applications.",
            "Studuji informační technologie a pracuji jako vývojář. Ve světě IT se dlouhodobě zaměřuji na programování – mojí hlavní oblastí expertizy je ekosystém C# a .NET, ale aktivně si rozšiřuji znalosti i o moderní webové aplikace.",
          )}
        </p>
        <p>
          {t(
            "In my free time, I work on my own projects. The key to my efficiency is the use of modern tools and artificial intelligence, which help me to experiment, push my boundaries and successfully deliver even complex projects across the entire technology stack.",
            "Ve volném čase pracuji na vlastních projektech. Klíčem k mé efektivitě je využívání moderních nástrojů a umělé inteligence, které mi pomáhají experimentovat, posouvat mé hranice a úspěšně doručovat i složité projekty napříč celým technologickým stackem.",
          )}
        </p>
      </div>
    </AnimatedSection>
  );
}
