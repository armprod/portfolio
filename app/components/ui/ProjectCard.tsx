"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  images,
  tags,
  githubUrl,
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group bg-[#181818] border border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-[#CC8500] hover:shadow-xl hover:shadow-[#CC8500]/10">
      <div>
        {/* Pictures */}
        <div className="h-64 border-b border-slate-800 relative overflow-hidden bg-[#151515]">
          <Image
            src={images[currentImageIndex]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain group-hover:scale-105 transition duration-500 p-2"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#CC8500] text-white w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                aria-label="Předchozí obrázek"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#CC8500] text-white w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                aria-label="Další obrázek"
              >
                ›
              </button>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded z-10">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Description */}
        <div className="p-6">
          <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-[#CC8500] transition-colors">
            {title}
          </h4>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-[#252525] text-[#CC8500] px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub & Other Links*/}
      {githubUrl && (
        <div className="px-6 pb-6 flex gap-4 text-sm">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#CC8500] transition font-medium"
          >
            GitHub →
          </a>
        </div>
      )}
    </div>
  );
}
