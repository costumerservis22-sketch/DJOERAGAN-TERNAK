
export enum Category {
  Sapi = 'Sapi',
  Kambing = 'Kambing',
  Domba = 'Domba',
  Unggas = 'Unggas',
  Pakan = 'Pakan',
  Obat = 'Obat & Vitamin'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  location: string;
  seller: string;
  rating: number;
  sold: number;
  description: string;
  weight?: string;
  age?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
