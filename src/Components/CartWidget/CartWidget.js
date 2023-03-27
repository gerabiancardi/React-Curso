import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidgetNumber.css";
import { useContext } from "react"; 
import { CartContex } from "../../context/CartContex";



const CartWidget = () => {
 const {items}= useContext(CartContex)
  return (
    <div>
      <FaShoppingCart size={"2rem"} color={"white"} />
      <span className="CartWidgetNumber">{items}</span>
    </div>
  );
};

export default CartWidget;
