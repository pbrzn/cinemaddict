const addMovie = movieObject => {
  dispatch({ type: 'START_ADD_MOVIE_POST_REQUEST' });
  fetch("http://localhost:3000/api/v1/movies", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(movieObject)
  })
  .then(resp => resp.json())
  .then(data => dispatch({
    type: 'ADD_MOVIE',
    data
  })

);

const deleteMovie = movieId => {
  dispatch({ type: 'START_DELETE_MOVIE_REQUEST' });
  fetch(`http://localhost:3000/api/v1/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(movieId)
  })
  .then(resp => resp.json())
  .then(data => dispatch({
    type: 'DELETE_MOVIE',
    movieId: movieId
  }))
}

const fetchMovies = () => {
  dispatch({ type: 'START_FETCHING_MOVIES' });
  fetch("http://localhost:3000/api/v1/movies")
  .then(resp => resp.json())
  .then(data => dispatch({
    type: 'FETCH_MOVIES',
    data
  }));
}
