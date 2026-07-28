interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-6 md:pl-8 border-l border-slate-800 group">
      {/* A dot on the timeline */}
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-slate-700 group-hover:bg-[#CC8500] rounded-full transition-colors duration-300" />

      {/* Card contents */}
      <div className="bg-[#181818] border border-slate-800 rounded-xl p-6 transition-all duration-300 group-hover:border-[#CC8500]/50 group-hover:shadow-xl group-hover:shadow-[#CC8500]/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h4 className="text-xl font-bold text-slate-100 group-hover:text-[#CC8500] transition-colors">
              {role}
            </h4>
            <span className="text-slate-400 text-sm font-medium">
              {company}
            </span>
          </div>
          <span className="text-xs bg-[#252525] text-slate-300 px-3 py-1 rounded-full w-fit">
            {period}
          </span>
        </div>

        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-[#252525] text-[#CC8500] px-2.5 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
