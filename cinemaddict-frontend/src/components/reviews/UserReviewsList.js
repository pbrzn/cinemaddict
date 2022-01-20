import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './Review';
import EditReviewForm from './EditReviewForm';
import { Route } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
// import { fetchReviews } from '../actions/fetchReviews';

class UserReviewsList extends Component {

  renderReviews = () => this.props.reviews.map(review => {
    const movie = this.props.user.movies.find(movie => movie.id === review.movie_id)
    return (
      <li key={review.id}>
        <Review
          id={review.id}
          title={review.title}
          body={review.body}
          rating={review.rating}
          movieTitle={movie.title}
          moviePoster={movie.poster}
          username={this.props.user.username}
        />
      </li>
    )
  })

  render() {
    return (
      <div>
        <h1 className="page-title">Reviews</h1>
        <ul>
          <CardGroup>
            {this.renderReviews()}
          </CardGroup>
        </ul>
        <Route path='reviews/:id/edit' render={() => <EditReviewForm review={this.props.review} />}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(UserReviewsList)
