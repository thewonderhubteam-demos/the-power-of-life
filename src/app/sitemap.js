// sitemap.js
export default function sitemap() {
  const baseUrl = 'https://thepoweroflife.netlify.app';
  return ['', '/nosotros', '/servicios', '/portafolio', '/faq', '/contacto'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}