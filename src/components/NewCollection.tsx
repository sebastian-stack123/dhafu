import { motion } from 'motion/react';
import { newCollection } from '../data';
import { ShoppingBag } from 'lucide-react';

export default function NewCollection() {
  return (
    <section id="new-collection" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
              Nueva <span className="text-accent">Colección</span>
            </h2>
            <p className="text-text-muted max-w-xl text-lg font-light">
              Descubre las últimas tendencias en moda urbana. Piezas exclusivas diseñadas para marcar la diferencia.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center text-accent hover:text-accent-light transition-colors uppercase tracking-widest text-sm font-medium mt-6 md:mt-0">
            Ver Todo Catálogo <span className="ml-2">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newCollection.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-primary mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                    Nuevo
                  </div>
                )}
                
                {/* Overlay Add to Cart */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-white text-primary hover:bg-accent hover:text-white transition-colors py-3 flex items-center justify-center font-medium uppercase tracking-wider text-sm">
                    <ShoppingBag size={18} className="mr-2" />
                    Comprar
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-accent text-xs uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="text-lg font-medium text-white mb-2">{product.name}</h3>
                <p className="text-text-muted text-sm line-clamp-2 mb-3">{product.description}</p>
                <p className="text-white font-display text-lg">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-accent hover:text-accent-light transition-colors uppercase tracking-widest text-sm font-medium border-b border-accent pb-1">
            Ver Todo Catálogo
          </a>
        </div>
      </div>
    </section>
  );
}
