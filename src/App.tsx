
import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Index from "./pages/Index";
import Cardapio from "./pages/Cardapio";
import Sobre from "./pages/Sobre";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";



const queryClient = new QueryClient();

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    setIsCartOpen(false);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar 
              cartItemsCount={cartItemsCount}
              onCartClick={() => setIsCartOpen(true)}
            />
            
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index onAddToCart={addToCart} />} />
                <Route path="/cardapio" element={<Cardapio onAddToCart={addToCart} />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/checkout" element={<Checkout cartItems={cartItems} onClearCart={clearCart} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />

            <Cart
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              items={cartItems}
              onUpdateQuantity={updateCartQuantity}
              onRemoveItem={removeFromCart}
              onCheckout={() => {
                setIsCartOpen(false);
                window.location.href = '/checkout';
              }}
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
