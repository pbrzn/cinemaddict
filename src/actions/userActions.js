const createUser = (userObject) => {
  dispatch({ type: 'START_ADD_USER_REQUEST' });
  fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userObject)
  })
  .then(resp => resp.json())
  .then(data => dispatch({
    type: 'ADD_USER',
    user: userInfo
  }));
}

const loginUser = (loginInfo) => {
  dispatch({ type: 'START_LOGIN_USER_REQUEST' });
  fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(loginInfo)
  })
  .then(resp => resp.json())
  .then(data => {
    dispatch({ type: 'LOGIN_USER', data });
    localStorage.setItem("jwt", data.jwt)
    setUser(data.user)
  });
}

const logoutUser = id => dispatch({
  type: 'LOGOUT_USER',
  userId: id
})
