import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/auth-operations';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onHandleChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
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
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration</h1>

      <form autoComplete="off" onSubmit={onHandleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={onHandleChange}
          />
        </label>

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
