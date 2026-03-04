"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const items = [
	{ title: 'Flash Performance', img: '/hero-image.jpg' },
	{ title: 'Stage Clip', img: '/hero-image.jpg' },
	{ title: 'Street Jam', img: '/hero-image.jpg' },
	{ title: 'Weddings', img: '/hero-image.jpg' },
	{ title: 'Festival Set', img: '/hero-image.jpg' },
	{ title: 'Workshop Snippet', img: '/hero-image.jpg' }
];

export default function PortfolioGrid() {
	return (
		<section className="py-20 px-6">
			<div className="max-w-7xl mx-auto">
				<motion.div initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ staggerChildren: 0.08 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{items.map((it, i) => (
						<motion.a key={i} href="/portafolio" className="group block rounded-2xl overflow-hidden bg-surface border border-border" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
							<motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="relative h-48">
								<Image src={it.img} alt={it.title} fill className="object-cover" />
							</motion.div>
							<div className="p-4">
								<h4 className="font-bold text-lg mb-2">{it.title}</h4>
								<p className="text-sm text-muted">Ver proyecto</p>
							</div>
						</motion.a>
					))}
				</motion.div>
			</div>
		</section>
	);
}
