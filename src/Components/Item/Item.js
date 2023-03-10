import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item= ({producto})=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img}/>
      <Card.Body>
        <Card.Title><h3>{producto.name}</h3></Card.Title>
        <Card.Text><p>{producto.category}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;