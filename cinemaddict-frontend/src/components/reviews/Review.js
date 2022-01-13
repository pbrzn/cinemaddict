import React from 'react';

const Review = props => {
  return (
    <div className="review" >
      <h1><b>{props.username}</b>{props.movieTitle ? <>'s review of <i>{props.movieTitle}</i></> : ''}</h1>
      {props.moviePoster ? <img src={props.moviePoster} alt={props.title} /> : <></>}
      <h2>{props.title}</h2>
      <h3>Rating: {props.rating}/10</h3>
      {props.body}
    </div>
  );
}

export default Review
