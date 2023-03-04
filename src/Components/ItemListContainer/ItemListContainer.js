import React from 'react';
import Container from 'react-bootstrap/Container';
import "./ItemListContainer.css"


function ItemListContainer({greeting}) {
        return (
            <Container fluid>
            <h1 className='TextoList'>{greeting}</h1>
            </Container>
        );
    }
export default ItemListContainer;
