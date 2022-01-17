import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logout from './users/Logout';
import logo from '../images/Film-Reel-256.ico';

const NavBar = () => {
  let loggedIn = !!localStorage.getItem('jwt');
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
        {loggedIn ? <Nav.Link href={`/profile/${JSON.parse(localStorage.getItem('user')).id}`} className="nav-link">Profile</Nav.Link> : <></>}
      </Nav>
      {loggedIn ? <Logout /> : <></> }
    </Container>
  </Navbar>
  )
}

export default NavBar;
