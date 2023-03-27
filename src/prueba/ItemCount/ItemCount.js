import React, { useState, useEffect } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, SetCount] = useState(parseInt(initial));

  const decrease = () => {
    SetCount(count - 1);
  };

  const increase = () => {
    SetCount(count + 1);
  };

  useEffect(() => {
    SetCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter">
      <button
        disabled={count < 1}
        onClick={decrease}
        style={{ marginBlock: 10, borderRadius: 15 }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        disabled={count >= stock}
        onClick={increase}
        style={{ marginBlock: 10, borderRadius: 15 }}
      >
        +
      </button>
      <div>
        <button
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
          style={{ marginBlock: 10, borderRadius: 15 }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
