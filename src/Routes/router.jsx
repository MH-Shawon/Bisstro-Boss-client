import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoutes/MainRoute";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    children:[
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "menu",
            element: <OurMenu />,
        },
    ]
  },
  
]);
