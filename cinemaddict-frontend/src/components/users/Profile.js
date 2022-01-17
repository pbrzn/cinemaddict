import React, { Component } from 'react';
import Review from '../reviews/Review';

class Profile extends Component {

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/profile/${JSON.parse(localStorage.user).id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

  }

  renderReviews = props => props.reviews.map(review => {
    const movie = props.movies.find(movie => movie.id === review.movie_id)
    return (
      <li key={review.id}>
        <Review
          id={review.id}
          title={review.title}
          body={review.body}
          rating={review.rating}
          movieTitle={movie.title}
          moviePoster={movie.poster}
          username={props.username}
        />
      </li>
    )
  })

  render() {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
      <div>
        <img src={user.avatar} alt={user.username} />
        <h1>{user.username}</h1>
        <b>Bio: </b> <p>{user.bio}</p>
        {user.reviews.length > 0 ?
          <>
            <ul>
              {this.renderReviews(user)}
            </ul>
          </> : <>Click 'Movies' above to peruse and begin reviewing movies!</>}
      </div>
    )
  }
}

export default Profile
