import { Map } from 'immutable';

const initialState = Map();

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return state.set('isLogin', action);
    case 'LOGOUT':
      return Map();
    default:
      return state;
  }
}

export default authReducer;
