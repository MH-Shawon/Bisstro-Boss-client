import { NavLink } from "react-router-dom";

const NavLinks=()=>{
    return(
        <>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact Us</NavLink>
                
            </li>
            <li>
                <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to='/menu'>Our Menu</NavLink>
            </li>
            <li>
                <NavLink to='/shop/salad'>Our Shop</NavLink>
            </li>
        </>
    )}
export default NavLinks;