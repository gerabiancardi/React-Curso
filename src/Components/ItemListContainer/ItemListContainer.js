import React, {useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../mock/FakeApi";
import ItemCount from "../ItemCount/ItemCount";


function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setListaProductos(res))
      .catch((error) => console.log(error));
  }, []);

const onAdd = (quantity) =>{
  console.log(`Tenes ${quantity} productos`);
}

  return (
    <Container fluid>
    <ItemList
    productos={listaProductos}
    />
    <ItemCount initial={0} stock= {5} onAdd={onAdd}/>
    </Container>
  );
}

export default ItemListContainer;
