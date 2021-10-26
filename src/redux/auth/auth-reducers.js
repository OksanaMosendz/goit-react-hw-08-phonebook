import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
} from './auth-actions';

const user = createReducer(
  { name: null, email: null },
  {
    [registerUserSuccess]: (_, { payload }) => payload.user,
    [loginUserSuccess]: (_, { payload }) => payload.user,
  },
);

const token = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => payload.token,
});

const isLoggedIn = createReducer(false, {
  [registerUserRequest]: () => false,
  [registerUserSuccess]: () => true,
  [registerUserError]: () => false,
  [loginUserRequest]: () => false,
  [loginUserSuccess]: () => true,
  [loginUserError]: () => false,
});

export const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
});
