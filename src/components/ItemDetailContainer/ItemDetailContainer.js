import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import {db} from "../../firebase/Firebase"
import { collection, getDocs} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const getProducts = async ()=>{
      try{
          const querySnapshot= await getDocs (collection (db, "Items"))
          const docs= []
          querySnapshot.forEach((doc)=>{
              docs.push({...doc.data(), id:doc.id})
          })
            setDetalleProducto(docs.filter((doc) => doc.id === id))
      }catch(error){
          console.log(error)
      }
  }
  
  getProducts()
  
  },[detalleProducto])

  return (
    <Container>
        <ItemDetail detalleProducto={detalleProducto} />
    </Container>
  );
};

export default ItemDetailContainer;
