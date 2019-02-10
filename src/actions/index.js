export const setAccount = account => ({
  type: 'SET_ACCOUNT',
  account
});

export const resetAccount = () => ({
  type: 'RESET_ACCOUNT'
});

export const login = () => ({
  type: 'LOGIN',
  isLogin: true
});

export const logout = () => ({
  type: 'LOGOUT'
});
