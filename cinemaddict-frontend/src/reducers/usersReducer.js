export default function usersReducer(state = {
  currentUser: {},
}, action) {
  switch (action.type) {

    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: action.user,
      }

    case 'FETCH_USER':
      return {
        ...state,
        currentUser: action.user,
      }

    case 'LOGOUT_USER':
      return {
        ...state,
        currentUser: {},
      }

    default:
      return state;
  }
}
