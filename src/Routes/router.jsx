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
import ManageItem from '../Pages/Dashboard/ManageItem/ManageItem';
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";


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
    element: <Dashboard />,

    children: [
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },

      // admin routes 
      {
        path:'/dashboard/users',
        element: <AllUsers />
      },
      {
        path:'/dashboard/addItems',
        element: <AddItem />
      },
      {
        path:'/dashboard/manageItems',
        element:<ManageItem />
      },
      {
        path:'/dashboard/updateItem/:id',
        element:<UpdateItem />,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },

      // payment routes 
      {
        path:'/dashboard/payment',
        element: <Payment />
      },{
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory />
      }
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
])
