'use client';

import { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const email = "knieradl.daniel@gmail.com";
  const discordTag = "armprod";

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <AnimatedSection id="contact" className="max-w-5xl mx-auto w-full py-16 scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        <span className="text-[#CC8500]">05.</span> Get In Touch
      </h2>

      <div className="group bg-[#181818] border border-slate-800 rounded-xl p-8 md:p-12 text-center transition-all duration-300 hover:border-[#CC8500]/50 hover:shadow-xl hover:shadow-[#CC8500]/5">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 group-hover:text-[#CC8500] transition-colors duration-300">
          Let's build something together
        </h3>
        
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          I'm currently looking for new opportunities, whether it's a junior developer position, freelance project, or just a chat about technology. My inbox is always open!
        </p>

        {/* Copy Buttons) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          
          {/* Email button */}
          <button
            onClick={() => handleCopy(email, 'email')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#CC8500] hover:bg-[#b37400] text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#CC8500]/15 cursor-pointer"
          >
            {copiedType === 'email' ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied Email!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Copy Email
              </>
            )}
          </button>

          {/* Discord button */}
          <button
            onClick={() => handleCopy(discordTag, 'discord')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#CC8500]/50 cursor-pointer"
          >
            {copiedType === 'discord' ? (
              <>
                <svg className="w-5 h-5 text-[#CC8500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#CC8500]">Copied Discord!</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Copy Discord
              </>
            )}
          </button>

        </div>

        {/* Social Media and links */}
        <div className="flex justify-center items-center gap-6 mt-8 text-sm text-slate-400">
          
          {/* GitHub link */}
          <a 
            href="https://github.com/armprod"
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-[#CC8500] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>

          <span>•</span>

          {/* LinkedIn link */}
          <a 
            href="https://www.linkedin.com/in/daniel-knieradl-16a5b7410/?locale=cs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-[#CC8500] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            LinkedIn
          </a>

        </div>
      </div>
    </AnimatedSection>
  );
}