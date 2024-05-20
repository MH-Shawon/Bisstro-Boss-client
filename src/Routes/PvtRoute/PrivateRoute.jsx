import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from '../../Components/Spinner/LoadingSpinner'

const PrivateRoute=({children})=>{
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <LoadingSpinner />;
    }
    if (user) {
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace />

}
export default PrivateRoute;