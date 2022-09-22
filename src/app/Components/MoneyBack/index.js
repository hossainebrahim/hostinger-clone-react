import React from "react";

const MoneyBack = () => {
  return (
    <div className="bg-white py-28">
      <div className=" px-4 mx-auto lg:max-w-7xl md:px-8 flex flex-col text-center">
        <h1 className="text-3xl font-bold text-[#2f1c6a] mb-4">
          30-Day Money-Back Guarantee
        </h1>
        <p className="md:text-md text-sm font-semibold text-[#2f1c6a] mb-4">
          We'll refund your payment if you're not 100% satisfied with Hostinger.
          No hassle, no risk.
        </p>
        <div>
          <button className="bg-[#673de6] p-3 rounded-full w-56 mt-7 text-white text-semibold text-center">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoneyBack;
