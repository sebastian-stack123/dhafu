import { useState, useEffect } from 'react';
import { ShoppingCart, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        <button
          onClick={() => setCartOpen(true)}
          className="w-14 h-14 bg-white text-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform relative group"
        >
          <ShoppingCart size={24} />
          <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-primary">
            0
          </span>
          {/* Tooltip */}
          <div className="absolute right-full mr-4 bg-primary text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">
            Ver Carrito
          </div>
        </button>

        <a
          href="#"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform relative group"
        >
          <MessageCircle size={28} />
          {/* Tooltip */}
          <div className="absolute right-full mr-4 bg-primary text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-white/10">
            Chat WhatsApp
          </div>
        </a>
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-secondary shadow-2xl z-50 flex flex-col border-l border-white/5"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <h2 className="text-xl font-display font-bold text-white uppercase tracking-wider">Tu Carrito</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-text-muted hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <ShoppingCart size={48} className="text-white/20 mb-4" />
                <p className="text-text-muted font-light mb-6">Tu carrito está vacío.</p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="px-8 py-4 bg-accent text-white uppercase tracking-widest text-sm font-bold hover:bg-accent-light transition-colors"
                >
                  Continuar Comprando
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
