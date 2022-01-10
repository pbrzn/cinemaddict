import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import ReviewsContainer from '../reviews/ReviewsContainer';
import { Link } from 'react-router-dom';

class Profile extends Component {

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/profile/${this.props.user.id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.jwt}`
      }
    })
  }

  render() {
    debugger;
    return (
      <div>
        <img src={this.props.avatar} alt={this.props.username} />
        <h1>{this.props.username}</h1>
        <h3>Bio: </h3> <p>{this.props.bio}</p>
        {/*<ReviewsContainer props={this.props.reviews} />*/}
        <Link to="/movies">Movies</Link>
      </div>
    )
  }

}

export default Profile;
