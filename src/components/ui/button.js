"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const base = "px-6 py-3 rounded-full font-bold transition-all inline-flex items-center justify-center text-sm";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover glow-hover",
    secondary: "bg-surface border border-border text-text hover:border-accent"
  };

  const MotionA = motion.a;
  const MotionButton = motion.button;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 18 }
  };

  if (href) {
    return (
      <Link href={href} legacyBehavior>
        <MotionA {...motionProps} className={`${base} ${variants[variant]} ${className}`}>{children}</MotionA>
      </Link>
    );
  }

  return (
    <MotionButton {...motionProps} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </MotionButton>
  );
}