import * as authAPI from '../../services/auth-API';
import * as authActions from './auth-actions';

export const registerUser = newUserParams => async dispatch => {
  dispatch(authActions.registerUserRequest());
  try {
    const data = await authAPI.registerUser(newUserParams);
    dispatch(authActions.registerUserSuccess(data));
  } catch (error) {
    dispatch(authActions.registerUserError(error));
  }
};

export const loginUser = userParams => async dispatch => {
  dispatch(authActions.loginUserRequest());
  try {
    const data = await authAPI.loginUser(userParams);
    dispatch(authActions.loginUserSuccess(data));
  } catch (error) {
    dispatch(authActions.loginUserError(error));
  }
};

export const logoutUser = token => async dispatch => {
  dispatch(authActions.logoutUserRequest());
  try {
    await authAPI.logoutUser(token);
    await dispatch(authActions.logoutUserSuccess());
  } catch (error) {
    dispatch(authActions.logoutUserError(error));
  }
};

export const fetchUser = token => async dispatch => {
  dispatch(authActions.fetchUserRequest());
  try {
    const data = await authAPI.fetchUser(token);
    dispatch(authActions.fetchUserSuccess(data));
  } catch (error) {
    dispatch(authActions.fetchUserError(error));
  }
};
