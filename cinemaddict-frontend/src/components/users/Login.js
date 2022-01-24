import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap'

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false,
    error: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  loginUser = loginInfo => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(loginInfo)
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.message) {
        this.setState({
          error: data.message
        })
      } else {
        console.log(data)
        this.props.login(data.user);
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user.data.attributes));
        this.setState({
          loggedIn: true
        })
      }
    })
    .catch(err => console.log(err));
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.loginUser({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    });
    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          Username: <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} /><br/>
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} /><br/>
          <Button type="submit" variant="outline-dark">Login</Button>
        </form>

        {this.state.loggedIn ? <><Redirect to="/profile"/></> : <></>}
        {this.state.error && !this.state.loggedIn ? <Alert variant="danger">{this.state.error}</Alert> : <></>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.users.currentUser }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (loginInfo) => dispatch({ type: 'LOGIN_USER', user: loginInfo.data.attributes }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
