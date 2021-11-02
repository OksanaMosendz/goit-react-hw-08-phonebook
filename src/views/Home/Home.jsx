import { getUserName, getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const name = useSelector(getUserName);
  return (
    <div className="text-center  mt-5">
      {!isLoggedIn ? (
        <>
          <h1> Wellcome to PhoneBook!</h1>
          <p>Please, register or log in!</p>
        </>
      ) : (
        <h1 className="d-inline-flex">Wellcome to PhoneBook,{name}!</h1>
      )}
    </div>
  );
};
