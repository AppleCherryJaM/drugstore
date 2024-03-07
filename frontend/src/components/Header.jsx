import { NavLink } from "react-router-dom";

const Header = () => {
return <>
 <NavLink to='/'>Shop</NavLink> 
 <NavLink to='/cart'>Shopping cart</NavLink> 
</>
}

export default Header;