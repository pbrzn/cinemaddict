import React, { Component } from 'react';
import NewReviewForm from '../reviews/NewReviewForm';
import ReviewStub from '../reviews/ReviewStub';
import Movie from './Movie';
import { Route, Link } from 'react-router-dom';

class MovieStub extends Component {

  displayFeaturedReview = props => {
    if (props.reviews.length !== 0) {
      const lastIdx = props.reviews.length - 1;
      return (
        <>
          {''}
          <h3>Featured Review:</h3>
          <ReviewStub
            title={props.reviews[lastIdx].title}
            rating={props.reviews[lastIdx].rating}
            body={props.reviews[lastIdx].body.slice(0, 140)}
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
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <h1>{movie.title}</h1>
        </Link>

        <h2>Cinemaddict Rating: {this.displayRating(movie.cinemaddict_rating)}</h2>

        <p><b>Director:</b> {movie.director}</p>
        <p><b>Starring:</b> {movie.starring}</p>

        {this.displayFeaturedReview(movie)}

        <p><b>Write A Review</b></p>
        <NewReviewForm movie={movie}/>
      </div>
    );
  }
}

export default MovieStub
