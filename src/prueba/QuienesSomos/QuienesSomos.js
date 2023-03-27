import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/imagenes/logo.jpg";
import { Image } from "react-bootstrap";
import "./QuienesSomos.css";

function QuienesSomos() {
  return (
    <Container>
      <Row style={{ marginBlock: 50 }}>
        <Col>
          <Image
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{ borderRadius: 130 }}
          />
        </Col>
        <Col className="Texto-SRL">
          <p>
            Somos una compañia familiar formada por 3 socios que se dedica a la
            venta de productos electricos de todo tipo, nos enfocamos en
            satisfacer la necesidad de nuetros clientes y en asesorarlos para
            que compren el producto que mas acorde sea a su requerimiento.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default QuienesSomos;
