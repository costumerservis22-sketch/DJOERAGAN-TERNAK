
import React from 'react';
import { Product } from '../types';
import { Star, MapPin, ShoppingBag, Heart } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group cursor-pointer"
        >
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2 flex flex-col gap-2">
               <button className="bg-white/90 backdrop-blur p-2 rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
            </div>
            {product.category === 'Sapi' && (
              <div className="absolute bottom-2 left-2 bg-[#8B4513]/90 text-white text-[10px] font-bold px-2 py-1 rounded">
                KUALITAS SUPER
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-3">
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px] mb-1">
              {product.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[#8B4513] font-bold">
                Rp {product.price.toLocaleString('id-ID')}
              </span>
            </div>
            
            <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-2">
              <MapPin className="w-3 h-3 text-orange-400" />
              <span className="truncate">{product.location}</span>
            </div>

            <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-[11px] font-medium text-gray-600">{product.rating}</span>
                <span className="text-[10px] text-gray-400 border-l pl-1 ml-1">Terjual {product.sold}</span>
              </div>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="mt-3 w-full bg-[#d2b48c] text-[#8B4513] hover:bg-[#8B4513] hover:text-white py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Beli Sekarang
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
