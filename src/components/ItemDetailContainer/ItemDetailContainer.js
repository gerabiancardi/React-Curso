import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { db } from "../../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const { id } = useParams();
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
        setDetalleProducto(docs.find((doc) => doc.id === id));
      } catch (error) {
        console.log(error);
      }
      changeLoad();
    };
    getProducts();
  }, [id]);

  return (
    <Container>
      {load ? <Loader /> : <ItemDetail detalleProducto={detalleProducto} />}
    </Container>
  );
};

export default ItemDetailContainer;
