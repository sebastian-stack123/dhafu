import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-widest mb-6">
              DHAFÚ
            </h2>
            <p className="text-text-muted font-light text-sm leading-relaxed mb-8">
              Tu estilo. Tu actitud. Moda urbana diseñada para destacar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Explorar</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-muted hover:text-accent transition-colors text-sm font-light">Inicio</a></li>
              <li><a href="#new-collection" className="text-text-muted hover:text-accent transition-colors text-sm font-light">Nueva Colección</a></li>
              <li><a href="#men" className="text-text-muted hover:text-accent transition-colors text-sm font-light">Hombre</a></li>
              <li><a href="#women" className="text-text-muted hover:text-accent transition-colors text-sm font-light">Mujer</a></li>
              <li><a href="#promotions" className="text-text-muted hover:text-accent transition-colors text-sm font-light">Promociones</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Soporte</h4>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-text-muted hover:text-accent transition-colors text-sm font-light">Contacto</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent transition-colors text-sm font-light">Términos y Condiciones</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent transition-colors text-sm font-light">Política de Privacidad</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent transition-colors text-sm font-light">Envíos y Devoluciones</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent transition-colors text-sm font-light">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Encuéntranos</h4>
            <address className="not-italic text-text-muted text-sm font-light leading-relaxed mb-4">
              Av. La Coruña y Toledo E12-45<br />
              La Floresta<br />
              Quito, Ecuador
            </address>
            <p className="text-text-muted text-sm font-light mb-1">097 996 1906</p>
            <p className="text-text-muted text-sm font-light">dhafu1021@gmail.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted font-light">
          <p>&copy; {new Date().getFullYear()} DHAFÚ COLECCIÓN. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>🇪🇨 Hecho en Ecuador</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
