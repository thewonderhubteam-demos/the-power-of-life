'use client';
import { useState } from 'react';
import Button from '@/components/ui/button';
import { pushEvent } from '@/lib/gtm';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      
      pushEvent('form_submission', { form_id: 'contact_main' });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <div className="p-8 text-center bg-surface rounded-3xl border border-accent/20">
      <h3 className="text-2xl font-bold text-accent">¡Mensaje Recibido!</h3>
      <p className="text-muted mt-2">Te contactaremos a la brevedad.</p>
    </div>;
  }

  return (
    <form name="contacto" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="form-name" value="contacto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input name="name" required placeholder="Nombre" className="bg-surface border border-border p-4 rounded-xl outline-none focus:border-accent" />
        <input name="contact" required placeholder="Email o WhatsApp" className="bg-surface border border-border p-4 rounded-xl outline-none focus:border-accent" />
      </div>
      <textarea name="message" rows="4" placeholder="Tu mensaje..." className="w-full bg-surface border border-border p-4 rounded-xl outline-none focus:border-accent resize-none"></textarea>
      <Button type="submit" variant="primary" className="w-full py-4">
        {status === 'loading' ? 'Enviando...' : 'ENVIAR SOLICITUD'}
      </Button>
    </form>
  );
}
