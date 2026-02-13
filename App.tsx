
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AIChat from './components/AIChat';
import { CATEGORIES, MOCK_PRODUCTS } from './constants';
import { Product, Category } from './types';
// Added missing icons (MessageCircle, Bell, User) to resolve "Cannot find name" errors
import { 
  TrendingUp, 
  ShieldCheck, 
  Truck, 
  Store,
  ArrowRight,
  Filter,
  CheckCircle2,
  MessageCircle,
  Bell,
  User
} from 'lucide-react';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.seller.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
    alert(`${product.name} telah ditambahkan ke keranjang belanja.`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={setSearchQuery} cartCount={cartItems.length} />
      
      <main className="flex-1">
        {/* Banner Section */}
        <Hero />

        {/* Categories Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Store className="w-5 h-5 text-[#8B4513]" /> Kategori Pilihan
              </h2>
              <button 
                onClick={() => setSelectedCategory(null)}
                className="text-xs font-semibold text-[#8B4513] hover:underline"
              >
                Lihat Semua
              </button>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex flex-col items-center gap-2 min-w-[80px] group transition-all ${
                    selectedCategory === cat.name ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-sm ${
                    selectedCategory === cat.name 
                      ? 'bg-[#8B4513] text-white' 
                      : `${cat.color} group-hover:shadow-md`
                  }`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[11px] font-bold text-center ${
                    selectedCategory === cat.name ? 'text-[#8B4513]' : 'text-gray-600'
                  }`}>
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <ShieldCheck className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Transaksi Aman</h3>
                <p className="text-sm text-gray-600">Garansi uang kembali & pemeriksaan kesehatan ternak oleh tim ahli.</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Pengiriman Khusus</h3>
                <p className="text-sm text-gray-600">Armada pengiriman khusus hewan ternak yang nyaman & terpercaya.</p>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Kualitas Terjamin</h3>
                <p className="text-sm text-gray-600">Semua peternak telah melalui verifikasi ketat & standar mutu.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Feed Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#8B4513] p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Rekomendasi Hari Ini</h2>
                <p className="text-xs text-gray-500">Hasil ternak terbaik dari peternak terverifikasi</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
              <button className="text-[#8B4513] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Lihat Lainnya <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <ProductGrid 
              products={filteredProducts} 
              onAddToCart={handleAddToCart} 
            />
          ) : (
            <div className="bg-white rounded-3xl p-20 text-center shadow-sm border border-dashed border-gray-300">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Store className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Produk tidak ditemukan</h3>
              <p className="text-gray-500">Coba gunakan kata kunci lain atau asisten AI kami.</p>
            </div>
          )}

          {/* Special Banner */}
          <div className="mt-16 bg-[#d2b48c] rounded-3xl p-8 md:p-12 relative overflow-hidden">
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <span className="inline-block bg-[#8B4513] text-white text-[10px] font-extrabold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
                    Eksklusif Djoeragan
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-[#8B4513] mb-4">
                    Mau Menjadi Seller? <br/> Raih Omzet Milyaran!
                  </h2>
                  <p className="text-[#8B4513]/80 font-medium mb-8 max-w-md">
                    Bergabunglah dengan ribuan peternak sukses lainnya. Kelola tokomu dengan asisten AI pintar.
                  </p>
                  <button className="bg-[#8B4513] text-white px-8 py-3 rounded-xl font-bold shadow-xl hover:bg-black transition-all flex items-center gap-3 mx-auto md:mx-0">
                    Buka Toko Gratis <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=400" 
                      className="relative rounded-2xl shadow-2xl border-4 border-white/30 transform md:rotate-3 hover:rotate-0 transition-transform duration-500"
                      alt="Seller Promo"
                    />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* Mobile Footer Menu (Simulating Shopee/Modern Marketplaces) */}
      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-100 z-50 md:hidden">
        <div className="flex justify-around items-center h-16">
          <button className="flex flex-col items-center gap-1 text-[#8B4513]">
            <Store className="w-6 h-6" />
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <TrendingUp className="w-6 h-6" />
            <span className="text-[10px] font-bold">Terpopuler</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <MessageCircle className="w-6 h-6" />
            <span className="text-[10px] font-bold">Chat</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Bell className="w-6 h-6" />
            <span className="text-[10px] font-bold">Notifikasi</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-bold">Akun</span>
          </button>
        </div>
      </footer>

      {/* AI Assistant FAB */}
      <AIChat />

      {/* Desktop Footer */}
      <footer className="hidden md:block bg-gray-50 border-t border-gray-200 py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-[#8B4513] mb-4">DJOERAGAN TERNAK</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Tentang Kami</li>
                <li>Karir</li>
                <li>Kebijakan Privasi</li>
                <li>Syarat & Ketentuan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#8B4513] mb-4">BELI</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Cara Belanja</li>
                <li>Pembayaran</li>
                <li>Asuransi Ternak</li>
                <li>Cek Status Pesanan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#8B4513] mb-4">JUAL</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Pusat Edukasi Seller</li>
                <li>Daftar Peternak</li>
                <li>Iklankan Ternakmu</li>
                <li>Gudang Pakan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#8B4513] mb-4">HUBUNGI KAMI</h4>
              <div className="flex gap-4">
                 <div className="w-10 h-10 bg-[#d2b48c] rounded-full flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=50" className="w-6 h-6 rounded" alt="Social" />
                 </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">© 2024 Djoeragan Ternak Indonesia. <br/> Seluruh Hak Cipta Dilindungi.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
