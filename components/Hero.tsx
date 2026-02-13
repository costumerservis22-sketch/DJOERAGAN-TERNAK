
import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-[16/6] md:aspect-[21/7]">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
          alt="Banner Peternakan"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/80 via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white">
          <h1 className="text-2xl md:text-5xl font-extrabold mb-2 leading-tight">
            Pasar Ternak Terpercaya <br/> Se-Nusantara
          </h1>
          <p className="text-sm md:text-lg text-white/90 max-w-md mb-6 font-medium">
            Temukan hewan ternak kualitas terbaik langsung dari peternak lokal dengan harga kompetitif.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#d2b48c] hover:bg-[#c1a37c] text-[#8B4513] px-6 py-2.5 rounded-lg font-bold shadow-lg transition-all flex items-center gap-2">
              Mulai Jual <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-6 py-2.5 rounded-lg font-bold transition-all border border-white/30">
              Promo Qurban
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-8 h-1.5 bg-white rounded-full"></div>
          <div className="w-2 h-1.5 bg-white/50 rounded-full"></div>
          <div className="w-2 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
