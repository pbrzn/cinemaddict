export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return state.movies.concat(action.movie);

    case 'DELETE_REVIEW':
      return state.movies.filter(movie => movie.id !== action.movieId);

    default:
      return state;
  }
}
