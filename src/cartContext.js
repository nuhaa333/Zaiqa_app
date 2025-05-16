import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) =>{
      const existing = prevCart.find(i => i.id === item.id);
      if(existing){
        return prevCart.map( i => i.id === item.id ? {...i, quantity: i.quantity + 1 } : i);
      }else{
        return [...prevCart, {...item, quantity: 1}];
      }
    })
  }

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
