export default function Contact() {
  return (
    <section id="kontakt" className="max-w-5xl mx-auto w-full py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
        <span className="text-[#CC8500]">04.</span> Contact Me
      </h2>
      <div className="bg-[#181818] border border-slate-800 rounded-xl p-8 max-w-2xl">
        <p className="text-slate-400 text-base md:text-lg mb-6 leading-relaxed">
          Máš zájem o spolupráci, chceš se na něco zeptat nebo mě jen pozdravit?
          Neváhej se mi ozvat, jsem otevřený novým příležitostem.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:tvuj.email@example.com"
            className="bg-[#CC8500] hover:bg-[#b07200] text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
          >
            Napsat e-mail
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="border border-slate-700 hover:border-[#CC8500] text-slate-300 hover:text-[#CC8500] font-semibold px-6 py-3 rounded-lg transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="border border-slate-700 hover:border-[#CC8500] text-slate-300 hover:text-[#CC8500] font-semibold px-6 py-3 rounded-lg transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
