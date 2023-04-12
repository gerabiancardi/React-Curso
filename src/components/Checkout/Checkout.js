import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState}from 'react'
import { useCartContext } from "../../context/CartContext";
import { db } from "../../firebase/Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
function Checkout() {
  const [user, setUser]= useState({})
  const [repeatEmail, setRepeatEmail]=useState('')
  const [orderId, setOrderId]=useState('')
  
  const {cart, totalPrice, clearCart} = useCartContext();
  const userData = (e) =>{
    setUser({
      ...user,
     [e.target.name]:e.target.value
  })
}

  const createOrder = (e) =>{
    e.preventDefault()
    if(repeatEmail === user.email){
      const ventas = collection(db,"orders")
      addDoc(ventas, {
        user,
        items: cart,
        total: totalPrice(),
        date: serverTimestamp()
    })
    .then((res)=>{
      setOrderId(res.id)
      clearCart()
    })
    .catch((error)=> console.log(error))
    }else{
      alert('Los emails no coinciden')
    }
  }

  
  return (
    <>
    {orderId 
    ?<h3>Muchas gracias por su compra! Su orden es:{orderId}</h3>
    : <Form onSubmit={createOrder}>
    <Form.Group className="mb-3">
      <Form.Label>Nombre</Form.Label>
      <Form.Control placeholder="Nombre" name='nombre' type='text' onChange={userData} required/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Apellido</Form.Label>
      <Form.Control placeholder="Apellido" name='apellido' type='text' onChange={userData} required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name='email'onChange={userData} required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Repita su email</Form.Label>
      <Form.Control type="email" placeholder="Repita su email" name='repeat' onChange={(e)=>setRepeatEmail(e.target.value)} required/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>}
    </>
  );
}

export default Checkout