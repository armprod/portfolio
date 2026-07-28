"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { lang, setLang, t } = useLanguage();

  // Ref pro sledování elementu nastavení
  const settingsRef = useRef<HTMLDivElement>(null);

  // Zavření nastavení při kliknutí kamkoliv jinam mimo tento element
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowSettings(false);
      }
    }

    if (showSettings) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSettings]);

  const navLinks = [
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
              setShowSettings(false);
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

          {/* Desktop Settings dropdown button obalený v refu */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-[#CC8500] text-slate-700 dark:text-slate-300 hover:text-[#CC8500] transition text-xs font-semibold"
            >
              {t("Settings", "Nastavení")}
            </button>

            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#252525] border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-3 z-50"
                >
                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wider">
                    {t("Language", "Jazyk")}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLang("en")}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-md transition ${
                        lang === "en"
                          ? "bg-[#CC8500] text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLang("cs")}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-md transition ${
                        lang === "cs"
                          ? "bg-[#CC8500] text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      CS
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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

                {/* Mobile Setting */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wider">
                    {t("Language", "Jazyk")}
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
