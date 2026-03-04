'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'glass-nav py-4 border-b border-border' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tighter">POWER OF <span className="text-accent">LIFE</span></Link>
        <div className="hidden md:flex gap-8 items-center text-sm font-bold">
          <Link href="/nosotros" className="hover:text-accent">NOSOTROS</Link>
          <Link href="/servicios" className="hover:text-accent">SERVICIOS</Link>
          <Link href="/portafolio" className="hover:text-accent">PORTAFOLIO</Link>
          <Button href="/contacto" className="py-2 px-6">COTIZAR</Button>
        </div>
      </div>
    </nav>
  );
}