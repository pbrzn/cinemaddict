import React, { Component} from 'react';
import { connect } from 'react-redux';
import ReviewsContainer from './containers/ReviewsContainer';
import NewReviewForm from './NewReviewForm';

class Movie extends Component {

  displayReviews = props => {
    this.props.reviews.filter(review => review.rating >= 7)
  }

  render(){
    return (
      <div>
        <img src={this.props.poster} alt={this.props.id} />
        <h1>{this.props.title}</h1>
        <h2>Cinemaddict Rating: {this.props.cinemaddict_rating}</h2>

        <p><b>Director:</b> {this.props.director}</p>
        <p><b>Starring:</b> {this.props.starring}</p>

        <p><b>Top Reviews:</b></p>
        <ReviewsContainer reviews={this.displayReviews}/>

        <p><b>Write A Review</b></p>
        <NewReviewForm />
      </div>
    );
  }
}

export default Movie
