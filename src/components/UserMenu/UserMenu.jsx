import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p> Email</p>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Выйти
      </button>
    </>
  );
};
