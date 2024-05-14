import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="ml-8 mt-12">
          <h3 className="text-[32px] font-semibold">Hi, <span className="text-teal-600">
           {user?.displayName ? user.displayName : ""}
        </span> welcome back!
      </h3>
    </div>
  );
};
export default UserHome;
