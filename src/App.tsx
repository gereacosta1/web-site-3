import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BatteryCharging, ChevronRight, Zap, Shield, Wind, Clock, MessageCircle, Phone, Mail, MapPin, Star, Menu, X as CloseIcon } from 'lucide-react';
import { MapComponent } from './components/Map';
import { Navigation } from './components/Navigation';
import { ImageCarousel } from './components/ImageCarousel';
import { ProductModal } from './components/ProductModal';
import { AboutCarousel } from './components/AboutCarousel';
import { scooters } from './data/scooters';
import type { Scooter } from './types/scooter';

const testimonials = [
  {
    id: 1,
    name: "María García",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    comment: "El mejor scooter que he tenido. La autonomía es increíble y el servicio post-venta excelente.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    comment: "Increíble relación calidad-precio. Lo uso todos los días para ir al trabajo.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Martínez",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    comment: "La mejor decisión que he tomado. Ahorro tiempo y dinero en mis desplazamientos.",
    rating: 5
  },
  {
    id: 4,
    name: "Juan Pérez",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    comment: "Excelente servicio técnico y el scooter supera todas mis expectativas.",
    rating: 4
  },
  {
    id: 5,
    name: "Laura Sánchez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    comment: "Perfecto para moverse por la ciudad. La batería dura más de lo esperado.",
    rating: 5
  },
  {
    id: 6,
    name: "Miguel Torres",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    comment: "La calidad de construcción es excelente. Muy satisfecho con mi compra.",
    rating: 5
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-yellow-400 mb-4">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className="w-5 h-5"
          fill={index < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/17867369730"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
    </a>
  );
}

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[80vh] md:h-screen">
        <div className="absolute inset-0">
          <img 
            src="/img/background-img.jpg" 
            className="w-full h-full object-cover"
            alt="Hero electric scooter"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6">
              El Futuro es
              <br />
              Eléctrico
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl">
              Descubre nuestra línea de scooters eléctricos que combinan 
              tecnología avanzada con diseño sostenible.
            </p>
            <Link 
              to="/catalogo" 
              className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-opacity-90 transition-all flex items-center gap-2 w-fit"
            >
              Ver Catálogo
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="bg-white text-black w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Zap className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Potencia Eléctrica</h3>
              <p className="text-gray-400 text-sm md:text-base">Motores de alta eficiencia para un rendimiento óptimo</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-black w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Shield className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Máxima Seguridad</h3>
              <p className="text-gray-400 text-sm md:text-base">Sistemas avanzados de frenado y estabilidad</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-black w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Wind className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Diseño Aerodinámico</h3>
              <p className="text-gray-400 text-sm md:text-base">Mayor eficiencia y menor resistencia al viento</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-white">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-900 p-6 md:p-8 rounded-lg transform hover:scale-105 transition-transform">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full mb-4"
                />
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-300 mb-4 text-sm md:text-base">{testimonial.comment}</p>
                <p className="text-white font-semibold text-sm md:text-base">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Carousel with Info */}
      <div className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Descubre Nuestra Colección</h2>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                Nuestra galería muestra la evolución de la movilidad urbana. Cada modelo 
                representa la perfecta combinación entre tecnología avanzada y diseño 
                sostenible, creando una experiencia de conducción única.
              </p>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                Desde scooters compactos ideales para el commuting diario hasta 
                modelos premium con prestaciones avanzadas, nuestra gama completa 
                está diseñada para satisfacer todas las necesidades de movilidad urbana.
              </p>
              <ul className="text-gray-300 space-y-3 md:space-y-4 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  Motores de última generación
                </li>
                <li className="flex items-center gap-2">
                  <BatteryCharging className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  Baterías de alta capacidad
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  Sistemas de seguridad avanzados
                </li>
              </ul>
            </div>
            <div className="mt-8 lg:mt-0">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState<Scooter | null>(null);

  return (
    <div className="pt-16 md:pt-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center relative group">
          <span className="catalog-title">
            Nuestros Modelos
          </span>
          <span className="absolute -bottom-2 left-1/2 w-48 h-1 bg-gradient-to-r from-red-500 via-orange-400 to-amber-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {scooters.map((scooter) => (
            <div key={scooter.id} className="group cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="relative aspect-[4/3] overflow-hidden"
                onClick={() => setSelectedProduct(scooter)}
              >
                <img 
                  src={scooter.image} 
                  alt={scooter.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{scooter.name}</h3>
                <p className="text-gray-400 mb-2 text-sm">{scooter.year}</p>
                <p className="text-white font-bold mb-3 md:mb-4">{scooter.price}</p>
                <p className="text-gray-400 mb-3 md:mb-4 text-sm">{scooter.description}</p>
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm">
                    <BatteryCharging className="w-4 h-4" />
                    <span>{scooter.specs.range}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{scooter.specs.speed}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProduct(scooter)}
                  className="text-white font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm"
                >
                  Ver Detalles
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

function About() {
  return (
    <div className="pt-16 md:pt-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white">Sobre Nosotros</h2>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              Desde nuestra fundación en 2020, EcoRide ha estado a la vanguardia de la revolución de la movilidad eléctrica. 
              Nuestra misión es transformar la manera en que las personas se mueven por la ciudad, ofreciendo soluciones de 
              transporte que combinan tecnología de vanguardia con un compromiso inquebrantable con la sostenibilidad.
            </p>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              En nuestro moderno centro de desarrollo e innovación, un equipo de ingenieros y diseñadores trabaja 
              incansablemente para crear vehículos que no solo sean eficientes y seguros, sino que también reflejen 
              el futuro de la movilidad urbana.
            </p>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              Cada scooter que sale de nuestras instalaciones es el resultado de miles de horas de investigación, 
              desarrollo y pruebas exhaustivas. Utilizamos los materiales más avanzados y las últimas tecnologías 
              para garantizar que nuestros vehículos cumplan con los más altos estándares de calidad y rendimiento.
            </p>
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">1000+</p>
                <p className="text-gray-400 text-sm md:text-base">Clientes Satisfechos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">12</p>
                <p className="text-gray-400 text-sm md:text-base">Modelos Diferentes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</p>
                <p className="text-gray-400 text-sm md:text-base">Soporte Técnico</p>
              </div>
            </div>
          </div>
          <div className="about-carousel-container mt-8 lg:mt-0">
            <AboutCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="pt-16 md:pt-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-white">Contacto</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className="mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">Información de Contacto</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 text-gray-300">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">+34 900 123 456</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-gray-300">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">info@ecoride.com</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-gray-300">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">Calle Gran Vía 1, Madrid</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">Horario</h3>
              <div className="space-y-2 text-gray-300 text-sm md:text-base">
                <p>Lunes a Viernes: 9:00 - 20:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">EcoRide</h4>
            <p className="text-gray-400 text-sm md:text-base">Transformando la movilidad urbana con tecnología sostenible.</p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Enlaces</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Inicio</Link></li>
              <li><Link to="/catalogo" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Catálogo</Link></li>
              <li><Link to="/nosotros" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Nosotros</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Contacto</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
              <li>info@ecoride.com</li>
              <li>+34 900 123 456</li>
              <li>Madrid, España</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;