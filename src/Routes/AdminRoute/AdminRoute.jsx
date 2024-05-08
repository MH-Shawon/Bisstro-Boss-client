import { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../Providers/AuthProvider";
import LoadingSpinner from "../../Components/Spinner/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <LoadingSpinner />;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={location.pathname} to="/" />;
};

export default AdminRoute;
