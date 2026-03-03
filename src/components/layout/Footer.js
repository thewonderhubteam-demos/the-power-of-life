import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface2 border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4 text-accent">POWER OF LIFE</h3>
          <p className="text-muted text-sm">Llevando la energía del baile a cada rincón.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contacto</h4>
          <p className="text-muted text-sm">info@poweroflife.dance</p>
          <p className="text-muted text-sm">Medellín, Colombia</p>
        </div>
        <div className="text-xs text-muted">© 2026 Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}