export default function Projects() {
  return (
    <section id="projekty" className="max-w-5xl mx-auto w-full py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        <span className="text-[#CC8500]">03.</span> My work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1. Project */}
        <div className="bg-[#181818] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-[#CC8500]/50 transition">
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              Můj první .NET projekt
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Stručný popis tvého projektu. Co to dělá, jaké problémy to řeší a
              co ses u toho naučil.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-[#252525] text-[#CC8500] px-2.5 py-1 rounded">
                C#
              </span>
              <span className="text-xs bg-[#252525] text-[#CC8500] px-2.5 py-1 rounded">
                .NET
              </span>
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              className="text-slate-300 hover:text-[#CC8500] transition font-medium"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* 2. Project */}
        <div className="bg-[#181818] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-[#CC8500]/50 transition">
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              Osobní webové portfolio
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Moderní webová vizitka vytvořená pomocí Next.js, TypeScriptu a
              Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-[#252525] text-[#CC8500] px-2.5 py-1 rounded">
                Next.js
              </span>
              <span className="text-xs bg-[#252525] text-[#CC8500] px-2.5 py-1 rounded">
                Tailwind
              </span>
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              className="text-slate-300 hover:text-[#CC8500] transition font-medium"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
