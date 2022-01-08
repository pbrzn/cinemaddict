export default function usersReducer(state = {
  users: []
}, action) {
  switch (action.type) {
    case 'ADD_USER':
      return state.concat(action.user)

    case 'LOGIN_USER':
      return

    case 'LOGOUT_USER':
      return

    default:
      return state;
  }
}
