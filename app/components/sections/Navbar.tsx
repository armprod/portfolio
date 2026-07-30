"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/ThemeLanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { lang, setLang, theme, toggleTheme, t } = useLanguage();

  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setShowLangMenu(false);
      }
    }

    if (showLangMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLangMenu]);

  const navLinks = [
    { href: "#hero", label: t("Home", "Úvod") },
    { href: "#about-me", label: t("About Me", "O mně") },
    { href: "#skills", label: t("Skills", "Dovednosti") },
    { href: "#projects", label: t("Projects", "Projekty") },
    { href: "#experience", label: t("Experience", "Zkušenosti") },
    { href: "#contact", label: t("Contact", "Kontakt") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 py-4 transition-colors">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto w-full px-6 md:px-0">
        {/* Top row (Logo + Mobile button) */}
        <div className="w-full flex justify-between items-center">
          <span className="text-xl font-bold tracking-wider text-[#CC8500]">
            danielknieradl.com
          </span>

          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setShowLangMenu(false);
            }}
            className="md:hidden text-slate-700 dark:text-slate-300 hover:text-[#CC8500] focus:outline-none p-2"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#CC8500] transition whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle + Language selector */}
          <div className="flex items-center gap-3">
            {mounted ? (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-[#CC8500] text-slate-700 dark:text-slate-300 hover:text-[#CC8500] transition text-sm flex items-center justify-center"
                title={
                  theme === "dark"
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"
                }
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            ) : (
              <div className="w-9 h-9" /> // Placeholder
            )}

            {/* Desktop Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-[#CC8500] text-slate-700 dark:text-slate-300 hover:text-[#CC8500] transition text-xs font-semibold"
                title="Change Language / Změnit jazyk"
              >
                <span>🌐</span>
                <span>{lang.toUpperCase()}</span>
                <span className="text-[10px] text-slate-400">▼</span>
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-[#252525] border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-2 z-50"
                  >
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => setLang("en")}
                        className={`flex items-center justify-between w-full px-3 py-2 text-xs font-bold rounded-lg transition ${
                          lang === "en"
                            ? "bg-[#CC8500] text-white"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        <span>English</span>
                        {lang === "en" && <span>✓</span>}
                      </button>
                      <button
                        onClick={() => setLang("cs")}
                        className={`flex items-center justify-between w-full px-3 py-2 text-xs font-bold rounded-lg transition ${
                          lang === "cs"
                            ? "bg-[#CC8500] text-white"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        <span>Čeština</span>
                        {lang === "cs" && <span>✓</span>}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden w-full"
            >
              <div className="flex flex-col gap-3 pt-4 pb-2 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 mt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#CC8500] transition py-1 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile Settings (Theme + Language) */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                  {/* Theme Switcher Row */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {t("Theme", "Vzhled")}
                    </span>
                    {mounted ? (
                      <button
                        onClick={toggleTheme}
                        className="px-3 py-1.5 text-xs font-semibold rounded-md border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-2"
                      >
                        <span>
                          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
                        </span>
                      </button>
                    ) : (
                      <div className="w-24 h-8" />
                    )}
                  </div>

                  {/* Language Selector */}
                  <div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                      <span>🌐</span> {t("Language", "Jazyk")}
                    </div>
                    <div className="flex gap-2 mb-2">
                      <button
                        onClick={() => {
                          setLang("en");
                          setIsOpen(false);
                        }}
                        className={`flex-1 py-2 text-xs font-bold rounded-md transition ${
                          lang === "en"
                            ? "bg-[#CC8500] text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLang("cs");
                          setIsOpen(false);
                        }}
                        className={`flex-1 py-2 text-xs font-bold rounded-md transition ${
                          lang === "cs"
                            ? "bg-[#CC8500] text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        Čeština
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
