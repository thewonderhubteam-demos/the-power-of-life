import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Servicios() {
  const planes = [
    {
      name: "Essential Show",
      price: "Consulte",
      desc: "Ideal para recepciones y eventos privados pequeños.",
      features: ["4 Bailarines", "15 min de Performance", "Vestuario Temático", "Música Editada"],
      cta: "Lo quiero",
      highlight: false
    },
    {
      name: "Power Experience",
      price: "Más Popular",
      desc: "El equilibrio perfecto entre show y participación del público.",
      features: ["6 Bailarines", "30 min de Show", "Interacción/Animación", "Efectos Visuales Básicos", "Meet & Greet"],
      cta: "Reservar Ahora",
      highlight: true
    },
    {
      name: "Elite Production",
      price: "Full Pack",
      desc: "Producción cinematográfica para eventos corporativos y bodas de lujo.",
      features: ["10+ Bailarines", "Shows Segmentados", "Coreografía Personalizada", "Dirección Artística", "Maquillaje Pro"],
      cta: "Cotizar VIP",
      highlight: false
    }
  ];

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Soluciones Integrales</h1>
          <p className="text-muted max-w-2xl mx-auto">Desde desarrollo web y móvil hasta consultoría en la nube y optimización de conversión.</p>
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
