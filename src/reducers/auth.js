const initialState = {};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return action;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
}

export default authReducer;
