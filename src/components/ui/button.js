import Link from 'next/link';

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const base = "px-6 py-3 rounded-full font-bold transition-all inline-flex items-center justify-center text-sm";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover glow-hover",
    secondary: "bg-surface border border-border text-text hover:border-accent"
  };

  if (href) return <Link href={href} className={`${base} ${variants[variant]} ${className}`}>{children}</Link>;
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
}