import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/usersActions';
import Button from 'react-bootstrap/Button';

class Logout extends Component {
  handleOnClick = event => {
    this.props.logout()
  }

  render() {
    return (
      <div>
        <Button variant="secondary" onClick={event => this.handleOnClick()}>Logout</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { logout: () => dispatch(logoutUser)}
}

export default connect(null, mapDispatchToProps)(Logout);
