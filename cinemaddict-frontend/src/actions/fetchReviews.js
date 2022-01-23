export function fetchReviews(userId = "") {
  if (userId === "") {
    return (dispatch) => {
      fetch("http://localhost:3000/api/v1/reviews/")
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'FETCH_REVIEWS', reviews: data }));
    }
  } else {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/profile/${userId}`)
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'FETCH_REVIEWS', reviews: data.attributes.reviews }));
    }
  }
}
