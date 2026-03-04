import Card from '@/components/ui/card';
import Button from '@/components/ui/button';

export default function Servicios() {
  const planes = [
    {
      name: "Essential Show",
      price: "Consulte",
      desc: "Performance dinámico y cercano, perfecto para recepciones, aniversarios y eventos íntimos.",
      features: ["4 Bailarines", "10–20 min de espectáculo", "Vestuario temático", "Selección musical personalizada"],
      cta: "Lo quiero",
      highlight: false
    },
    {
      name: "Power Experience",
      price: "Más Popular",
      desc: "Show de formato medio pensado para energizar al público: coreografías potentes e interacción directa.",
      features: ["6 Bailarines", "25–35 min de show", "Momentos participativos", "Iluminación y visuales básicos", "Encuentro con artistas"],
      cta: "Reservar Ahora",
      highlight: true
    },
    {
      name: "Elite Production",
      price: "Full Pack",
      desc: "Producción a medida para grandes eventos: dirección artística, montaje escénico y experiencia inmersiva.",
      features: ["10+ Bailarines", "Espectáculo modular (30–60 min)", "Coreografía y dirección artística", "Vestuario y maquillaje profesional", "Coordinación técnica completa"],
      cta: "Cotizar VIP",
      highlight: false
    }
  ];

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Servicios Artísticos y Espectáculos</h1>
          <p className="text-muted max-w-2xl mx-auto">Coreografías personalizadas, shows en vivo, talleres y dirección artística para eventos, bodas y festivales — llevamos la energía del baile a tu público con propuestas adaptadas a tu espacio y objetivo.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {planes.map((plan, i) => (
            <div key={i} className={`relative p-[1px] rounded-3xl ${plan.highlight ? 'bg-gradient-to-b from-accent to-accent-blue' : 'bg-border'}`}>
              <div className="bg-surface2 rounded-[23px] p-8 h-full flex flex-col">
                <span className="text-accent text-xs font-black uppercase tracking-widest mb-2">{plan.price}</span>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-muted text-sm mb-8">{plan.desc}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <i data-lucide="check-circle" className="w-5 h-5 text-accent-green"></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlight ? 'primary' : 'secondary'} href="/contacto" className="w-full">
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-surface rounded-3xl p-12 text-center border border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] -z-10"></div>
          <h2 className="text-3xl font-bold mb-4">¿Buscas algo totalmente a medida?</h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">Si tienes una idea loca, nosotros le damos ritmo. Creamos conceptos desde cero para lanzamientos de marca.</p>
          <Button href="/contacto" variant="secondary" className="px-12">Contactar Director Artístico</Button>
        </div>
      </div>
    </main>
  );
}
