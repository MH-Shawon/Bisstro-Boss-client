import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer";

const MainRoute=()=>{
    return(
        <div>
            <Navbar />
             <Outlet />
             <Footer />
        </div>
    )}
export default MainRoute;