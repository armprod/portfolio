"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "cs";
type Theme = "dark" | "light";

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (enText: string, csText: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLang = "en", // Default Language
}: {
  children: ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("site-theme");
      if (saved === "light" || saved === "dark") return saved;
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "dark";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("site-lang", newLang);
    document.cookie = `site-lang=${newLang}; path=/; max-age=31536000`;
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setThemeState(newTheme);
    localStorage.setItem("site-theme", newTheme);
    document.cookie = `site-theme=${newTheme}; path=/; max-age=31536000`;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const t = (enText: string, csText: string) => {
    return lang === "en" ? enText : csText;
  };

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useLanguage musí být použit uvnitř LanguageProvider");
  }
  return context;
}
