'use client';
import { useState } from 'react';
import Card from '@/components/ui/Card';

const PREVIEW_PRODUCTS = [
  { id: 1, name: 'Suscripción Premium', price: '$49.00', image: '/img/prod1.jpg' },
  { id: 2, name: 'Paquete de Consultoría', price: '$299.00', image: '/img/prod2.jpg' },
  { id: 3, name: 'Licencia Enterprise', price: '$999.00', image: '/img/prod3.jpg' },
];

export default function StorePreview() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Catálogo de Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PREVIEW_PRODUCTS.map((product) => (
          <Card key={product.id} className="p-4 border">
            <div className="aspect-square bg-slate-100 mb-4 rounded-lg" />
            <h3 className="font-semibold text-xl">{product.name}</h3>
            <p className="text-primary font-bold text-lg">{product.price}</p>
            <button 
              onClick={() => setSelected(product)}
              className="mt-4 w-full bg-secondary text-white py-2 rounded-md hover:bg-primary transition-colors"
            >
              Ver Detalles
            </button>
          </Card>
        ))}
      </div>
      
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full">
            <h3 className="text-2xl font-bold">{selected.name}</h3>
            <p className="py-4 text-slate-600">Este es una vista previa del producto. En la implementación final, aquí se integrará el carrito de compras.</p>
            <button 
              onClick={() => setSelected(null)}
              className="w-full border py-2 rounded-md"
            >
              Cerrar Vista
            </button>
          </div>
        </div>
      )}
    </section>
  );
}