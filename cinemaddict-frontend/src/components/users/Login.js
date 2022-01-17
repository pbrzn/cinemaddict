import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false
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
      this.props.login(data.user);
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user.data.attributes));
      this.setState({
        loggedIn: true
      })
      console.log(data)
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

        {this.state.loggedIn ? <Redirect to={`/profile/${this.props.currentUser.id}`}/> : <></>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.users.currentUser }
}

const mapDispatchToProps = dispatch => {
  return {
    startLoginRequest: () => dispatch({ type: 'START_LOGIN_USER_REQUEST' }),
    login: (loginInfo) => dispatch({ type: 'LOGIN_USER', user: loginInfo.data.attributes }),
    redirect: (userId) => dispatch({ type: 'REDIRECT_TO_PROFILE', userId: userId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
