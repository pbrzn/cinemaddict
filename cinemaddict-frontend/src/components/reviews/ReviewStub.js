import React, { Component } from 'react';

const ReviewStub = props => {
  return (
    <div>
      <h4>"{props.title}" – User Rating: {props.rating}/10</h4>
      Review: {props.body}...
    </div>
  );
}

export default ReviewStub
