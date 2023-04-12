import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidgetNumber.css";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div>
      <FaShoppingCart size={"2rem"} color={"white"} />
      <span className="CartWidgetNumber">{totalProducts() || ""}</span>
    </div>
  );
};

export default CartWidget;
