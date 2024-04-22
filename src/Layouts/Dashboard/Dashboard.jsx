import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { MdEditCalendar, MdEmail, MdOutlinePayment, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
      <div className="flex text-[#151515] font-cinzel uppercase">
      <div className="bg-[#D1A054] w-[280px] min-h-screen pl-8  font-medium">
        <div className="mt-12 pl-6 font-black text-[23px]">
                  <h2>BISTRO BOSS</h2>
                  <span className="text-base tracking-[4.8px]">Restaurant</span>
        </div>
        <ul className="menu mt-16 space-y-2">
          <li>
            <NavLink to="dashboard/home">
              {" "}
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/reservation">
              {" "}
                          <FaCalendarAlt />
              reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/payment">
              {" "}
                          <MdOutlinePayment />
             payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              {" "}
              <FaCartShopping />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/review">
              {" "}
                          <MdReviews />
              add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/booking">
              {" "}
                          <MdEditCalendar />
              my booking
            </NavLink>
          </li>
                  
                  <div className="w-[200px] pl-[18px] menu ">

                      <p className="border "></p>
                  </div>
          
        </ul>
              <ul className="menu space-y-2">

                  <li>
                      <NavLink to="/">
                          {" "}
                          <FaHome />
                          Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="dashboard/menu">
                          {" "}
                          <IoMenu />
                          menu
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="dashboard/shop">
                          {" "}
                          <GiShoppingBag />
                          shop
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="dashboard/contact">
                          {" "}
                          <MdEmail />
                          contact
                      </NavLink>
                  </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
