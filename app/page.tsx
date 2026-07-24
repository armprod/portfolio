import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] text-slate-100 flex flex-col justify-between px-6 md:px-24 py-12">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full text-center text-xs text-slate-600">
        © {new Date().getFullYear()} • All Right Reserved, Daniel Knieradl
      </footer>
    </main>
  );
}