
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-gray-600 text-white max-w-screen-xl bg-opacity-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
          >
            <NavLinks />
          </ul>
        </div>
        <Link to='/'>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-.5 uppercase font-bold text-xl fo">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};
export default Navbar;
