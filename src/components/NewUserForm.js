import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class NewUserForm extends Component {
  state = {
    username: "",
    password: "",
    bio: "",
    avatar: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.createUser({ user: this.state });
    this.setState({
      username: "",
      password: "",
      bio: ""
    })
  }

  createUser = userObject => {
    this.props.startUserRequest();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userObject)
    })
    .then(resp => resp.json())
    .then(data => {
      this.props.addUser(data);
      localStorage.setItem("jwt", data.jwt);
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          Username: <input type="text" name="username" onChange={this.handleOnChange} /><br/>
          Password: <input type="password" name="password" onChange={this.handleOnChange} /><br/>
          Bio: <input type="textarea" name="bio" onChange={this.handleOnChange} /><br/>
          <Button type="submit" variant="outline-dark">Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: {
      username: state.username,
      password: state.password,
      bio: state.bio,
      avatar: state.avatar
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startUserRequest: () => dispatch({ type: 'START_ADD_USER_REQUEST' }),
    addUser: (userObject) => dispatch({ type: 'ADD_USER', userObject }),
    login: (loginObject) => dispatch( { type: 'LOGIN_USER', loginObject })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
