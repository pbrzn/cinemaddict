import React, { Component } from 'react';
import NewReviewForm from '../reviews/NewReviewForm';
import Review from '../reviews/Review';
import { Card, CardGroup } from 'react-bootstrap';

class Movie extends Component {

  displayReviews = props => {
    if (props.reviews.length !== 0) {
      return (
        <>
          {''}
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
      <div className="movie-card">
        <Card style={{ width: '30rem' }} border="secondary">
          <Card.Img variant="top" src={movie.poster} alt={movie.title} />
          <Card.Title><h1>{movie.title}</h1></Card.Title>
          <Card.Text>
            <h2>Cinemaddict Rating: {this.displayRating(movie.cinemaddict_rating)}</h2>

            <p><b>Director:</b> {movie.director}</p>
            <p><b>Starring:</b> {movie.starring}</p>
          </Card.Text>
        </Card>

        <h3 id="reviews-title">Reviews:</h3>
        <ul>
          <CardGroup>
            {this.displayReviews(movie)}
            {loggedIn && !JSON.parse(localStorage.getItem('user')).reviews.find(review => review.movie_id === movie.id)? <NewReviewForm movie={movie} user={this.props.currentUser}/> : <></>}

          </CardGroup>
        </ul>
      </div>
    );
  }
}

export default Movie
