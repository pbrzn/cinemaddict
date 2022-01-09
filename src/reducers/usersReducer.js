export default function usersReducer(state = {
  allUsers: [],
  currentUser: {},
  requesting: false
}, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        allUsers: state.allUsers.concat(action.user),
        currentUser: action.user,
        requesting: false
      }

    case 'START_ADD_USER_REQUEST':
      return {
        ...state,
        requesting: true
      }

    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: action.user,
        requesting: false
      }

    case 'START_LOGIN_USER_REQUEST':
      return {
        ...state,
        requesting: true
      }

    case 'LOGOUT_USER':
      return {
        ...state,
        currentUser: {},
        requesting: false
      }

    case 'REDIRECT_TO_PROFILE':
      return {
        ...state,
        currentUser: {},
        requesting: false
      }

    default:
      return state;
  }
}
