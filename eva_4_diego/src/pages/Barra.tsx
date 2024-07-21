import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Barra = () => {
  return (
    <>
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="/MenuPrincipal">Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/RegistrarPersonas">registrar persona</Nav.Link>
              <Nav.Link href="/registrarmoto">registro de motos</Nav.Link>
              <Nav.Link href="/verregistros">visualizar registros</Nav.Link>
              <Nav.Link href="/Login">logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Barra;