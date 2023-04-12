import React, { useState, useContext } from "react";

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
    cart.find((item) => item.id === id) ? true : false;

    const removeProduct = (id) =>{
      setCart(cart.filter((Item) => Item.id !== id));
    }

    const addProduct = (item, quantity) => {
      if (isInCart(item.id)) {
        setCart(
          cart.map((prod) => {
            return prod.id === item.id
              ? { ...prod, quantity: prod.quantity + quantity }
              : prod;
          })
        );
      } else {
        setCart([...cart, { ...item, quantity }]);
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
