import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logout from './Logout';
import logo from '../images/Film-Reel-256.ico';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/" className="brand">
        <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""

        />{' '}
      CINEMADDICT
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/movies" className="nav-link">Movies</Nav.Link>
        <Nav.Link href="/reviews" className="nav-link">Reviews</Nav.Link>
      </Nav>
      {/*TODO: PROFILE <Button /> GOES HERE*/}
      <Logout />
    </Container>
  </Navbar>
  )
}

export default NavBar;
