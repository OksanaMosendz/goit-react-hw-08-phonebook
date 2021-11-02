import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/auth-operations';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { Button, Container, Form } from 'react-bootstrap';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(getIsLoggedIn);
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
    !isLoggedIn && (
      <Container className=" d-flex flex-column align-items-center">
        <h1>Login</h1>

        <Form onSubmit={onHandleSubmit} className="w-50 text-center">
          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onHandleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onHandleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form>
      </Container>
    )
  );
};
