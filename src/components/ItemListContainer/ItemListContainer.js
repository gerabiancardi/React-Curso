import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [listaProductos, setListaProductos] = useState([]);
  const { categoryId } = useParams();
  const [load, setLoad] = useState(true);

  const changeLoad = () => {
    setLoad(false);
  };

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
      changeLoad();
    };

    getProducts();
  }, [categoryId]);

  return (
    <Container>
      {load ? <Loader /> : <ItemList productos={listaProductos} />}
    </Container>
  );
}

export default ItemListContainer;
