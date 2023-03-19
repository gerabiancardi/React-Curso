import React, {useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../mock/FakeApi";
import { useParams } from "react-router-dom";


function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);
  const {categoryId}=useParams()
  useEffect(() => {
    getProducts()
      .then((res) => {
        if(categoryId){
          setListaProductos(res.filter((item)=> item.category === categoryId))
        }else{
          setListaProductos(res)
        }
      })
      .catch((error) => console.log(error));
  }, [categoryId]);



  return (
    <Container fluid>
    <ItemList
    productos={listaProductos}
    />
    </Container>
  );
}

export default ItemListContainer;