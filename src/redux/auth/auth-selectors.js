export const getUserEmail = state => state.auth.user.email;
export const getUserToken = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
