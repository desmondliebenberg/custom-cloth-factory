
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Minus, Plus, X } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Sample cart items for demo
const cartItems = [
  {
    id: 1,
    name: "Minimalist Cotton T-Shirt",
    price: 49.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    options: {
      Color: "White",
      Size: "M",
      Fit: "Regular",
    },
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 129.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    options: {
      Color: "Blue",
      Size: "L",
      Distressing: "None",
    },
  },
];

const Cart: React.FC = () => {
  const [items, setItems] = React.useState(cartItems);

  const updateQuantity = (id: number, delta: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal >= 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto">
          <h1 className="text-3xl font-medium text-center text-primary">Your Cart</h1>
          
          {items.length === 0 ? (
            <div className="mt-16 flex flex-col items-center">
              <p className="text-muted-foreground">Your cart is empty.</p>
              <Link
                to="/shop"
                className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 font-medium text-white transition-colors hover:bg-primary/90"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-8">
                {items.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="flex gap-6 pb-6 border-b animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-base font-medium text-primary">
                            <Link to={`/product/${item.id}`} className="hover:underline">
                              {item.name}
                            </Link>
                          </h3>
                          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                            {Object.entries(item.options).map(([key, value]) => (
                              <p key={key}>
                                <span className="font-medium">{key}:</span> {value}
                              </p>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <button
                            className="flex h-7 w-7 items-center justify-center rounded-md border transition-colors hover:bg-secondary"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            className="flex h-7 w-7 items-center justify-center rounded-md border transition-colors hover:bg-secondary"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button
                          className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                          onClick={() => removeItem(item.id)}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-between items-center">
                  <Link
                    to="/shop"
                    className="text-sm text-primary hover:underline"
                  >
                    ← Continue Shopping
                  </Link>
                  
                  <button
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setItems([])}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-lg font-medium text-primary">Order Summary</h2>
                
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Subtotal</p>
                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Shipping</p>
                    <p className="font-medium">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </p>
                  </div>
                  
                  {subtotal < 100 && (
                    <div className="text-xs text-muted-foreground">
                      Add ${(100 - subtotal).toFixed(2)} more to qualify for free shipping.
                    </div>
                  )}
                  
                  <div className="border-t pt-4 flex justify-between font-medium">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
                
                <button
                  className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-primary text-white transition-colors hover:bg-primary/90"
                  onClick={() => toast({
                    title: "Checkout is not implemented yet",
                    description: "This is just a demo. In a real store, this would proceed to the checkout page."
                  })}
                >
                  Proceed to Checkout
                </button>
                
                <div className="mt-4 text-xs text-center text-muted-foreground">
                  Taxes calculated at checkout
                </div>
                
                <div className="mt-6 space-y-2 border-t pt-4">
                  <h3 className="text-sm font-medium">Accepted Payment Methods</h3>
                  <div className="flex justify-center space-x-2">
                    {/* Payment icons would go here */}
                    <div className="h-6 w-12 rounded bg-muted animate-pulse"></div>
                    <div className="h-6 w-12 rounded bg-muted animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="h-6 w-12 rounded bg-muted animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-6 w-12 rounded bg-muted animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
