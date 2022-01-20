import React, { Component } from 'react';
import NewReviewForm from '../reviews/NewReviewForm';
import Review from '../reviews/Review';

class Movie extends Component {

  displayReviews = props => {
    if (props.reviews.length !== 0) {
      return (
        <>
          {''}
          <h3>Reviews:</h3>
          {props.reviews.map(review => {
            const user = props.users.find(user => user.id === review.user_id)
            return (
              <li key={review.id}>
                <Review
                  title={review.title}
                  rating={review.rating}
                  body={review.body}
                  username={user.username}
                  movieTitle={props.title}
                />
              </li>)
            }
          )}
          {''}
        </>
      )
    }
  }

  displayRating = props => {
    if (props === null) {
      return "No Rating";
    } else {
      return `${props}/10`;
    }
  }

  render(){
    const loggedIn = localStorage.jwt ? true : false
    const movie = this.props.movies.find(movie => movie.id === this.props.match.params.movieId).attributes
    return (
      <div>
        <img src={movie.poster} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h2>Cinemaddict Rating: {this.displayRating(movie.cinemaddict_rating)}</h2>

        <p><b>Director:</b> {movie.director}</p>
        <p><b>Starring:</b> {movie.starring}</p>
        <ul>
          {this.displayReviews(movie)}
        </ul>
        {loggedIn && !JSON.parse(localStorage.getItem('user')).reviews.find(review => review.movie_id === movie.id)? <><p><b>Write A Review</b></p><NewReviewForm movie={movie} user={this.props.currentUser}/></> : <></>}
      </div>
    );
  }
}

export default Movie
