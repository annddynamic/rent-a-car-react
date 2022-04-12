const IsLoggedInReducer = (
  state = {
    loggedIn: false,
    token: null,
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return (state = {
        loggedIn: true,
        token: action.payload.token,
      });
    case "LOGOUT":
      return (state = {
        loggedIn: false,
        token: null,
      });
    case "SETLOGIN":
      return (state = {
          loggedIn: action.payload.ls,
          token:action.payload.token
      });
    default:
      return state;
  }
};

export default IsLoggedInReducer;
