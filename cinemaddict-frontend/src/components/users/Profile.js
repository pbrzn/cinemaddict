import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardGroup, Alert } from 'react-bootstrap';
import UserReviewsList from '../reviews/UserReviewsList';

class Profile extends Component {

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/profile/${JSON.parse(localStorage.getItem('user')).id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(resp => resp.json())
    .then(json => {
      this.props.fetchUser(JSON.parse(localStorage.getItem('user')));
      this.props.fetchUserReviews(json.user);
    })
    .catch(err => console.log(err));
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <div className="profile-card">
        <Card style={{ width: '40rem' }} border="secondary">
          <Card.Img variant="top" src={user.avatar} alt={user.username} />
          <Card.Body>
            <Card.Title><h1><b>{user.username}</b></h1></Card.Title>
            <Card.Text><b>Bio: </b>{user.bio}</Card.Text>
          </Card.Body>
        </Card>
        {user.reviews.length > 0 ?
          <>
            <ul>
              <CardGroup>
                <UserReviewsList reviews={this.props.reviews} user={JSON.parse(localStorage.getItem('user'))}/>
              </CardGroup>
            </ul>
          </> : <></>}
          <Alert variant="info">Click <b>'Movies'</b> at the top of the page to peruse and review movies!</Alert>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.currentUser,
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: user => dispatch({ type: 'FETCH_USER', user: user }),
    fetchUserReviews: user => dispatch({ type: 'FETCH_USER_REVIEWS', user: user })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
