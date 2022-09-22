import React from "react";
import logo from "../images/Hostinger-logo-1.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[100vh]">
      <div className="lg:flex items-center justify-between bg-white border-b-2 py-4 lg:px-10 px-7">
        <Link to={"/"}>
          <img src={logo} className="w-32" alt="" />
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-[#2f1c6a] mt-10">Log in</h1>
        <div className="flex gap-10 mt-5 pb-5">
          <FcGoogle className="border text-6xl p-4 rounded-md cursor-pointer" />
          <FaFacebook
            color="white"
            className="border text-6xl bg-[#4267B2] p-4 rounded-md cursor-pointer"
          />
        </div>
      </div>
      {/* from*/}
      <div className="flex flex-col items-center mt-10">
        <input
          type="email"
          className="border-2 p-3 rounded-md lg:w-1/4 md:w-3/4 w-4/5"
          placeholder="Enter Email"
        />
        <input
          type="password"
          className="border-2 p-3 rounded-md lg:w-1/4 md:w-3/4 w-4/5 mt-8"
          placeholder="Enter password"
        />
        <input
          type="submit"
          className="border-2 p-3 rounded-md lg:w-1/4 md:w-3/4 w-4/5 mt-8 bg-[#6747c7] text-white cursor-pointer hover:shadow-lg transition-all duration-100 ease-in-out"
          value="Log in"
        />
      </div>
      <div className="text-center mt-10">
        <a href="#" className="text-[#2f1c6a] font-semibold">
          Forgot password?
        </a>
        <p className="text-md font-semibold mt-4">
          Not a member yet?
          <Link to={"/"} className="text-[#2f1c6a]">
            Choose a hosting plan
          </Link>
          and get started now!
        </p>
      </div>
    </div>
  );
};

export default Login;
