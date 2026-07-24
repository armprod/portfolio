export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto w-full py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        <span className="text-[#CC8500]">02.</span> Technology and skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Backend */}
        <div className="bg-[#181818] border border-slate-800 p-6 rounded-xl">
          <h3 className="text-[#CC8500] font-semibold text-lg mb-3">Backend</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>• C# & .NET / .NET Core</li>
            <li>• SQL & Databáze</li>
            <li>• API & Architektura</li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="bg-[#181818] border border-slate-800 p-6 rounded-xl">
          <h3 className="text-[#CC8500] font-semibold text-lg mb-3">
            Frontend
          </h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>• HTML5, CSS3, JavaScript</li>
            <li>• React / Next.js</li>
            <li>• Tailwind CSS</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-[#181818] border border-slate-800 p-6 rounded-xl">
          <h3 className="text-[#CC8500] font-semibold text-lg mb-3">
            Nástroje & AI
          </h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>• Git & GitHub</li>
            <li>• AI asistenti (Efektivita)</li>
            <li>• VS Code & Visual Studio</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
