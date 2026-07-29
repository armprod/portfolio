import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import DancingPet from "./components/ui/DancingPet";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#1E1E1E] text-slate-900 dark:text-slate-100 flex flex-col justify-between px-6 md:px-24 py-12">
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <DancingPet />
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full text-center text-xs text-slate-600">
        © {new Date().getFullYear()} • All Right Reserved, Daniel Knieradl
      </footer>
    </main>
  );
}
