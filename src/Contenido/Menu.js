import Container from 'react-bootstrap/Container';
import { useContext } from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginContext from "./Context/LoginContext"

export default function Menu() {

  const { user, handleAuth } = useContext(LoginContext)

  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Navbar variant="dark" expand="sm">
        <Container fluid>

        <Navbar.Brand ><a href="./" className="logo d-flex align-items-center">
              <img src="img/logo.jpg" alt="" />
              <span>Aluminio Italia</span>
            </a></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '200px' }}
                navbarScroll>
                {!user ? <>
                  <Nav.Link href="./#">Home</Nav.Link>
                  <Nav.Link href="./#values">Services</Nav.Link>
                  <Nav.Link href="./#portfolio">Portfolio</Nav.Link>
                  <Nav.Link href="./#contact">Contacto</Nav.Link>
                  <Nav.Link href="/#/login">Login</Nav.Link>
                </>
                  : <>
                    <Nav.Link href="/#/admin/trabajos">ABM trabajos</Nav.Link>
                    <Nav.Link href="/#/admin/categorias">ABM Categorias</Nav.Link>
                    <Nav.Link onClick={handleAuth}>Logout</Nav.Link>
                  </>

                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}