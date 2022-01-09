import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import moviesReducer from './moviesReducer';
import reviewsReducer from './reviewsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  movies: moviesReducer,
  reviews: reviewsReducer,
});

export default rootReducer;
