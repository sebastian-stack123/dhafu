import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=2000)' }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-tighter mb-6"
        >
          Tu estilo.<br />Tu actitud.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-text-muted mb-10 font-light"
        >
          Moda urbana diseñada para destacar. Descubre prendas exclusivas para hombre y mujer.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#featured" className="group relative px-8 py-4 bg-accent text-white font-medium uppercase tracking-widest text-sm hover:bg-accent-light transition-colors flex items-center justify-center overflow-hidden w-full sm:w-auto">
            <span className="relative z-10 flex items-center">
              Comprar Ahora
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#new-collection" className="group px-8 py-4 bg-transparent border border-white text-white font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-colors flex items-center justify-center w-full sm:w-auto">
            Nueva Colección
          </a>
        </motion.div>
      </div>
    </section>
  );
}
