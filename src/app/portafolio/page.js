'use client';
import { useState } from 'react';

export default function Portafolio() {
  const [filter, setFilter] = useState('Todos');
  const projects = [
    { title: "Gala Neon", type: "Shows", color: "from-purple-900" },
    { title: "Urban Flow", type: "Academia", color: "from-blue-900" },
    { title: "Boda Luxury", type: "Shows", color: "from-indigo-900" }
  ];

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-12">Escenarios <span className="text-accent">Dominados</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className={`aspect-[4/5] rounded-3xl bg-gradient-to-br ${p.color} to-black p-8 flex flex-col justify-end border border-border`}>
              <span className="text-[10px] font-black uppercase bg-accent w-fit px-2 py-1 rounded mb-2">{p.type}</span>
              <h3 className="text-2xl font-bold">{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}