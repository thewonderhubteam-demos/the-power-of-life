import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'The Power of Life | Shows y Academia de Baile',
  description: 'Elevamos tu evento con shows de danza profesional y energía inigualable.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/lucide@latest"></script>
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <script dangerouslySetInnerHTML={{ __html: 'lucide.createIcons();' }} />
      </body>
    </html>
  );
}