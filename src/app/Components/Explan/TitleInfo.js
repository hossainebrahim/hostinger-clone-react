import React from "react";

const TitleInfo = ({ Title, subT, dis, link }) => {
  return (
    <>
      <h4 className="text-md font-semibold mb-3 text-gray-400">{subT}</h4>
      <h1 className="text-[#2f1c6a] font-bold md:text-4xl text-3xl mb-2">
        {Title}
      </h1>
      <p className="w-3/4 text-gray-600 mb-4">{dis}</p>
      <a href="#" className="underline text-md text-[#2f1c6a]">
        {link}
      </a>
    </>
  );
};

export default TitleInfo;
