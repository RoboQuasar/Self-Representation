const initialState = false;

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return action.account;
    case 'RESET_ACCOUNT':
      return false;
    default:
      return state;
  }
}

export default accountReducer;
