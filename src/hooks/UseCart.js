import { useState, useEffect } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);

  // Add a fixed additional fee of 5.59 once to the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0) + 5.59;

  const addToCartHandler = (pro) => {
    const existCart = cartItems.find((item) => item.id === pro.id);

    if (existCart) {
      const newItem = cartItems.map((item) =>
        item.id === pro.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItems(newItem);
    } else {
      setCartItems((prev) => {
        return [...prev, { ...pro, qty: 1 }];
      });
    }
  };

  console.log(cartItems);

  return {
    cartItems,
    totalQuantity,
    totalPrice,
    addToCartHandler,
  };
};

export default useCart;
