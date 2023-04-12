import React from 'react'
import useCartContext from "../../context/CartContext"

function ItemCart({Item}) {
    const {removeProduct} = useCartContext();
  return (
    <div>
    <img src={Item.image} alt={Item.title}/>
     <div>
      <p>Titulo: {Item.title} </p>
      <p>Cantidad: {Item.quantity} </p>
      <p>Precio u.: {Item.price} </p>
      <p>Subtotal: $ {(Item.quantity) * (Item.price)} </p>
      <button onClick={()=> removeProduct(Item.id)}>Eliminar</button>
     </div>
    </div>
  )
}

export default ItemCart