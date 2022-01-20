import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './Review';
import EditReviewForm from './EditReviewForm';
import { Route } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import { fetchReviews } from '../actions/fetchReviews';

class ReviewsContainer extends Component {

  componentDidMount() {
    this.props.fetchReviews();
  }

  renderReviews = () => this.props.reviews.map(review => {
    return (
      <li key={review.id}>
        <Review
          title={review.attributes.title}
          body={review.attributes.body}
          rating={review.attributes.rating}
          movieTitle={review.attributes.movie.title}
          moviePoster={review.attributes.movie.poster}
          username={review.attributes.user.username}
        />
      </li>
    )
  })

  render() {
    return (
      <div>
        <h1 className="page-title">All Reviews</h1>
        <ul>
          <CardGroup>
            {this.renderReviews()}
          </CardGroup>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, { fetchReviews })(ReviewsContainer)
