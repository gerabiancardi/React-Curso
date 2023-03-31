import React from 'react'
import { useState, useEffect } from 'react'
import {db} from "../src/firebase/Firebase"
import { collection, getDocs} from 'firebase/firestore'
import { Container,Card } from 'react-bootstrap'

function Products() {
 
const [products,setProducts]=useState([]);

useEffect(()=>{
const getProducts = async ()=>{
    try{
        const querySnapshot= await getDocs (collection (db, "Items"))
        const docs= []
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(), id:doc.id})
        })
        setProducts(docs)
    }catch(error){
        console.log(error)
    }
}

getProducts()

},[products])

    return (
    <Container>
      <Card>
        {products.map(p=>
            <div key={p.id}>
                <p>Title: {p.name} </p>
                <p>Category: {p.category} </p>
                <p>Price: {p.price} </p>
                <p>Stock: {p.stock} </p>
                <img src={p.img} width="400px" height="400px"></img>
                <br></br>
            </div>
            )}
      </Card>
    </Container>
  )
}

export default Products
