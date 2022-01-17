export function addReview(reviewObject) => {
  fetch("http://localhost:3000/api/v1/reviews", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.jwt}`
    },
    body: JSON.stringify(reviewObject)
  })
  .then(resp => resp.json())
  .then(data => dispatch({
    type: 'ADD_REVIEW',
    data
  })
);

export function editReview(reviewObject) => {
  fetch("http://localhost:3000/api/v1/reviews", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.jwt}`
    },
    body: JSON.stringify(reviewObject)
  })
  .then(resp => resp.json())
  .then(data => dispatch({
    type: 'EDIT_REVIEW',
    data
  })
);

export function deleteReview(reviewId) {
  fetch(`http://localhost:3000/api/v1/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.jwt}`
    },
    body: JSON.stringify(reviewId)
  })
  .then(resp => resp.json())
  .then(data => dispatch({
    type: 'DELETE_REVIEW',
    reviewId: reviewId
  }))
}
//
// const fetchreviews = () => {
//   dispatch({ type: 'START_FETCHING_REVIEWS' });
//   fetch("http://localhost:3000/api/v1/reviews")
//   .then(resp => resp.json())
//   .then(json => dispatch({
//     type: 'FETCH_REVIEWS',
//     reviews: json.data
//   }));
// }
