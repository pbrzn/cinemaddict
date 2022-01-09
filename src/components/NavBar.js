import React from 'react';
import { Navbar, NavItem, NavLink, Container } from 'react-bootstrap';
import Logout from './Logout';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="../public/logo512.png"
          width="30"
          height="30"
          className="logo"
        />
      Cinemaddict
      </Navbar.Brand>

      <NavItem >
      </NavItem>
      <Logout />
    </Container>
  </Navbar>
  )
}

export default NavBar;
