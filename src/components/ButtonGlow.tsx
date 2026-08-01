'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonGlowProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function ButtonGlow({ children, href, className = '' }: ButtonGlowProps) {
  const MotionTag = href ? motion.a : motion.button;
  return (
    <MotionTag
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`btn-glow relative ${className}`}
    >
      {children}
    </MotionTag>
  );
}
