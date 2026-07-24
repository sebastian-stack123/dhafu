import { motion } from 'motion/react';
import { lookbookImages } from '../data';

export default function Lookbook() {
  return (
    <section className="py-24 bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            Look<span className="text-accent">book</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-lg font-light">
            Inspiración urbana. Explora cómo nuestra comunidad lleva el estilo DHAFÚ a las calles.
          </p>
        </div>

        {/* Masonry Layout Approximation using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {lookbookImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden"
            >
              <img
                src={src}
                alt={`Lookbook image ${index + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 uppercase tracking-widest text-xs">
                  Ver Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-10 py-4 border border-white/20 text-white hover:bg-white hover:text-primary transition-colors uppercase tracking-widest text-sm font-medium">
            Ver Galería Completa
          </a>
        </div>
      </div>
    </section>
  );
}
