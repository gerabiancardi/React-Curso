import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBarStyles.css";
import logo from "../assets/imagenes/logo.jpeg";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Image src={logo} alt="logo" className="imgnavbar img-fluid" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" >
              <p>Home</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="" >
              <p>Smarts</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="">
              <p>Focos</p>
            </Nav.Link>
            <Nav.Link as={NavLink} to="">
              <p>Artefactos</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
