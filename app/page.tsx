export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] text-slate-100 flex flex-col justify-between px-6 md:px-24 py-12">
      {/* Top Navigation / logo */}
      <nav className="flex justify-between items-center max-w-5xl mx-auto w-full">
        <span className="text-xl font-bold tracking-wider text-[#CC8500]">Armprod.com</span>
        <div className="flex gap-6 text-sm text-slate-300">
          <a href="#about-me" className="hover:text-[#CC8500] transition">About Me</a>
          <a href="#projects" className="hover:text-[#CC8500] transition">Projects</a>
          <a href="#contact" className="hover:text-[#CC8500] transition">Contact</a>
        </div>
      </nav>

      {/* Main Introductory Section */}
      <section className="max-w-5xl mx-auto w-full my-auto py-16">
        <p className="text-[#CC8500] font-medium mb-3">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Daniel Knieradl <span className="text-slate-500">/ IT Enthusiast</span>
        </h1>
          <div className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            <p>
              I’m studying Information Technology and work as a full-stack developer. In the world of IT, I’ve long focused on programming – my main area of expertise is the C# and .NET ecosystem, but I’m also actively expanding my knowledge to include modern web applications.
            </p><br/>
            <p>
              In my free time, I work on my own projects. The key to my efficiency is the use of modern tools and artificial intelligence, which help me to experiment, push my boundaries and successfully deliver even complex projects across the entire technology stack.
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
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full text-center text-xs text-slate-600">
        © {new Date().getFullYear()} • All Right Reserved, Daniel Knieradl
      </footer>
    </main>
  );
}