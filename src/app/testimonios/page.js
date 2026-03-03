import Card from '@/components/ui/Card';

export default function Testimonios() {
  const reviews = [
    { name: "Lucía P.", role: "Quinceañera", text: "Me hicieron sentir como una estrella. La coreografía fue increíble." },
    { name: "Marcos T.", role: "Marketing", text: "Excelente energía para el lanzamiento de nuestro producto." }
  ];

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16">Voces de la <span className="text-accent">Comunidad</span></h1>
        <div className="space-y-6">
          {reviews.map((r, i) => (
            <Card key={i}>
              <p className="italic text-muted mb-4">"{r.text}"</p>
              <h4 className="font-bold">{r.name} - <span className="text-accent text-xs">{r.role}</span></h4>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}