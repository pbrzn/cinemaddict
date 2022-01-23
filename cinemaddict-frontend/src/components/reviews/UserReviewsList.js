import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './Review';
import EditReviewForm from './EditReviewForm';
import { Route, Switch } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';

function UserReviewsList(props) {

  const renderReviews = props.reviews.map(review => {
    const movie = props.user.movies.find(movie => movie.id === review.movie_id)
    return (
      <li key={review.id}>
        <Review
          id={review.id}
          title={review.title}
          body={review.body}
          rating={review.rating}
          movieTitle={movie.title}
          moviePoster={movie.poster}
          username={props.user.username}
        />
      </li>
    )
  })

  return (
    <div>
      <h1 className="page-title">Reviews</h1>
      <ul>
        <CardGroup>
          {renderReviews}
        </CardGroup>
      </ul>


    </div>
  )
}

export default UserReviewsList
