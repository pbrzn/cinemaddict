export function fetchUser(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/profile/${id}`)
    .then(resp => resp.json())
    .then(data => dispatch({ type: 'FETCH_REVIEWS', user: data }));
  }
}
