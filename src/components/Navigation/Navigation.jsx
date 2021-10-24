import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <>
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  </>
);
