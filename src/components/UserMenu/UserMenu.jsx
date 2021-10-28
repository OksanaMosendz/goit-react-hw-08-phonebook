import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/auth-operations';
import { getUserEmail, getUserToken } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const token = useSelector(getUserToken);
  return (
    <>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logoutUser(token))}>
        Выйти
      </button>
    </>
  );
};
