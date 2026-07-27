"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about-me", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1E1E1E]/80 backdrop-blur-md border-b border-slate-800/50 py-4">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto w-full px-6 md:px-0">
        {/* Top row (Logo + Mobile button) */}
        <div className="w-full flex justify-between items-center">
          <span className="text-xl font-bold tracking-wider text-[#CC8500]">
            danielknieradl.com
          </span>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-[#CC8500] focus:outline-none p-2"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#CC8500] transition whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile view*/}
        {isOpen && (
          <div className="md:hidden w-full flex flex-col gap-3 pt-4 pb-2 text-sm text-slate-300 border-t border-slate-800 mt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#CC8500] transition py-1 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
