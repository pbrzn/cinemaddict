import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return { logout: () => dispatch({ type: 'LOGOUT_USER' })}
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
