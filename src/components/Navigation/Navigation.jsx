import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavItem to="/">Home</NavItem>
        </li>
        <li>
          <NavItem to="users">Users</NavItem>
        </li>
      </ul>
    </nav>
  );
};

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: green;
  }
`;

export default Navigation;
