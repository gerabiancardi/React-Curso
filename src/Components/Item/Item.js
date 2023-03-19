import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const Item= ({producto})=> {

  const navegar=useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img}/>
      <Card.Body>
        <Card.Title><h3>{producto.name}</h3></Card.Title>
        <Card.Text><p>{producto.category}</p>
        </Card.Text>
        <Button variant="primary" onClick={()=>navegar(`item/${producto.id}`)}>Ver Mas</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;