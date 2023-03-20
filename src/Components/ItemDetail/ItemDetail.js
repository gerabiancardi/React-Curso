import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ detalleProducto }) => {
  const { name, description, price, stock, img, id } = detalleProducto;
  const onAdd = (quantity) => {
    console.log(`Tenes ${quantity} productos`);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem",
      }}
    >
      <h2>Detalle de: {name}</h2>
      <img src={img} alt={name} style={{ width: "25rem" }} />
      <p>{description}</p>
      <p>{stock}</p>
      <p>${price}</p>
      <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      <Link className="btn btn-dark" to={"/"}>
        Volver a Home
      </Link>
    </div>
  );
};

export default ItemDetail;
