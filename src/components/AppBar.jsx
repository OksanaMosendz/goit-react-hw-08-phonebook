import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNavigation } from './AuthNavigation/AuthNavigation';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header>
        <Navbar variant="primary" bg="light">
          <Nav className="me-auto">
            <Navigation />
          </Nav>

          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </Navbar>
      </header>
      <hr />
    </>
  );
};
