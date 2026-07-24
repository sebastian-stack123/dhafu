import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Nueva Colección', href: '#new-collection' },
    { name: 'Hombre', href: '#men' },
    { name: 'Mujer', href: '#women' },
    { name: 'Promociones', href: '#promotions' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-accent transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <a href="#" className="text-2xl font-display font-bold tracking-widest text-white uppercase flex-shrink-0">
          DHAFÚ
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-white hover:text-accent transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="text-white hover:text-accent transition-colors hidden sm:block">
            <User size={20} />
          </button>
          <button className="text-white hover:text-accent transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl flex flex-col pt-24 px-6 lg:hidden">
          <button
            className="absolute top-6 right-6 text-white hover:text-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-display uppercase tracking-wider text-white hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
