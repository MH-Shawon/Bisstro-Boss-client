import { Helmet } from "react-helmet-async";

import AuthBg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import signAuth from "../../assets/others/authentication2.png";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser)
        
        return updateUser(data.name);
      })
      .then(() => {
        toast.success("User Created Successfully")
        navigate("/");
      })
      .catch((error) => {
        console.error('Error creating or updating user:', error);
      });
  };

  
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${AuthBg})` }}
    >
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>

      <div
        style={{
          boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
        }} className="hero-content min-h-[500px] flex-col lg:flex-row-reverse w-[1080px] space-x-6">
        <div className="w-1/2 max-w-sm">
          <img src={signAuth} alt="" />
        </div>

        <div className="w-1/2 max-w-sm">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter">
              Welcome to our website!
            </h1>
            <p className="py-2">Please enter your details</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body -mt-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Type here"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Type here"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                  },
                })}
                placeholder="Enter your password"
                className="input input-bordered"
              />
              <p className="absolute top-[54px] right-2">
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </p>
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control">
              <input
                className="btn text-white text-xl bg-[#D1A054]"
                type="submit"
                value="Sign Up"
              />
            </div>
            <div className="text-[#D1A054] text-center">
              <Link to="/login">
                <p className="font-medium text-xl tracking-tighter">
                  Already registered?{" "}
                  <span className="font-semibold text-xl">Go to log in</span>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
