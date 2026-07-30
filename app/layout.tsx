import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/app/context/ThemeLanguageContext";
import Navbar from "@/app/components/sections/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Knieradl | Portfolio",
  description: "IT Student & Full Stack Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("site-theme");
  const langCookie = cookieStore.get("site-lang");

  const isDark = themeCookie?.value !== "light";
  const currentLang = langCookie?.value === "cs" ? "cs" : "en";

  return (
    <html
      lang={currentLang}
      className={`h-full antialiased ${isDark ? "dark" : ""}`}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-full flex flex-col bg-white dark:bg-[#1E1E1E] text-slate-900 dark:text-slate-100 transition-colors">
        <LanguageProvider initialLang={currentLang}>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
