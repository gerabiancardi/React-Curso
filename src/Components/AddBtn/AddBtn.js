import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContex } from "../../context/CartContex";

export const AddBtn = ()=>{
    const {addItem}=useContext(CartContex)
    return(
        <Button onClick={addItem}>Add to Cart</Button>
    )
}