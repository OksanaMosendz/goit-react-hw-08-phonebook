import { getUserName, getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Div } from './Home.styled';

export const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const name = useSelector(getUserName);
  return (
    <Div>
      {!isLoggedIn ? (
        <>
          <h1> Wellcome to PhoneBook!</h1>
          <p>Please, register or log in!</p>
        </>
      ) : (
        <h1>Wellcome to PhoneBook,{name}!</h1>
      )}
    </Div>
  );
};
