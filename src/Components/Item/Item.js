import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
  const navegar = useNavigate();

  return (
    <Card
      border="success"
      style={{ width: "18rem", marginBlock: 10 }}
      className="items"
    >
      <Card.Img variant="top" src={producto.img} style={{ height: "15rem" }} />
      <Card.Body className="card_body">
        <Card.Title style={{ color: "white", marginBlockEnd: 30 }}>
          <h3>{producto.name}</h3>
        </Card.Title>
        <Button
          variant="success"
          onClick={() => navegar(`/item/${producto.id}`)}
        >
          Detalles
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
