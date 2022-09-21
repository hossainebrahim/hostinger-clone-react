// import { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { MdLockOutline } from "react-icons/md";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import logo from "../../images/Hostinger-logo-1.png";

// export default function NavBar() {
//   const [navbar, setNavbar] = useState(false);

//   return (
//     <nav className="w-full bg-[#673de6]">
//       <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//         <div>
//           <div className="flex items-center justify-between py-3 md:py-5 md:block">
//             <a href="javascript:void(0)">
//               <img src={logo} className="w-32" alt="" />
//             </a>
//             <div className="md:hidden">
//               <button
//                 className="p-2 text-white rounded-md outline-none focus:border-gray-100 focus:border"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//               navbar ? "block" : "hidden"
//             }`}
//           >
//             <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//               <li className="text-white font-semibold hover:text-gray-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="flex items-center justify-center gap-1"
//                 >
//                   Hosting <IoIosArrowDown />
//                 </a>
//               </li>
//               <li className="text-white font-semibold hover:text-gray-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="flex items-center justify-center gap-1"
//                 >
//                   VPS <IoIosArrowDown />
//                 </a>
//               </li>
//               <li className="text-white font-semibold hover:text-gray-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="flex items-center justify-center gap-1"
//                 >
//                   Email <IoIosArrowDown />
//                 </a>
//               </li>
//               <li className="text-white font-semibold hover:text-gray-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="flex items-center justify-center gap-1"
//                 >
//                   Domain <IoIosArrowDown />
//                 </a>
//               </li>
//               <li className="text-white">
//                 <a
//                   href="javascript:void(0)"
//                   className="border px-3 py-1 items-center rounded-full flex gap-1 font-semibold justify-center"
//                 >
//                   <MdLockOutline size={20} /> Log in
//                 </a>
//               </li>
//               <li className="text-white hover:text-gray-200">
//                 <a
//                   href="javascript:void(0)"
//                   className="flex items-center justify-center gap-2 font-semibold"
//                 >
//                   <AiOutlineShoppingCart size={20} /> Cart
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../images/logo22.webp";
import logo2 from "../../images/Hostinger-logo-1.png";

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

          <button
            className={`p-2 px-5  flex gap-1 items-center outline-none border ${
              open ? "text-black ml-0" : "text-white ml-4"
            } rounded-full`}
          >
            <MdLockOutline size={20} /> Log In
          </button>
          <button className="p-2 px-5 ml-4 flex gap-2 items-center outline-none border-none text-white hover:text-gray-400 duration-100 transition-all ease-in">
            <AiOutlineShoppingCart size={20} /> Cart
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
