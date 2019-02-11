import { Map } from 'immutable';

const initialState = Map();

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return state.merge(action.account);
    case 'RESET_ACCOUNT':
      return Map();
    default:
      return state;
  }
}

export default accountReducer;
