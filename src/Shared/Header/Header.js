import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
      <Navbar className="navbar-container" collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/home">Halal-Perfumes</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#home">Home</Nav.Link>
              <Nav.Link href="home#item">Items</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link as={Link} to={'/login'}>
               Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default Header;
