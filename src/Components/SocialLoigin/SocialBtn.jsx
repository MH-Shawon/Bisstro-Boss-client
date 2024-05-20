import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialBtn = () => {
  const { googleCreateUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
const navigate = useNavigate()
  const handleGoogleSignUp = () => {
    googleCreateUser()
    .then((res) => {
      const userInfo = {
        email: res?.user?.email,
        name: res?.user?.displayName,
      };
      axiosPublic.post('/users', userInfo)
      .then(res=>{
        navigate(navigate(location?.state?.from.pathname || "/"))
      })
    });
  };
  return (
    <div className="flex gap-8 mt-5">
      <button
        className=" rounded-full font-medium text-center uppercase  w-10 max-w-[40px] h-10 max-h-[40px] border-2  border-black"
        type="button"
      >
        <span className="text-xl  flex items-center justify-center">
          <i className="text-center">
            <FaFacebookF />
          </i>
        </span>
      </button>
      <button
        onClick={handleGoogleSignUp}
        className=" rounded-full font-medium text-center uppercase  w-10 max-w-[40px] h-10 max-h-[40px] border-2  border-black text-xl  flex items-center justify-center"
        type="button"
      >
        <FaGoogle />
      </button>
      <button
        className=" rounded-full font-medium text-center uppercase  w-10 max-w-[40px] h-10 max-h-[40px] border-2  border-black"
        type="button"
      >
        <span className="text-xl  flex items-center justify-center">
          <i className="text-center">
            <FaGithub />
          </i>
        </span>
      </button>
    </div>
  );
};
export default SocialBtn;
