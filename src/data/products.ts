import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Премиум Хлопковая Футболка',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'men',
    colors: [
      { name: 'Черный', hex: '#000000' },
      { name: 'Белый', hex: '#FFFFFF' },
      { name: 'Серый', hex: '#6B7280' },
      { name: 'Темно-синий', hex: '#1E3A8A' }
    ],
    sizes: [
      { name: 'XS', value: 'xs', available: true },
      { name: 'S', value: 's', available: true },
      { name: 'M', value: 'm', available: true },
      { name: 'L', value: 'l', available: true },
      { name: 'XL', value: 'xl', available: false },
      { name: 'XXL', value: 'xxl', available: true }
    ],
    description: 'Премиальная футболка из 100% органического хлопка. Идеальная посадка и максимальный комфорт.',
    features: ['100% органический хлопок', 'Антибактериальная обработка', 'Устойчивость к выцветанию', 'Премиум крой'],
    inStock: true
  },
  {
    id: '2',
    name: 'Классическое Платье',
    price: 8999,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'women',
    colors: [
      { name: 'Черный', hex: '#000000' },
      { name: 'Темно-синий', hex: '#1E3A8A' },
      { name: 'Бордовый', hex: '#7C2D12' }
    ],
    sizes: [
      { name: 'XS', value: 'xs', available: true },
      { name: 'S', value: 's', available: true },
      { name: 'M', value: 'm', available: true },
      { name: 'L', value: 'l', available: true },
      { name: 'XL', value: 'xl', available: true }
    ],
    description: 'Элегантное классическое платье для особых случаев. Сочетает в себе стиль и комфорт.',
    features: ['Премиальная ткань', 'Элегантный крой', 'Подкладка из шелка', 'Ручная отделка'],
    inStock: true
  },
  {
    id: '3',
    name: 'Спортивные Кроссовки',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    colors: [
      { name: 'Белый', hex: '#FFFFFF' },
      { name: 'Черный', hex: '#000000' },
      { name: 'Серый', hex: '#6B7280' }
    ],
    sizes: [
      { name: '36', value: '36', available: true },
      { name: '37', value: '37', available: true },
      { name: '38', value: '38', available: true },
      { name: '39', value: '39', available: true },
      { name: '40', value: '40', available: false },
      { name: '41', value: '41', available: true },
      { name: '42', value: '42', available: true },
      { name: '43', value: '43', available: true },
      { name: '44', value: '44', available: true }
    ],
    description: 'Современные спортивные кроссовки с инновационной амортизацией.',
    features: ['Дышащий материал', 'Амортизация', 'Противоскользящая подошва', 'Легкий вес'],
    inStock: true
  },
  {
    id: '4',
    name: 'Джинсы Slim Fit',
    price: 6999,
    image: 'https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'men',
    colors: [
      { name: 'Темно-синий', hex: '#1E3A8A' },
      { name: 'Черный', hex: '#000000' },
      { name: 'Светло-синий', hex: '#3B82F6' }
    ],
    sizes: [
      { name: '28', value: '28', available: true },
      { name: '30', value: '30', available: true },
      { name: '32', value: '32', available: true },
      { name: '34', value: '34', available: true },
      { name: '36', value: '36', available: false },
      { name: '38', value: '38', available: true }
    ],
    description: 'Стильные джинсы slim fit из премиального денима.',
    features: ['Premium denim', 'Slim fit крой', 'Устойчивость к износу', '5-карманный дизайн'],
    inStock: true
  },
  {
    id: '5',
    name: 'Блуза Silk Premium',
    price: 7499,
    originalPrice: 9999,
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'women',
    colors: [
      { name: 'Кремовый', hex: '#FEF3C7' },
      { name: 'Розовый пудровый', hex: '#FECACA' },
      { name: 'Мятный', hex: '#A7F3D0' }
    ],
    sizes: [
      { name: 'XS', value: 'xs', available: true },
      { name: 'S', value: 's', available: true },
      { name: 'M', value: 'm', available: true },
      { name: 'L', value: 'l', available: true }
    ],
    description: 'Роскошная шелковая блуза для создания элегантного образа.',
    features: ['100% натуральный шелк', 'Элегантный крой', 'Перламутровые пуговицы', 'Деликатная текстура'],
    inStock: true
  },
  {
    id: '6',
    name: 'Кожаная Куртка',
    price: 24999,
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'men',
    colors: [
      { name: 'Черный', hex: '#000000' },
      { name: 'Коричневый', hex: '#92400E' }
    ],
    sizes: [
      { name: 'S', value: 's', available: true },
      { name: 'M', value: 'm', available: true },
      { name: 'L', value: 'l', available: false },
      { name: 'XL', value: 'xl', available: true }
    ],
    description: 'Настоящая кожаная куртка в классическом стиле.',
    features: ['100% натуральная кожа', 'Классический крой', 'YKK молнии', 'Подкладка из хлопка'],
    inStock: true
  }
];