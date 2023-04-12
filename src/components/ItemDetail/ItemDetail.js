import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ detalleProducto }) => {
  const { name, description, price, stock, img } = detalleProducto;

  const[goToCart,setGoToCart]= useState(false);
  const {addProduct} = useCartContext();
  
  const onAdd =(quantity)=>{
     setGoToCart(true);
     addProduct(detalleProducto,quantity);
   }
  return (
    <Container className="Item_Details">
      <Row>
        <Col style={{ marginBlock: 30 }}>
          <h2>Detalle de: {name}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={img} alt={name} className="img-fluid" />
        </Col>
        <Col>
          <div className="Text-Details">
            <p>{description}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Stock:{stock}</h3>
        </Col>
        <Col className="Text-Details">
          <h3>${price}</h3>
        </Col>
      </Row>
      {goToCart ? <Link className="btn btn-dark" to='/cart'>Terminar compra</Link>:<ItemCount initial={1} stock={stock} onAdd={onAdd} />}
      <Link className="btn btn-dark" to={"/"} style={{ marginBlock: 15 }}>
        Volver a Home
      </Link>
    </Container>
  );
};

export default ItemDetail;
<Row>
  <Col>1 of 2</Col>
  <Col>2 of 2</Col>
</Row>;
