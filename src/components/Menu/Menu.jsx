import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



function Menu() {
    const deslogar = () => {
        localStorage.removeItem('logado');
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        window.location.href = `/login`;
      }
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container fluid>
        
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Meus Links
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="http://localhost:3000/usuarios">Usuarios</Nav.Link>
                  <Nav.Link href='http://localhost:3000/configuracoes'>Configurações</Nav.Link>
                  <Nav.Link onClick={deslogar}>Sair</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Menu;