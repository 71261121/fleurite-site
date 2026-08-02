'use client';
import { motion } from 'framer-motion';
import { ReactNode, MouseEventHandler } from 'react';

interface ButtonGlowProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export default function ButtonGlow({ children, href, className = '', onClick }: ButtonGlowProps) {
  const MotionTag = href ? motion.a : motion.button;
  return (
    <MotionTag
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`btn-glow relative ${className}`}
    >
      {children}
    </MotionTag>
  );
}
