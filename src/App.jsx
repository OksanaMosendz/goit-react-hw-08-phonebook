import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { Home } from './views/Home/Home.jsx';
import { Login } from './views/Login/Login.jsx';
import { Register } from './views/Register/Register.jsx';
import { Contacts } from './views/Contacts/Contacts';
import { fetchUser } from './redux/auth/auth-operations';
import { getUserToken } from './redux/auth/auth-selectors';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);

  useEffect(() => {
    if (token !== '') {
      dispatch(fetchUser(token));
    }
  }, [dispatch, token]);

  return (
    <>
      {/* {/* // <Container> */}
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
      {/* / </Container> */}
    </>
  );
};
