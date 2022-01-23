import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  handleOnClick = event => {
    fetch(`http://localhost:3000/api/v1/logout`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.jwt}`
      },
    })
    .then(resp => resp.json())
    .then(json => {
      localStorage.clear()

    })
    this.props.logout();
  }

  render() {
    return (
      <div>
        <Button variant="secondary" onClick={event => this.handleOnClick()} href="/">Logout</Button>
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
