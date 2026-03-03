'use client';
import { motion } from 'framer-motion';

export default function Card({ children, className = "", hover = true, delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={hover ? { 
        y: -8, 
        borderColor: "rgba(139, 92, 246, 0.5)",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" 
      } : {}}
      className={`bg-surface border border-border rounded-3xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}