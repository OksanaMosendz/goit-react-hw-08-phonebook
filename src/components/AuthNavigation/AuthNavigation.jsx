import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const AuthNavigation = () => {
  return (
    <>
      <LinkContainer to="/register" exact>
        <Nav.Link>Registration</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login" exact>
        <Nav.Link>Log in</Nav.Link>
      </LinkContainer>
    </>
  );
};
