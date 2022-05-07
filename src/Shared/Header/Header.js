import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import './Header.css'

const Header = () => {
  const [user]=useAuthState(auth)
  const handleSignOut=()=>{
    signOut(auth)
  }
  return (
      <Navbar className="navbar-container" collapseOnSelect expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/home">Halal-Perfumes</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#home">Home</Nav.Link>
              <Nav.Link href="home#item">Items</Nav.Link>
              <Nav.Link as={Link} to={'blogs'}>Blogs</Nav.Link>
            </Nav>
            <Nav>
              {
                user &&
                <>
                <Nav.Link as={Link} to={'addItem'}>Add Item</Nav.Link>
                <Nav.Link as={Link} to={'manage'}>Manage Items</Nav.Link>
                </>
              }

              {
                user ?
                <Nav.Link as={Link} to={'/login'} onClick={handleSignOut}>
                SignOut
               </Nav.Link>
               :
               <Nav.Link as={Link} to={'/login'}>
                LogIn
               </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default Header;
