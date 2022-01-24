import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logout from './users/Logout';
import logo from '../images/Film-Reel-256.ico';

class NavBar extends Component {

  render() {
    if (Object.keys(this.props.user).length > 0 || !!localStorage.jwt) {
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
            <Nav.Link href="/profile" className="nav-link">
              Profile
            </Nav.Link>
          </Nav>
          <Logout />

        </Container>
      </Navbar>
      )
    } else {
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
        </Container>
      </Navbar>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
