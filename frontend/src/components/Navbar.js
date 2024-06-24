import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">FuruBattle</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/trades">Trades</Nav.Link>
          <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
          <Nav.Link as={Link} to="/stock-history">Stock History</Nav.Link>
          <Nav.Link as={Link} to="/trivia">Stock Trivia</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;