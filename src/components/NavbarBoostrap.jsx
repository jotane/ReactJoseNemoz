import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/styles.css/Navbar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom';

function NavbarBoostrap() {
  return (
    <><Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img src="../estampilla.jpg" className="logo"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">EL ESTUDIO  |</Nav.Link>
            <Nav.Link href="#link">  CONTACTO  |</Nav.Link>
            <NavDropdown title=" PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/Disenos'>Diseños  | </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Cuidados'>  Cuidados  | </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Ropita'>  Ropita</NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
    </>
  );
}

export default NavbarBoostrap;