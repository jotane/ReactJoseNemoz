import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/styles.css/Navbar.css'
import CartWidget from './CartWidget'

function NavbarBoostrap() {
  return (
    <><Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="../estampilla.jpg" className="logo"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">EL ESTUDIO  |</Nav.Link>
            <Nav.Link href="#link">  CONTACTO  </Nav.Link>
            <NavDropdown title="PRODUCTOS" href="#prod" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Diseños  | </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                    Cuidados  |
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">  Ropita</NavDropdown.Item>
              <NavDropdown.Divider />
              
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