import { motion } from 'motion/react';
import { Diamond, TrendingUp, Zap, Truck } from 'lucide-react';

export default function WhyDhafu() {
  const features = [
    {
      icon: <Diamond size={32} strokeWidth={1.5} />,
      title: 'Calidad Premium',
      description: 'Materiales seleccionados y confección detallada para garantizar la máxima durabilidad.',
    },
    {
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      title: 'Últimas Tendencias',
      description: 'Diseños exclusivos y vanguardistas inspirados en las calles de las principales capitales de la moda.',
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: 'Estilo Urbano',
      description: 'Una fusión perfecta entre comodidad y lujo para destacar en cualquier entorno.',
    },
    {
      icon: <Truck size={32} strokeWidth={1.5} />,
      title: 'Envío Rápido',
      description: 'Entregas seguras y veloces a todo el país. Tu estilo no puede esperar.',
    },
  ];

  return (
    <section className="py-24 bg-primary border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            ¿Por qué <span className="text-accent">DHAFÚ</span>?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary flex items-center justify-center text-accent rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-3 uppercase tracking-wider">
                {feature.title}
              </h3>
              <p className="text-text-muted font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
