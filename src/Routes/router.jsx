import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoutes/MainRoute";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Authentication/Login/SignIn";
import SignUp from "../Pages/Register/SignUp";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Layouts/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import PrivateRoute from "./PvtRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <OurMenu />,
      },
      {
        path: "/shop/:category",
        element: <OurShop />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,

    children: [


      // admin routes
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome /></AdminRoute>,
      },

      {
        path: "/dashboard/users",
        element: <AdminRoute><AllUsers /></AdminRoute>,
      },
      {
        path: "/dashboard/addItems",
        element: <AdminRoute><AddItem /></AdminRoute>,
      },
      {
        path: "/dashboard/manageItems",
        element: <AdminRoute><ManageItem /></AdminRoute>,
      },
      {
        path: "/dashboard/updateItem/:id",
        element: <AdminRoute><UpdateItem /></AdminRoute>,
        loader: ({ params }) =>
          fetch(`https://bistro-boss-server-wine-omega.vercel.app/menu/${params.id}`),
      },

      //user and payment routes
      {
        path: '/dashboard/userHome',
        element: <UserHome />
      },
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
