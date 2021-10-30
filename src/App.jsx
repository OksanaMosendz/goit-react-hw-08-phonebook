import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { Home } from './views/Home/Home.jsx';
import { Login } from './views/Login/Login.jsx';
import { Register } from './views/Register/Register.jsx';
import { Contacts } from './views/Contacts/Contacts';
import { fetchUser } from './redux/auth/auth-operations';
import {
  getUserToken,
  getIsFetchingCurrentUser,
} from './redux/auth/auth-selectors';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    if (token !== '') {
      dispatch(fetchUser(token));
    }
  }, [dispatch, token]);

  return (
    !isFetchingCurrentUser && (
      <>
        {/* {/* // <Container> */}
        <AppBar />
        <Switch>
          <PublicRoute exact path="/">
            <Home />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <Register />
          </PublicRoute>

          <PublicRoute path="/login" restricted>
            <Login />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <Contacts />
          </PrivateRoute>
        </Switch>
        {/* / </Container> */}
      </>
    )
  );
};
