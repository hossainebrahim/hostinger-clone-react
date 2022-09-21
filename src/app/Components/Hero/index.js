import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Logo from "../../images/header-img-ba78ca58ef.webp";
import logo1 from "../../images/w.png";
import logo2 from "../../images/2.png";
import logo3 from "../../images/3.png";
//main  color
//#673de6
//#8AAAE5
const Hero = () => {
  return (
    <>
      <div className="bg-[#673de6] lg:h-[80vh] md:h-[150vh] h-[120vh] flex items-center">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex flex-wrap gap-5">
            {/* hero left*/}
            <div className="w-full lg:flex-1">
              <div className="md:flex md:justify-center md:items-center md:flex-col lg:flex lg:justify-start lg:items-start">
                <h1 className="md:text-5xl md:text-center lg:text-start lg:text-5xl text-3xl font-bold text-white lg:mt-20 mt-0">
                  Everything You Need to Create a Website
                </h1>
                <p className="text-white mt-7 mb-3 text-lg">
                  Join 1,278,620 website owners who are building their
                  businesses online.
                </p>
                <button className="p-3 mt-5 mb-5 px-14 text-bold capitalize bg-[#d63163] hover:bg-[#d53867] text-white outline-none border-none rounded-full">
                  Get started
                </button>
                <p className="flex items-center justify-center text-white gap-1">
                  <IoMdCheckmark size={24} className="text-green-400 " />
                  30-day money-back guarantee
                </p>
              </div>
            </div>
            {/* hero right*/}
            <div className="w-full lg:w-1/2 hidden md:block">
              <div className="w-3/4 flex items-center justify-center lg:mt-16">
                <img src={Logo} alt="" className="md:w-[90%] lg:w-[100%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:gap-14 gap-4 py-12">
        <img src={logo1} className="md:w-[15%] w-[25%]" alt="" />
        <img src={logo2} className="md:w-[13%] w-[25%]" alt="" />
        <img src={logo3} className="md:w-[15%] w-[25%]" alt="" />
      </div>
    </>
  );
};

export default Hero;
