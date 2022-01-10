import React, { Component} from 'react';
import NewReviewForm from '../reviews/NewReviewForm';
import ReviewStub from '../reviews/ReviewStub';

class Movie extends Component {

  displayFeaturedReview = props => {
    if (props.reviews.length !== 0) {
      return (
        <>
          {''}
          <h3>Featured Review:</h3>
          <ReviewStub
            title={props.reviews[0].title}
            rating={props.reviews[0].rating}
            body={props.reviews[0].body.slice(0, 140)}
          />
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
    const movie = this.props.movie.attributes;
    return (
      <div>
        <img src={movie.poster} alt={movie.id} />
        <h1>{movie.title}</h1>
        <h2>Cinemaddict Rating: {this.displayRating(movie.cinemaddict_rating)}</h2>

        <p><b>Director:</b> {movie.director}</p>
        <p><b>Starring:</b> {movie.starring}</p>

        {this.displayFeaturedReview(movie)}

        <p><b>Write A Review</b></p>
        <NewReviewForm />
      </div>
    );
  }
}

export default Movie
