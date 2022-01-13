import React, { Component } from 'react';

const ReviewsList = props => {
  return (
    <div>
      <h4>"{props.title}" – User Rating: {props.rating}/10</h4>
      Review: {props.body}...
    </div>
  );
}

export default ReviewsList
