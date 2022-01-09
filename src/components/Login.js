import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
// import { loginUser } from './actions/usersActions';

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

  loginUser = loginInfo => {
    let navigate = useNavigate();
    this.props.startLoginRequest();
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
      this.props.login(data);
      localStorage.setItem("jwt", data.jwt)
      navigate('/profile');
      // window.pushState({ user: data }, 'profile', 'profile')
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.loginUser({ currentUser: this.state });
    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          Username: <input type="text" name="username" onChange={this.handleOnChange} /><br/>
          Password: <input type="password" name="password" onChange={this.handleOnChange} /><br/>
          <Button type="submit" variant="outline-dark">Login</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startLoginRequest: () => dispatch({ type: 'START_LOGIN_USER_REQUEST' }),
    login: (loginInfo) => dispatch({ type: 'LOGIN_USER', payload: loginInfo }),
    redirect: (userId) => dispatch({ type: 'REDIRECT_TO_PROFILE', userId: userId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
