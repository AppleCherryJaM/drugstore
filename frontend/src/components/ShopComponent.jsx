import { NavLink } from 'react-router-dom';

const ShopComponent = ({ name, id }) => {
  return (
    <li>
      <NavLink to={`${id}`}>{name}</NavLink>
    </li>
  );
};
export default ShopComponent;
