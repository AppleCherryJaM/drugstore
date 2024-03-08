import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Shopping cart</NavLink>{' '}
        </li>
      </ul>
    </header>
  );
};

export default Header;
