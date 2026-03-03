import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-accent/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface2 border border-border mb-8 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-bold text-accent tracking-widest uppercase">Agenda 2026 Abierta</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-tight">
            Shows de baile que <br />
            <span className="gradient-text">prenden</span> cualquier evento
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Presentaciones, animación y formación para todas las edades. Elevamos el estándar artístico de tus celebraciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/contacto" variant="primary">Cotizar show</Button>
            <Button href="/servicios" variant="secondary">Ver clases</Button>
          </div>
        </div>
      </section>

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