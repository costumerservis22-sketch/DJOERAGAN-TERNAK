
import React from 'react';
import { Category, Product } from './types';
import { 
  Beef, 
  Dog, 
  Bird, 
  Grape, 
  Package, 
  Stethoscope,
  ChevronRight,
  ChevronLeft,
  Star,
  MapPin,
  ShoppingBag,
  User,
  MessageSquare,
  Search,
  Plus,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Truck
} from 'lucide-react';

export const CATEGORIES = [
  { name: Category.Sapi, icon: <Beef className="w-6 h-6" />, color: 'bg-orange-100 text-orange-700' },
  { name: Category.Kambing, icon: <Dog className="w-6 h-6" />, color: 'bg-amber-100 text-amber-700' },
  { name: Category.Domba, icon: <Dog className="w-6 h-6" />, color: 'bg-stone-100 text-stone-700' },
  { name: Category.Unggas, icon: <Bird className="w-6 h-6" />, color: 'bg-yellow-100 text-yellow-700' },
  { name: Category.Pakan, icon: <Package className="w-6 h-6" />, color: 'bg-green-100 text-green-700' },
  { name: Category.Obat, icon: <Stethoscope className="w-6 h-6" />, color: 'bg-blue-100 text-blue-700' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sapi Limousin Super Jantan',
    price: 28500000,
    category: Category.Sapi,
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
    location: 'Boyolali, Jateng',
    seller: 'Berkah Ternak Jaya',
    rating: 4.9,
    sold: 12,
    weight: '650kg',
    age: '2.5 Tahun',
    description: 'Sapi Limousin kualitas super, sehat, bebas PMK, cocok untuk investasi atau qurban. Perawatan istimewa dengan pakan organik.'
  },
  {
    id: '2',
    name: 'Kambing Etawa Grade A',
    price: 4500000,
    category: Category.Kambing,
    image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=800',
    location: 'Sleman, DIY',
    seller: 'Etawa Farm Mandiri',
    rating: 4.8,
    sold: 45,
    weight: '45kg',
    age: '1.5 Tahun',
    description: 'Kambing PE (Peranakan Etawa) kualitas kontes. Postur tegap, telinga panjang melipat, bulu lebat.'
  },
  {
    id: '3',
    name: 'Pakan Konsentrat Sapi Penggemukan',
    price: 185000,
    category: Category.Pakan,
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800',
    location: 'Kediri, Jatim',
    seller: 'NutriFeed Indo',
    rating: 4.7,
    sold: 1200,
    description: 'Pakan tambahan kualitas tinggi untuk mempercepat penggemukan sapi pedaging. Mengandung protein 16%.'
  },
  {
    id: '4',
    name: 'Domba Merino Garut',
    price: 3200000,
    category: Category.Domba,
    image: 'https://images.unsplash.com/photo-1484557918186-7b4e59ad7335?auto=format&fit=crop&q=80&w=800',
    location: 'Garut, Jabar',
    seller: 'Priangan Farm',
    rating: 5.0,
    sold: 8,
    weight: '35kg',
    age: '1 Tahun',
    description: 'Domba Merino asli Garut. Bulu putih bersih, postur bulat, sehat dan lincah.'
  },
  {
    id: '5',
    name: 'Ayam Kampung Asli (DOC)',
    price: 8500,
    category: Category.Unggas,
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800',
    location: 'Bogor, Jabar',
    seller: 'Unggas Lestari',
    rating: 4.6,
    sold: 5000,
    description: 'Bibit ayam kampung asli umur 1-2 hari. Sudah vaksin ND+IB. Minimal pembelian 100 ekor.'
  },
  {
    id: '6',
    name: 'Vitamin Ternak Bio-Complex',
    price: 75000,
    category: Category.Obat,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    location: 'Jakarta, DKI',
    seller: 'Medika Animal',
    rating: 4.9,
    sold: 850,
    description: 'Multivitamin lengkap untuk daya tahan tubuh ternak. Mencegah penyakit dan meningkatkan nafsu makan.'
  }
];
