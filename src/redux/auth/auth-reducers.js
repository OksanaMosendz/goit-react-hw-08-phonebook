import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
} from './auth-actions';

const user = createReducer(
  { name: null, email: null },
  {
    [registerUserSuccess]: (_, { payload }) => payload.user,
    [loginUserSuccess]: (_, { payload }) => payload.user,
    [logoutUserSuccess]: () => ({ name: null, email: null }),
  },
);

const token = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => payload.token,
  [logoutUserSuccess]: () => '',
});

const isLoggedIn = createReducer(false, {
  [registerUserRequest]: () => false,
  [registerUserSuccess]: () => true,
  [registerUserError]: () => false,
  [loginUserRequest]: () => false,
  [loginUserSuccess]: () => true,
  [loginUserError]: () => false,
  [logoutUserRequest]: () => true,
  [logoutUserSuccess]: () => false,
  [logoutUserError]: () => true,
});

const authError = createReducer(null, {
  [registerUserRequest]: () => null,
  [registerUserSuccess]: () => null,
  [registerUserError]: (_, { payload }) => payload,
  [loginUserRequest]: () => null,
  [loginUserSuccess]: () => null,
  [loginUserError]: (_, { payload }) => payload,
  [logoutUserRequest]: () => null,
  [logoutUserSuccess]: () => null,
  [logoutUserError]: (_, { payload }) => payload,
});

export const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
  authError,
});
