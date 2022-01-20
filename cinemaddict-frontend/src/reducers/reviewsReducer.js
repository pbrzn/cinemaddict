export default function reviewsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return state.concat(action.review);

    case 'EDIT_REVIEW':
      state[action.review.id] = action.review;
      return state;

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
