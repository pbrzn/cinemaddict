import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions/usersActions';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.reventDefault();
    this.props.login(this.state);
    this.setState({
      username: "",
      password: "",
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <input type="text" name="username" onChange={this.handleOnChange}>Username: </input>
          <input type="password" name="password" onChange={this.handleOnChange}>Password: </input>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { login: (loginInfo) => dispatch(loginUser(loginInfo))}
}

export default connect(null, mapDispatchToProps)(Logout);
