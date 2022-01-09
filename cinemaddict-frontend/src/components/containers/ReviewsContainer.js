import React, { Component } from 'react';
import Review from '../Review';

export default class ReviewsContainer extends Component {

  renderReviews = () => this.props.reviews.map(review => {
    return (
      <li>
        <Review
          title={review.title}
          body={review.body}
          rating={review.rating}
          movieTitle={review.movie.title}
        />
      </li>
    )
  })

  render() {
    return (
      <div>
        <h1>Reviews</h1>
        <ul>
        {this.renderReviews()}
        </ul>
      </div>
    )
  }
}
