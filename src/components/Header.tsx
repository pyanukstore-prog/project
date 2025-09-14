import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </div>
            <h1 className="ml-4 md:ml-0 text-2xl font-bold text-gray-900">FASHION</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Мужская
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Женская
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Аксессуары
            </a>
            <a href="#" className="text-red-600 hover:text-red-700 px-3 py-2 text-sm font-medium transition-colors">
              Распродажа
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button 
              onClick={onCartClick}
              className="relative text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};