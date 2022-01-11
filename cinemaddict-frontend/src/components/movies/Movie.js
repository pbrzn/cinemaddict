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
          {props.reviews.map(review => <Review
            title={review.attributes.title}
            rating={review.attributes.rating}
            body={review.attributes.body}
            username={review.attributes.user.username}
          />)}
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
    debugger;
    const movie = this.props.movies.attributes;
    return (
      <div>
        <img src={movie.poster} alt={movie.id} />
        <h1>{movie.title}</h1>
        <h2>Cinemaddict Rating: {this.displayRating(movie.cinemaddict_rating)}</h2>

        <p><b>Director:</b> {movie.director}</p>
        <p><b>Starring:</b> {movie.starring}</p>

        {this.displayReviews(movie)}

        <p><b>Write A Review</b></p>
        <NewReviewForm />
      </div>
    );
  }
}

export default Movie
