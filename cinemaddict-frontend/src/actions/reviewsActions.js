export function deleteReview(reviewId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/reviews/${reviewId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.jwt}`
      },
    })
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'DELETE_REVIEW',
      reviewId: reviewId,
    }));
  }
}
