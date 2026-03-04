import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

export default function Contacto() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-6xl font-extrabold mb-8">Reserva <br /><span className="text-accent">tu Fecha</span></h1>
          <p className="text-muted text-lg">¿Listos para el show? Diseñemos una experiencia a tu medida.</p>
        </div>
        <Card className="p-10">
          <form className="space-y-6">
            <input type="text" placeholder="Nombre" className="w-full bg-background border border-border p-4 rounded-xl outline-none focus:border-accent" />
            <select className="w-full bg-background border border-border p-4 rounded-xl text-muted">
              <option>Show para Evento</option>
              <option>Inscripción Academia</option>
            </select>
            <textarea placeholder="Tu mensaje" rows="4" className="w-full bg-background border border-border p-4 rounded-xl outline-none focus:border-accent"></textarea>
            <Button className="w-full py-4">ENVIAR SOLICITUD</Button>
          </form>
        </Card>
      </div>
    </main>
  );
}