import { Helmet } from 'react-helmet-async';
import './Login.css'
import AuthBg from '../../../assets/reservation/wood-grain-pattern-gray1x.png'
import loginAuth from '../../../assets/others/authentication2.png'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          `url(${AuthBg})`,
      }}
    >
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>


      <div className="">
        <div className="hero-content flex-col lg:flex-row w-[1080px] shadow-xl shadow-[#00000040] space-x-6">
          <div className="w-1/2 max-w-sm border">



            <img src={loginAuth} alt="" />
          </div>

          <div className=" w-1/2 max-w-sm ">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Welcome back!</h1>
              <p className="py-6">Please enter your details</p>
            </div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered " required />
                <p className='absolute top-[54px] right-2'>
                  {showPassword ? <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} /> : <FaEye onClick={() => { setShowPassword(!showPassword) }} />}
                </p>


                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Login;
