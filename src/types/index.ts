export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'men' | 'women' | 'accessories';
  colors: Color[];
  sizes: Size[];
  description: string;
  features: string[];
  inStock: boolean;
}

export interface Color {
  name: string;
  hex: string;
  image?: string;
}

export interface Size {
  name: string;
  value: string;
  available: boolean;
}

export interface CartItem {
  product: Product;
  color: Color;
  size: Size;
  quantity: number;
}