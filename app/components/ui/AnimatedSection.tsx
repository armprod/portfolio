'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, id, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section 
      id={id} 
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.7, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.section>
  );
}