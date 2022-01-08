import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from './actions/usersActions';

class Logout extends Component {
  handleOnClick = event => {
    this.props.logout(this.props.user.id)
  }

  render() {
    return (
      <>
        <button onClick={event => this.handleOnClick(event)} />
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { logout: (id) => dispatch(logoutUser(id))}
}

export default connect(null, mapDispatchToProps)(Logout);
