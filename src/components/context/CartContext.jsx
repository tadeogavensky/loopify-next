// CartContext.js

import { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  // State to store the cart
  const [cart, setCart] = useState({
    items: [],
    qty: 0,
    total: 0,
  });

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedItems = [...prevCart.items, item];
      const updatedQty = prevCart.qty + item.quantity;
      const updatedTotal = prevCart.total + item.price * item.quantity;

      return {
        ...prevCart,
        items: updatedItems,
        qty: updatedQty,
        total: updatedTotal,
      };
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.id !== itemId);
      const updatedQty = updatedItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const updatedTotal = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        ...prevCart,
        items: updatedItems,
        qty: updatedQty,
        total: updatedTotal,
      };
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart({
      items: [],
      qty: 0,
      total: 0,
    });
  };

  // Create the cart context value
  const cartContextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
