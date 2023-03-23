import React from "react";
import Item from "../Item/Item.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemList = ({ productos }) => {
  return (
    <Row>
      {productos.map((producto) => {
        return (
          <Col key={producto.id}>
            <Item producto={producto} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ItemList;
