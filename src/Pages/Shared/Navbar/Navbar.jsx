
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(result => {

      }).
      catch(error => {
        console.log(error)
      });
  }
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
          <li className="btn btn-ghost text-xl">Bistro Boss</li>
        </Link>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-.5 uppercase font-bold text-xl fo">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end mr-2 ">
        <div>
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-black bg-base-100 rounded-box w-40"
              >
                <li>
                  <a className="flex items-center justify-center">
                    {user?.displayName}
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center"
                    onClick={handleLogOut}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="navbar-end">
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
