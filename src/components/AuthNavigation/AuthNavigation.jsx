import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/register" exact>
          Registration
        </NavLink>
      </li>

      <li>
        <NavLink to="/login" exact>
          Login
        </NavLink>
      </li>
    </ul>
  );
};
