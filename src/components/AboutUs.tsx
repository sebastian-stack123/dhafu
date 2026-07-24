import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/5 blur-[100px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-8 leading-tight">
              Más que ropa, <br />
              <span className="text-accent">una actitud.</span>
            </h2>
            <p className="text-lg text-text-muted font-light leading-relaxed mb-8">
              En DHAFÚ COLECCIÓN creemos que la moda es una forma de expresar quién eres. Diseñamos y seleccionamos prendas modernas para quienes buscan destacar con estilo, calidad y personalidad.
            </p>
            <p className="text-lg text-text-muted font-light leading-relaxed mb-10">
              Nacidos en La Floresta, Quito, somos más que una marca; somos una comunidad unida por el amor a la cultura urbana y la estética premium.
            </p>
            <img src="https://images.unsplash.com/photo-1572295627230-011409d261e6?auto=format&fit=crop&q=80&w=400&h=150" alt="Signature" className="h-16 object-contain opacity-50 grayscale" referrerPolicy="no-referrer" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&q=80&w=1000"
                alt="About DHAFÚ"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/10 m-4"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
