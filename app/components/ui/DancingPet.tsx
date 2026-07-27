'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function DancingPet() {
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const maxPupilMove = 3;
      const angle = Math.atan2(distanceY, distanceX);
      const distance = Math.min(Math.hypot(distanceX, distanceY) / 100, 1);

      setPupilOffset({
        x: Math.cos(angle) * maxPupilMove * distance,
        y: Math.sin(angle) * maxPupilMove * distance,
      });

      setRotation({
        rotateX: (-distanceY / window.innerHeight) * 20,
        rotateY: (distanceX / window.innerWidth) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    setShowBubble(true);
    setTimeout(() => {
      setShowBubble(false);
    }, 2000);
  };

  return (
    <motion.div
      ref={containerRef}
      className="fixed bottom-4 left-4 z-50 cursor-pointer select-none"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: isMouseInside ? 1 : 0.7 }}
      transition={{ delay: 1.5, duration: 0.8, type: "spring", bounce: 0.4 }}
      style={{ 
        rotateX: rotation.rotateX,
        rotateY: rotation.rotateY,
        perspective: 800, 
        transformOrigin: 'center' 
      }}
      whileHover={{ scale: 1.15, opacity: 1 }}
      whileTap={{ scale: 0.9, rotate: 360 }}
      onHoverStart={() => setIsMouseInside(true)}
      onHoverEnd={() => setIsMouseInside(false)}
      onClick={handleClick}
    >
      <div 
        className="absolute z-10 pointer-events-none"
        style={{ 
          width: '150px',
          left: 'calc( -16px + 10px )',
          bottom: '70px' 
        }}
      >
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.8 }}
              // Bubble interior style
              className="bg-white text-slate-800 text-xs font-semibold px-3 py-2 rounded-2xl shadow-xl border border-orange-200 text-center break-words w-full"
            >
              I am Rezinka &lt;3
              {/* Bubble arrow */}
              <div className="absolute -bottom-1 left-[20px] w-4 h-4 bg-white rotate-45 border-r border-b border-orange-200 shadow-sm" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SVG cat */}
      <svg 
        width="64" 
        height="64" 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <circle cx="32" cy="36" r="22" fill="#F97316" stroke="#C2410C" strokeWidth="2.5"/>
        <path d="M14 22L18 8L28 18" fill="#F97316" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 22L46 8L36 18" fill="#F97316" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 19L19 11L25 17" fill="#FDBA74" />
        <path d="M47 19L45 11L39 17" fill="#FDBA74" />
        <path d="M29 43L35 43L32 46Z" fill="#1E293B"/>
        <path d="M32 46C32 49 29 50 28 50" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 46C32 49 35 50 36 50" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 43L22 44" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 48L20 46" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M52 43L42 44" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M54 48L44 46" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round"/>
        <g>
          <ellipse cx="22" cy="32" rx="5.5" ry="6.5" fill="white" stroke="#C2410C" strokeWidth="1.5"/>
          <motion.circle cx="22" cy="32" r="2.2" fill="#1E293B" animate={{ x: pupilOffset.x, y: pupilOffset.y }} transition={{ type: "spring", stiffness: 400, damping: 25 }}/>
        </g>
        <g>
          <ellipse cx="42" cy="32" rx="5.5" ry="6.5" fill="white" stroke="#C2410C" strokeWidth="1.5"/>
          <motion.circle cx="42" cy="32" r="2.2" fill="#1E293B" animate={{ x: pupilOffset.x, y: pupilOffset.y }} transition={{ type: "spring", stiffness: 400, damping: 25 }}/>
        </g>
      </svg>
    </motion.div>
  );
}