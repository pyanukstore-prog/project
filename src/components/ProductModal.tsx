import React, { useState } from 'react';
import { X, Plus, Minus, Heart, Share2 } from 'lucide-react';
import { Product, Color, Size, CartItem } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart 
}) => {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);

  React.useEffect(() => {
    if (product && isOpen) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes.find(size => size.available) || null);
      setQuantity(1);
    }
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) return;
    
    onAddToCart({
      product,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
    
    onClose();
  };

  const canAddToCart = selectedColor && selectedSize && selectedSize.available && product.inStock;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 p-6 lg:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Цвет: {selectedColor?.name}
                </h3>
                <div className="flex space-x-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor?.hex === color.hex
                          ? 'border-gray-900 scale-110'
                          : 'border-gray-300 hover:border-gray-500'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Размер: {selectedSize?.name}
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => size.available && setSelectedSize(size)}
                      disabled={!size.available}
                      className={`py-2 px-3 text-sm border rounded-md transition-all ${
                        selectedSize?.value === size.value
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : size.available
                          ? 'border-gray-300 hover:border-gray-500 text-gray-900'
                          : 'border-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Количество</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Особенности</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!canAddToCart}
                className={`w-full py-3 px-6 text-white font-medium rounded-lg transition-all ${
                  canAddToCart
                    ? 'bg-gray-900 hover:bg-gray-800 transform hover:scale-105'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                {!product.inStock 
                  ? 'Нет в наличии' 
                  : !selectedSize?.available 
                  ? 'Размер недоступен'
                  : 'Добавить в корзину'
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};