'use client';
import AnimatedSection from '../ui/AnimatedSection';

export default function About() {
  return (
    <AnimatedSection id="about-me" className="max-w-5xl mx-auto w-full py-20 scroll-mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
        <span className="text-[#CC8500]">01.</span> About Me
      </h2>
      <div className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl space-y-4">
        <p>
          I’m studying Information Technology and work as a full-stack
          developer. In the world of IT, I’ve long focused on programming – my
          main area of expertise is the C# and .NET ecosystem, but I’m also
          actively expanding my knowledge to include modern web applications.
        </p>
        <p>
          In my free time, I work on my own projects. The key to my efficiency
          is the use of modern tools and artificial intelligence, which help me
          to experiment, push my boundaries and successfully deliver even
          complex projects across the entire technology stack.
        </p>
      </div>
    </AnimatedSection>
  );
}
