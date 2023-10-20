import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';



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
                  <Link to="/usuarios" style={{ textDecoration: "none", fontWeight: 'bold' }}>Usuarios</Link>
                  <Link to="/configuracoes" style={{ textDecoration: "none", fontWeight: 'bold' }}>Configurações</Link>
                  <Link onClick={deslogar}>Sair</Link>
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