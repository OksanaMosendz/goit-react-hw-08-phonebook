import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <LinkContainer to="/" exact>
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      {isLoggedIn && (
        <LinkContainer to="/contacts">
          <Nav.Link>Contacts</Nav.Link>
        </LinkContainer>
      )}
    </>
  );
};
