import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
// import { useContext } from "react";
// import { AuthContext } from "../../../Providers/AuthProvider";
// import useAdmin from "../../../hooks/useAdmin";
const NavLinks = () => {
    const [cart] = useCart()
    // const {user} = useContext(AuthContext);
    // const [isAdmin] = useAdmin();
    // console.log('admin is coming here??',isAdmin);
    return (
        <>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact Us</NavLink>

            </li>
            
            <li>
                <NavLink to='/menu'>Our Menu</NavLink>
            </li>

            <li>
                <NavLink to='/shop/salad'>Our Shop</NavLink>
            </li>
            {/* {
                user && isAdmin && <li>
                    <NavLink to='/dashboard/adminHome'>Dashboard</NavLink>
                </li>
            }
            {
                user && !isAdmin && <li>
                    <NavLink to='/dashboard/userHome'>Dashboard</NavLink>
                </li>
            } */}
            
            <li className="my-auto">
                <NavLink to='/dashboard/cart'>
                    <div className="relative inline-flex">
                        <FaShoppingCart />
                        <span
                            className="absolute min-w-[5px] min-h-[5px] rounded-full py-1 px-1 text-sm font-[18px] content-[''] leading-none grid place-items-center bottom-[5%] right-[-60%] translate-x-1/4 translate-y-2/4 bg-blue-500 text-white">{cart.length}
                        </span>
                    </div>

                </NavLink>
                
            </li>
        </>
    )
}
export default NavLinks;