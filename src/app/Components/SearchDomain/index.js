import React from "react";

const SearchDomain = () => {
  return (
    <div className="bg-[#f4f5ff]">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="w-full py-10">
          <h1 className="md:text-4xl text-3xl text-center font-bold text-[#2f1c6a] ">
            Find the perfect domain name
          </h1>
          <div className="lg:px-56 md:32 px-3 text-center">
            <p className="py-5 font-semibold text-gray-600 text-md">
              Enter domain name of your choice and pick any extension name on
              the next step (choose between .in, .com, .online, .live, .store,
              .info and many more)
            </p>
            <div className="w-full flex flex-wrap">
              <input
                className=" outline-none border-none py-3 px-4 md:rounded-tl-full md:rounded-bl-full rounded-full md:w-3/4 w-full shadow-md"
                type="text"
                placeholder="Type in that perfect domain name"
              />
              <input
                className="bg-gray-600 px-4 py-3 cursor-pointer rounded-full md:-ml-9  text-white md:w-1/4 w-full md:mt-0 mt-5 shadow-md"
                type="button"
                value="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDomain;
