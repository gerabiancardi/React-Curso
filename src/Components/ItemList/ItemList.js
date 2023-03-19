import React from "react";
import { Container } from "react-bootstrap";
import Item from "../Item/Item.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => {
        return (
          <Container key={producto.id}>
            <Row>
              <Col>
                <Item  producto={producto} />
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default ItemList;