import { Helmet } from "react-helmet-async";
import "./Login.css";
import AuthBg from "../../../assets/reservation/wood-grain-pattern-gray1x.png";
import loginAuth from "../../../assets/others/authentication2.png";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";
import SocialBtn from "../../../Components/SocialLoigin/SocialBtn";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidate = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        if (error) {
          toast.error("Incorrect Email or password");
        }
      });
  };

  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url(${AuthBg})`,
      }}
    >
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>

      <div
        style={{
          boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
        }}
        className="hero-content flex-col lg:flex-row w-[1080px] min-h-[550px] space-x-6"
      >
        <div className="w-1/2 max-w-sm ">
          <img src={loginAuth} alt="" />
        </div>

        <div className=" w-1/2 max-w-sm ">
          <div className="text-center ">
            <h1 className="text-4xl tracking-tighter font-bold">
              Welcome back!
            </h1>
            <p className="py-2">Please enter your details</p>
          </div>
          <form onSubmit={handleLogin} className="card-body -mt-10 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered "
                required
              />
              <p className="absolute top-[54px] right-2">
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </p>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered pt-[15px]">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidate}
                type="text"
                placeholder="Type here"
                className="input input-bordered mt-8"
                required
              />
            </div>
            <div className="form-control">
              <input
                disabled={disabled}
                className={`btn text-white text-xl ${
                  disabled ? "bg-gray-400" : "bg-[#D1A054]"
                }`}
                type="submit"
                value="Sign In"
              />
            </div>
            <div className="text-[#D1A054] text-center">
              <Link to="/signUp">
                <p className="font-medium text-xl tracking-tighter">
                  New here?{" "}
                  <span className="font-semibold text-xl">
                    Create a New Account
                  </span>
                </p>
              </Link>
            
            </div>
            <div>

              <h4 className="text-center">Or sign in with</h4>
              <span className="flex items-center justify-center">
                <SocialBtn />
              </span>



            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
