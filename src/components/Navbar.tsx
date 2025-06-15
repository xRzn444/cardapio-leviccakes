
import React, { useState } from 'react';
import { ShoppingCart, User, Home, List, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/', icon: Home },
    { name: 'Cardápio', path: '/cardapio', icon: List },
    { name: 'Sobre Nós', path: '/sobre', icon: User },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="navbar-sticky">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="\arquivos\Logos\logo1.png" 
              alt="Levic Cakes Logo" 
              className="h-14 w-26 rounded-full"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-dancing font-bold text-confeitaria-chocolate">
                Levic Cakes
              </h1>
              <p className="text-xs text-confeitaria-marrom">Doceria & Cafeteria</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'bg-confeitaria-rosa text-confeitaria-chocolate'
                    : 'text-confeitaria-marrom hover:bg-confeitaria-bege hover:text-confeitaria-chocolate'
                }`}
              >
                <item.icon size={18} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 bg-confeitaria-rosa rounded-lg hover:bg-confeitaria-rosa/90 transition-colors"
            >
              <ShoppingCart size={20} className="text-confeitaria-chocolate" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-confeitaria-chocolate text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 bg-confeitaria-bege rounded-lg"
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-confeitaria-chocolate"></div>
                <div className="w-full h-0.5 bg-confeitaria-chocolate"></div>
                <div className="w-full h-0.5 bg-confeitaria-chocolate"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-confeitaria-rosa/20 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-3 rounded-lg transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'bg-confeitaria-rosa text-confeitaria-chocolate'
                      : 'text-confeitaria-marrom hover:bg-confeitaria-bege'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
