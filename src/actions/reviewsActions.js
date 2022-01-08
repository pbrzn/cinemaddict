const addReview = reviewObject => {
  dispatch({ type: 'START_ADD_REVIEW_POST_REQUEST' });
  fetch("http://localhost:3000/api/v1/reviews", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(reviewObject)
  })
  .then(resp => resp.json())
  .then(data => dispatch({
    type: 'ADD_REVIEW',
    data
  })

);

const deleteReview = reviewId => {
  dispatch({ type: 'START_DELETE_REVIEW_REQUEST' });
  fetch(`http://localhost:3000/api/v1/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(reviewId)
  })
  .then(resp => resp.json())
  .then(data => dispatch({
    type: 'DELETE_REVIEW',
    reviewId: reviewId
  }))
}

const fetchreviews = () => {
  dispatch({ type: 'START_FETCHING_REVIEWS' });
  fetch("http://localhost:3000/api/v1/reviews")
  .then(resp => resp.json())
  .then(data => dispatch({
    type: 'FETCH_REVIEWS',
    data
  }));
}
