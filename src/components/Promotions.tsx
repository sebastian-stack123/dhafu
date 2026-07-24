import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Promotions() {
  return (
    <section id="promotions" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] w-full overflow-hidden flex items-center justify-center group"
        >
          {/* Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=2000)' }}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500" />
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-6">
              Descubre nuestras promociones
            </h2>
            <p className="text-xl text-text-muted mb-8 font-light">
              Ofertas exclusivas por tiempo limitado en piezas seleccionadas.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-accent hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
              Comprar Ahora
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
