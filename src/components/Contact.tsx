import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Map } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Store Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
              Nuestra <span className="text-accent">Tienda</span>
            </h2>
            <p className="text-text-muted mb-10 text-lg font-light">
              Visítanos para descubrir nuestras colecciones en persona y recibir asesoría de estilo personalizada.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-accent w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-1">Ubicación</h4>
                  <p className="text-text-muted font-light">Av. La Coruña y Toledo E12-45<br />La Floresta<br />Quito, Ecuador</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-accent w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-1">Teléfono</h4>
                  <p className="text-text-muted font-light">097 996 1906</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-accent w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-1">Email</h4>
                  <p className="text-text-muted font-light">dhafu1021@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-accent w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-1">Horario</h4>
                  <p className="text-text-muted font-light">Lunes - Sábado: 10:00 - 19:00<br />Domingo: Cerrado</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="inline-flex items-center text-xs text-white uppercase tracking-wider font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                Compras en tienda
              </span>
              <span className="inline-flex items-center text-xs text-white uppercase tracking-wider font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                Retiro en tienda
              </span>
              <span className="inline-flex items-center text-xs text-white uppercase tracking-wider font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                Envíos
              </span>
            </div>
          </motion.div>
          
          {/* Contact Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-12 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide mb-6">
              Ponte en contacto
            </h3>
            <p className="text-text-muted mb-8 font-light leading-relaxed">
              ¿Tienes preguntas sobre un producto, un pedido o simplemente quieres saludarnos? Nuestro equipo está listo para ayudarte.
            </p>
            
            <div className="space-y-4">
              <a href="#" className="flex items-center justify-center w-full px-8 py-4 bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors uppercase tracking-widest text-sm font-bold">
                <MessageSquare className="mr-2 w-5 h-5" />
                Contactar por WhatsApp
              </a>
              <a href="tel:+593979961906" className="flex items-center justify-center w-full px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold">
                <Phone className="mr-2 w-5 h-5" />
                Llamar Ahora
              </a>
              <a href="#" className="flex items-center justify-center w-full px-8 py-4 bg-transparent border border-white/20 text-white hover:border-accent hover:text-accent transition-colors uppercase tracking-widest text-sm font-bold">
                <Map className="mr-2 w-5 h-5" />
                Cómo Llegar
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
