"use client";
import { motion } from 'framer-motion';
import Button from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-accent/10 blur-[120px] rounded-full -z-10"></div>
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface2 border border-border mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Agenda 2026 Abierta</span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-tight"
        >
          Shows de baile que <br />
          <span className="gradient-text">prenden</span> cualquier evento
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Presentaciones, animación y formación para todas las edades. Elevamos el estándar artístico de tus celebraciones.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/contacto" variant="primary">Cotizar show</Button>
          <Button href="/servicios" variant="secondary">Ver clases</Button>
        </motion.div>
      </div>

      <div className="absolute right-6 bottom-6 hidden md:block -z-10 opacity-30">
        <Image src="/hero-image.jpg" alt="performers" width={420} height={280} className="rounded-2xl" priority />
      </div>
    </motion.section>
  );
}
