import { Switch, Route } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { Home } from './views/Home/Home.jsx';
import { Login } from './views/Login/Login.jsx';
import { Register } from './views/Register/Register.jsx';
import { Contacts } from './views/Contacts/Contacts';

export const App = () => {
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
