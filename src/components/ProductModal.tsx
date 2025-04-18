import React from 'react';
import { X, BatteryCharging, Clock, Zap } from 'lucide-react';
import { Scooter } from '../types/scooter';

interface ProductModalProps {
  product: Scooter;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="modal" onClick={onClose}>
      <div 
        className="bg-gray-900 rounded-lg w-[95%] max-w-4xl p-4 md:p-8 relative mx-4"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-gray-400 mb-2 text-sm md:text-base">{product.year}</p>
            <p className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">{product.price}</p>
            <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">{product.description}</p>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <BatteryCharging className="w-4 h-4 md:w-5 md:h-5" />
                <span>Autonomía: {product.specs.range}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span>Velocidad máxima: {product.specs.speed}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <Zap className="w-4 h-4 md:w-5 md:h-5" />
                <span>Potencia: {product.specs.power}</span>
              </div>
            </div>

            <button className="mt-6 md:mt-8 bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-opacity-90 transition-all w-full md:w-auto">
              Solicitar información
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}