import Card from '@/components/ui/card';

export default function Nosotros() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Nuestra <span className="text-accent">Pasión</span></h1>
          <p className="text-muted text-xl max-w-3xl mx-auto leading-relaxed">
            Más que un grupo de baile, somos una familia de artistas dedicados a transmitir la "Fuerza de la Vida".
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden aspect-square bg-surface border border-border flex items-center justify-center text-accent/10 font-bold text-9xl">P.O.L</div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-muted mb-6">Fundado en 2018, nacimos para profesionalizar el entretenimiento escénico.</p>
            <p className="text-muted">Hoy contamos con un staff de más de 20 bailarines y nuestra propia academia de formación.</p>
          </div>
        </div>
      </div>
    </main>
  );
}