import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class NewUserForm extends Component {
  state = {
    id: "",
    username: "",
    password: "",
    bio: "",
    avatar: "https://www.fillmurray.com/g/500/700",
    loggedIn: false,
    error: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.createUser({
      username: this.state.username,
      password: this.state.password,
      bio: this.state.bio,
      avatar: this.state.avatar
    });
  }

  createUser = userObject => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ user: userObject })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.props.login(data.user);
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user.data.attributes));
        this.setState({
          id: data.user.data.id,
          loggedIn: true
        });
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          Username: <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} /><br/>
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} /><br/>
          Bio: <input type="textarea" name="bio" value={this.state.bio} onChange={this.handleOnChange} /><br/>
          <Button type="submit" variant="outline-dark">Submit</Button>
        </form>
        <br />
        <br />
        {this.state.loggedIn ? <><Redirect to="/profile" /></> : <></>}
        {this.state.error && !this.state.loggedIn ? <Alert variant="danger">{this.state.error}</Alert> : <></>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: {
      id: state.id,
      username: state.username,
      password: state.password,
      bio: state.bio,
      avatar: state.avatar
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (loginObject) => dispatch({ type: 'LOGIN_USER', currentUser: loginObject })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
