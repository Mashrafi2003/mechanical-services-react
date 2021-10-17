import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" >
    <Container>
    <Navbar.Brand as={Link} to="/home">Genius Car Mechanics</Navbar.Brand>
    <Nav className="me-auto">
      
      
    </Nav>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
      <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
      <Navbar.Text>
        Signed in as: <Link to="/login">Mark Otto</Link>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <br />
 
        </>
    );
};

export default Header;