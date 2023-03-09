import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidgetNumber.css";

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart size={"2rem"} color={"white"} />
      <span className="CartWidgetNumber">{0}</span>
    </div>
  );
};

export default CartWidget;
