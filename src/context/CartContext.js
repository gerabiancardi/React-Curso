import React, { useState, useContext } from "react";
import Item from "../components/Item/Item";

const CartContext = React.createContext('');
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((Item) => Item.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((Item) => Item.id !== id));

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((Item) => {
          return Item.id === Item.id
            ? { ...Item, quantity: Item.quantity }
            : Item;
        })
      );
    } else {
      setCart([...cart, { ...Item, quantity }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
