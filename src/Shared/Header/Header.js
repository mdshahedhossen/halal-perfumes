import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar className="navbar-container" collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Halal-Perfumes</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Items</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
