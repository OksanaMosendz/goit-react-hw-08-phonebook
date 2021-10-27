import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/auth-operations';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onHandleChange = e => {
    switch (e.target.name) {
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>

      <form autoComplete="off" onSubmit={onHandleSubmit}>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={onHandleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={onHandleChange}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
