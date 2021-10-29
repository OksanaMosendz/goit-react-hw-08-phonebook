import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export const PrivateRoute = ({ children, ...props }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>
  );
};
