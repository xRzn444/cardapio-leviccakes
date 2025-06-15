
import React from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,

}) => {
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-confeitaria-rosa/20">
            <div className="flex items-center space-x-2">
              <ShoppingCart size={20} className="text-confeitaria-chocolate" />
              <h2 className="text-xl font-dancing font-bold text-confeitaria-chocolate">
                Seu Pedido
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-confeitaria-bege rounded-lg transition-colors"
            >
              <X size={20} className="text-confeitaria-chocolate" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart size={48} className="mx-auto text-confeitaria-rosa mb-4" />
                <p className="text-confeitaria-marrom">Seu carrinho está vazio</p>
                <p className="text-sm text-gray-500 mt-2">
                  Adicione alguns produtos deliciosos!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 bg-confeitaria-creme p-3 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-confeitaria-chocolate">{item.name}</h3>
                      <p className="text-confeitaria-marrom">R$ {item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-1 bg-confeitaria-rosa rounded hover:bg-confeitaria-rosa/80"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 bg-confeitaria-rosa rounded hover:bg-confeitaria-rosa/80"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="ml-2 p-1 text-red-500 hover:bg-red-50 rounded"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-confeitaria-rosa/20 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-dancing font-bold text-confeitaria-chocolate">
                  Total:
                </span>
                <span className="text-xl font-bold text-confeitaria-chocolate">
                  R$ {total.toFixed(2)}
                </span>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full btn-primary"
              >
                Finalizar Pedido
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
