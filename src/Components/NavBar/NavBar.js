import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBarStyles.css"
import logo from "../assets/imagenes/logo.jpeg"
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Image src={logo} alt="logo" className="imgnavbar img-fluid"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><p>Contacto</p></Nav.Link>
            <Nav.Link href="#link"><p>Ofertas</p></Nav.Link>
            <NavDropdown className="navbardesplegable" title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Lamparas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Smart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Artefactos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;