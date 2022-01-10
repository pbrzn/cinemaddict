export function fetchMovies() {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/movies")
    .then(resp => resp.json())
    .then(data => dispatch({ type: 'FETCH_MOVIES', movies: data }));
  }
}
