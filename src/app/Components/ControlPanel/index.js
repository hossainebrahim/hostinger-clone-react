import React from "react";
import Video from "../Explan/Video";
import user from "../../images/user.mp4";
import Item from "./Item";

const ControlPanel = () => {
  return (
    <div className="bg-white py-12">
      <h1 className="text-[#2f1c6a] font-bold md:text-4xl text-3xl my-16 text-center">
        User-Friendly Control Panel
      </h1>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        {/* start line wap layout 2*/}
        <div className="flex flex-wrap gap-24">
          {/*left side*/}
          <div className="w-full md:w-1/2 ">
            <Video video={user} />
          </div>

          {/* right side*/}
          <div className="w-full md:flex-1 flex justify-center flex-col items-center md:items-start">
            <Item
              img="https://assets.hostinger.com/images/homepage2020/control-panel-section/user-icon-923934a391.svg"
              Title="Ease of Use"
              dis="Hostinger Panel is extremely user-friendly and can be used by those with
            little experience in website development."
            />
            <Item
              img="https://assets.hostinger.com/images/homepage2020/control-panel-section/chart-icon-3472a5b9a8.svg"
              Title="Powerful"
              dis="A wide variety of tools to satisfy advanced user and website developer needs."
            />
            <Item
              img="https://assets.hostinger.com/images/homepage2020/control-panel-section/wp-icon-9be267d135.svg"
              Title="WordPress Optimized"
              dis="Get more speed, better SEO, visitor retention and conversions with our custom-built WP optimization stack and LiteSpeed cache."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
