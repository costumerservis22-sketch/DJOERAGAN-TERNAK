
import React from 'react';
import { Search, ShoppingCart, User, Bell, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onSearch: (query: string) => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#8B4513] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-[#d2b48c] rounded-lg flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=100" className="rounded w-8 h-8 object-cover" alt="Logo" />
            </div>
            <span className="hidden md:block font-bold text-xl tracking-tight uppercase">Djoeragan Ternak</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative group">
              <input
                type="text"
                placeholder="Cari Sapi Limousin, Pakan, atau Obat Ternak..."
                className="w-full bg-white text-gray-900 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-[#d2b48c] transition-all"
                onChange={(e) => onSearch(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400 group-hover:text-[#8B4513]" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="relative cursor-pointer hover:bg-white/10 p-2 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#8B4513]">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="hidden sm:block cursor-pointer hover:bg-white/10 p-2 rounded-full transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="hidden sm:block cursor-pointer hover:bg-white/10 p-2 rounded-full transition-colors">
              <Bell className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-1 pl-3 rounded-full transition-colors border border-white/20">
              <span className="hidden md:block text-sm font-medium">Masuk</span>
              <div className="w-8 h-8 bg-[#d2b48c] rounded-full flex items-center justify-center overflow-hidden">
                <User className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
