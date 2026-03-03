// robots.js
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://thepoweroflife.netlify.app/sitemap.xml',
  }
}