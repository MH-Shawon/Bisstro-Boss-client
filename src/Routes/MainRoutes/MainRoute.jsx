import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer";
import { Toaster } from "react-hot-toast";

const MainRoute = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster
       position="top-right" 
       reverseOrder={false} />
    </div>
  );
};
export default MainRoute;
