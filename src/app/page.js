import Card from '@/components/ui/card';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import PortfolioGrid from '@/components/ui/PortfolioGrid';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PortfolioGrid />
      <section className="py-20 px-6 bg-surface2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Shows para Eventos", icon: "music", desc: "Bodas, corporativos y festivales con coreografías exclusivas." },
              { title: "Animación & Performance", icon: "sparkles", desc: "Activaciones de marca e interacción para mantener la energía alta." },
              { title: "Academia & Clases", icon: "graduation-cap", desc: "Formación profesional para todos los niveles y edades." }
            ].map((s, i) => (
              <Card key={i}>
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 text-accent">
                  <i data-lucide={s.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{s.desc}</p>
                <Link href="/servicios" className="text-sm font-bold flex items-center gap-2 hover:text-accent transition-colors">
                  Saber más <i data-lucide="arrow-right" className="w-4 h-4"></i>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}