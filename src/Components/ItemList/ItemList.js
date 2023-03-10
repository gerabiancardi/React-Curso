import React, { useState } from "react";
import Producto from "../Item/Item.js";

const Productos = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      Categoria: "Foco",
      Tipo: "A60",
    },
    {
      id: 2,
      Categoria: "Smart",
      Tipo: "Foco9W",
    },
    {
      id: 3,
      Categoria: "Artefacto",
      Tipo: "PlafonLed",
    },
  ]);

  return (
    <div>
      {productos.map((producto) => {
        return (
          <div>
            <Producto
            key={productos.id}
            Categoria={productos.Categoria}
            Tipo={productos.Tipo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Productos;
