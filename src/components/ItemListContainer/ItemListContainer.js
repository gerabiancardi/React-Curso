import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Items"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        if (categoryId) {
          setListaProductos(docs.filter((doc) => doc.category === categoryId));
        } else {
          setListaProductos(docs);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [categoryId]);

  return (
    <Container>
      <ItemList productos={listaProductos} />
    </Container>
  );
}

export default ItemListContainer;
