'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: "¿Cuánto duran los shows?", a: "Entre 15 y 30 minutos de base." },
    { q: "¿Requerimientos técnicos?", a: "Superficie lisa y sistema de sonido." }
  ];

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12">Dudas <span className="text-accent">Frecuentes</span></h1>
        {faqs.map((f, i) => (
          <div key={i} className="mb-4 border border-border rounded-2xl overflow-hidden">
            <button onClick={() => setOpenIndex(i)} className="w-full p-6 text-left font-bold bg-surface">
              {f.q}
            </button>
            {openIndex === i && <div className="p-6 bg-background text-muted">{f.a}</div>}
          </div>
        ))}
      </div>
    </main>
  );
}