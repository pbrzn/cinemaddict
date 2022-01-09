export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return state.concat(action.movie);

    case 'DELETE_MOVIE':
      return state.filter(movie => movie.id !== action.movieId);

    case 'FETCH_MOVIES':
      return action.movies;

    default:
      return state;
  }
}
