import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";

function Cart() {
  const { cart, totalPrice, removeProduct } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <NavLink to="/">Hacer compra</NavLink>
      </>
    );
  }

  return (
    <>
      {cart.map((item) => (
        <ItemCart key={item.id} product={item} removeProduct={removeProduct} />
      ))}
      <p> total:$ {totalPrice()} </p>
      <Link to="/checkout">
        <button>Generar orden de compra</button>
      </Link>
    </>
  );
}

export default Cart;
