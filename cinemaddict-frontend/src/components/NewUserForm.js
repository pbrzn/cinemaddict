import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
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
    this.createUser(this.state);
  }

  createUser = userObject => {
    let navigate = useNavigate();
    this.props.startUserRequest();
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
      this.props.addUser(data);
      localStorage.setItem("jwt", data.jwt);
      navigate(`/profile/${data.user.id}`)
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
    login: (loginObject) => dispatch( { type: 'LOGIN_USER', currentUser: loginObject })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
