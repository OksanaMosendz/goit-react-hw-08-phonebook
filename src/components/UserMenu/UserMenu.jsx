import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/auth-operations';
import { getUserEmail, getUserToken } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Div, P } from './UserMenu.styled';
import { Button } from 'react-bootstrap';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const token = useSelector(getUserToken);
  return (
    <Div>
      <P>{email}</P>
      <Button
        variant="outline-primary"
        type="button"
        onClick={() => dispatch(logoutUser(token))}
      >
        Log off
      </Button>
    </Div>
  );
};
