import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { NavLink } from "react-router-dom";
import ItemCart from '../ItemCart/ItemCart';

function Cart() {
  const {cart, totalPrice} = useCartContext();

  if (cart.length ===0){
    return(
      <>
      <p>No hay elementos en el carrito</p>
      <NavLink to='/'>Hacer compra</NavLink>
      </>
    );
  }

  return (
    <>
    {cart.map(Item =><ItemCart key={Item.id} product={Item}/>)
    }
    <p> total:$ {totalPrice()} </p>
    <button>Generar orden de compra</button>
    </>
  )
}

export default Cart