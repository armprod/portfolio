export default function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-5xl mx-auto w-full">
      <span className="text-xl font-bold tracking-wider text-[#CC8500]">
        Armprod.com
      </span>
      <div className="flex gap-6 text-sm text-slate-300">
        <a href="#about-me" className="hover:text-[#CC8500] transition">
          About Me
        </a>
        <a href="#projects" className="hover:text-[#CC8500] transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-[#CC8500] transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
