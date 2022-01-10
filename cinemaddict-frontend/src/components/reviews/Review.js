import React, { Component} from 'react';

const Review = props => {
  return (
    <div className="review">
      <h1>{props.title}</h1>
      <h2>Rating: {props.rating}</h2>
      <h3>{props.username}'s review of {props.movieTitle}</h3>
      {props.body}
    </div>
  );
}

export default Review
