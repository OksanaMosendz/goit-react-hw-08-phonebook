import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export const PublicRoute = ({ children, restricted = false, ...props }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  const shouldRedirected = isLoggedIn && restricted;
  console.log(shouldRedirected);
  return (
    <Route {...props}>
      {shouldRedirected ? <Redirect to="/" /> : children}
    </Route>
  );
};
