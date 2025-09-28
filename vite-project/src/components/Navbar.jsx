import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComp() {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold text-primary">IELTS Institute</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;




