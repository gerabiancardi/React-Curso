import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Producto= (props)=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title><h3>{props.Tipo}</h3></Card.Title>
        <Card.Text><p>{props.Categoria}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Producto;