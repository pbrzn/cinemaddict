export default function reviewsReducer(state = {
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return state.reviews.concat(action.review);

    case 'DELETE_REVIEW':
      return state.reviews.filter(review => review.id !== action.reviewId);

    default:
      return state;
  }
}
