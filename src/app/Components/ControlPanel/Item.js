import React from "react";

const Item = ({ Title, img, dis }) => {
  return (
    <>
      <img src={img} alt="" className="w-5" />
      <h1 className="text-[#2f1c6a] font-bold md:text-2xl text-xl my-4 ">
        {Title}
      </h1>
      <p className="w-3/4 text-gray-600 mb-4 text-sm">{dis}</p>
    </>
  );
};

export default Item;
