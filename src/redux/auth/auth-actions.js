import { createAction } from '@reduxjs/toolkit';
export const registerUserRequest = createAction('auth/registerUserRequest');
export const registerUserSuccess = createAction('auth/registerUserSuccess');
export const registerUserError = createAction('auth/registerUserError');

export const loginUserRequest = createAction('auth/loginUserRequest');
export const loginUserSuccess = createAction('auth/loginUserSuccess');
export const loginUserError = createAction('auth/loginUserError');

export const logoutUserRequest = createAction('auth/logoutUserRequest');
export const logoutUserSuccess = createAction('auth/logoutUserSuccess');
export const logoutUserError = createAction('auth/logoutUserError');

export const fetchUserRequest = createAction('auth/fetchUserRequest');
export const fetchUserSuccess = createAction('auth/fetchUserSuccess');
export const fetchUserError = createAction('auth/fetchUserError');
