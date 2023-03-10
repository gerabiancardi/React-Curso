import React, {useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../mock/FakeApi";


function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setListaProductos(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container fluid>
    <ItemList
    productos={listaProductos}
    />
    </Container>
  );
}

export default ItemListContainer;
