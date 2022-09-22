import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../images/logo22.webp";
import logo2 from "../../images/Hostinger-logo-1.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0">
      <div
        className={`lg:flex items-center justify-between ${
          open ? " bg-white border-b-2" : "bg-[#673de6]"
        } py-4 lg:px-10 px-7`}
      >
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <span>
            {open ? (
              <img src={logo2} className="w-36" alt="logo" />
            ) : (
              <img src={logo} className="w-36" alt="logo" />
            )}
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute text-white right-8 top-6 cursor-pointer lg:hidden"
        >
          {open ? <GrClose /> : <GiHamburgerMenu />}
        </div>
        <ul
          className={`lg:flex lg:items-center ${
            open ? "bg-white h-[100vh]" : "bg-transparent"
          } lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full  lg:w-auto lg:pl-0 pl-9  ${
            open ? "top-18" : "top-[-490px]"
          }`}
        >
          <li className="lg:ml-8 text-lg lg:my-0 my-7">
            <a
              href="/"
              className={`${
                open ? "text-black flex justify-between w-[90%]" : "text-white"
              } flex gap-1 items-center hover:text-gray-400 duration-100 transition-all ease-in`}
            >
              Hosting <IoIosArrowDown size={16} />
            </a>
          </li>
          <li className="lg:ml-8 text-lg lg:my-0 my-7">
            <a
              href="/"
              className={`${
                open ? "text-black flex justify-between w-[90%]" : "text-white"
              } flex gap-1 items-center hover:text-gray-400 duration-100 transition-all ease-in`}
            >
              Vps <IoIosArrowDown size={16} />
            </a>
          </li>
          <li className="lg:ml-8 text-lg lg:my-0 my-7">
            <a
              href="/"
              className={`${
                open ? "text-black flex justify-between w-[90%]" : "text-white"
              } flex gap-1 items-center hover:text-gray-400 duration-100 transition-all ease-in`}
            >
              Email <IoIosArrowDown size={16} />
            </a>
          </li>
          <li className="lg:ml-8 text-lg lg:my-0 my-7">
            <a
              href="/"
              className={`${
                open ? "text-black flex justify-between w-[90%]" : "text-white"
              } flex gap-1 items-center hover:text-gray-400 duration-100 transition-all ease-in`}
            >
              Domain <IoIosArrowDown size={16} />
            </a>
          </li>

          <Link to={"/login"}>
            <button
              className={`p-2 px-5  flex gap-1 items-center outline-none border ${
                open ? "text-black ml-0" : "text-white ml-4"
              } rounded-full`}
            >
              <MdLockOutline size={20} /> Log In
            </button>
          </Link>
          <button className="p-2 px-5 ml-4 flex gap-2 items-center outline-none border-none text-white hover:text-gray-400 duration-100 transition-all ease-in">
            <AiOutlineShoppingCart size={20} /> Cart
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
