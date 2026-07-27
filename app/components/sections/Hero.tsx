import AnimatedSection from '../ui/AnimatedSection';

export default function Hero() {
  return (
    <AnimatedSection className="max-w-5xl mx-auto w-full my-auto py-16">
      <p className="text-[#CC8500] font-medium mb-3">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
        Daniel Knieradl <span className="text-slate-500">/ IT Enthusiast</span>
      </h1>
      <div className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
        <p>
          AI Prompt Engineering | Full Stack Developer | Studying at an IT School | Self-Education
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="bg-[#CC8500] hover:bg-[#b07200] text-slate-950 font-semibold px-6 py-3 rounded-lg transition shadow-lg shadow-[#CC8500]/20"
        >
          View my projects
        </a>
        <a
          href="#contact"
          className="border border-slate-700 hover:border-[#CC8500] text-slate-300 hover:text-[#CC8500] font-semibold px-6 py-3 rounded-lg transition"
        >
          Contact Me
        </a>
      </div>
    </AnimatedSection>
  );
}
