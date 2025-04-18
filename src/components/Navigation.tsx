import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-4 md:py-8 ${
      isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-xl md:text-2xl font-bold hover:scale-105 transition-transform">EcoRide</Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className="nav-item group">
              <span className="nav-text">Inicio</span>
            </Link>
            <Link to="/catalogo" className="nav-item group">
              <span className="nav-text">Catálogo</span>
            </Link>
            <Link to="/nosotros" className="nav-item group">
              <span className="nav-text">Nosotros</span>
            </Link>
            <Link to="/contacto" className="nav-item group">
              <span className="nav-text">Contacto</span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed inset-0 bg-black bg-opacity-95 z-50 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link 
                to="/" 
                className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/catalogo" 
                className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </Link>
              <Link 
                to="/nosotros" 
                className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                to="/contacto" 
                className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}