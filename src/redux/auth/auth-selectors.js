// import { createSelector } from 'reselect';

export const getUserEmail = state => state.auth.user.email;
export const getUserToken = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
