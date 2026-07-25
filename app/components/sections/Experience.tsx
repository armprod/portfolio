import ExperienceCard from '../ui/ExperienceCard';

export default function Experience() {
  {/* Two-dimensional array with values about my experience */}
  const experiences = [
    {
      role: "IT Student",
      company: "SŠTE Brno Olomoucká",
      period: "2023 - Present",
      description: "Application and web development, network administration, cyber security, database management",
      skills: ["C#", ".NET", "Git", "HTML", "CSS", "JavaScript", "PHP", "SQL", "Python"]
    },
    {
      role: "IT Enthusiast",
      company: "Self-Taught",
      period: "2025 - Present",
      description: "C# cross-platform applications, Avalonia UI framework, Modern WEB apllications using React, Typescript and Node.js",
      skills: ["C#", ".NET", "AI Prompting", "TypeScript", "Next.js", "Tailwind CSS"]
    }
  ];

  return (
    <section id="experience" className="max-w-5xl mx-auto w-full py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        <span className="text-[#CC8500]">04.</span> Experience
      </h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={index}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            skills={exp.skills}
          />
        ))}
      </div>
    </section>
  );
}