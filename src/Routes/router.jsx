import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoutes/MainRoute";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";

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
        {
          path: "shop/:category",
            element: <OurShop />,
        },
    ]
  },
  
]);
