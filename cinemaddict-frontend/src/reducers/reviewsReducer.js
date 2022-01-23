export default function reviewsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return state.concat(action.review);

    case 'UPDATE_REVIEW':
      let idx = state.indexOf(state.find(review => review.id === action.review.id));
      return [state.slice(0, idx), action.review, state.slice(idx + 1)].flat();

    case 'FETCH_REVIEWS':
      return action.reviews.data

    case 'FETCH_USER_REVIEWS':
      return action.user.data.attributes.reviews

    case 'DELETE_REVIEW':
      return state.filter(review => review.id !== action.reviewId);

    default:
      return state;
  }
}
