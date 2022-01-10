import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './Review';
import { fetchReviews } from '../actions/fetchReviews';

class ReviewsContainer extends Component {

  componentDidMount() {
    this.props.fetchReviews();
  }

  renderReviews = () => this.props.reviews.map(review => {
    return (
      <>
        <Review
          title={review.attributes.title}
          body={review.attributes.body}
          rating={review.attributes.rating}
          movieTitle={review.attributes.movie.title}
          username={review.attributes.user.username}
        />
      </>
    )
  })

  render() {
    return (
      <div>
        {this.renderReviews()}
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
