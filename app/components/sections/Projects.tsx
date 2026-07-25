import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  {/* Two-dimensional array with projects */}
  const finishedProjects = [
    {
      title: "Armprod Calculator",
      description: "A robust cross-platform desktop calculator in Avalonia (.NET) with arbitrary precision and advanced math support.",
      images: [
        "/images/ArmprodCalculatorIconNew.ico",
        "/images/Armprod_Calculator_basic.png",
        "/images/Armprod_Calculator_scientific.png"
      ],
      tags: ["C#", ".NET", "Avalonia UI"],
      githubUrl: "https://github.com"
    },
    {
      title: "My personal web portfolio",
      description: "A modern website created using Next.js, TypeScript and Tailwind CSS.",
      images: [
        "/images/Armprod_Calculator_basic.png"
      ],
      tags: ["Next.js", "Tailwind"],
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto w-full py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        <span className="text-[#CC8500]">03.</span> Projects
      </h2>

      {/* Finished Projects */}
      <h3 className="text-lg font-semibold text-slate-300 mb-4">Finished Projects</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {finishedProjects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            tags={project.tags}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>

      {/* Work in Progress sekce zůstává stejná */}
      <h3 className="text-lg font-semibold text-slate-300 mb-4 flex items-center gap-2">
        Upcoming Projects
        <span className="text-xs bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded-full font-normal animate-pulse">WiP</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#181818]/60 border border-slate-800/80 border-dashed rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-bold text-slate-200">Armprod Notepad</h4>
              <span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">Currently in Development</span>
            </div>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              A sophisticated, user-friendly text editor for all your notes and jottings – Obsidian.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-[#252525] text-amber-500/80 px-2.5 py-1 rounded">C#</span>
              <span className="text-xs bg-[#252525] text-amber-500/80 px-2.5 py-1 rounded">ASP.NET Core</span>
              <span className="text-xs bg-[#252525] text-amber-500/80 px-2.5 py-1 rounded">SQL</span>
            </div>
          </div>
          <div className="text-xs text-slate-500">
            Link to GitHub after relese
          </div>
        </div>
      </div>
    </section>
  );
}