'use client';
import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, highlight, align = 'center' }) {
  return (
    <div className={`mb-16 max-w-3xl ${align === 'center' ? 'text-center mx-auto' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6"
      >
        {title} <span className="text-accent">{highlight}</span>
      </motion.h2>
      <p className="text-muted text-lg md:text-xl leading-relaxed">{subtitle}</p>
    </div>
  );
}