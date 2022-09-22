import React from "react";
import TitleInfo from "./TitleInfo";
import Video from "./Video";
import easy from "../../images/easy.mp4";
import simply from "../../images/simply.mp4";
import chat from "../../images/chat.mp4";
import wordpress from "../../images/wordpress.mp4";
import Scal from "../../images/scal.mp4";

const ExPlan = () => {
  return (
    <>
      {/*layout 1*/}
      <div className="bg-white py-12">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          {/* start line wap layout 1*/}
          <div className="flex flex-wrap gap-5">
            {/*left side*/}
            <div className="w-full md:flex-1 flex justify-center flex-col items-center md:items-start">
              <TitleInfo
                Title="Easy to set up"
                link="Learn more"
                subT="EASY TO USE AND SIMPLE"
                dis="Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way."
              />
            </div>
            {/* right side*/}
            <div className="w-full md:w-1/2 ">
              <Video video={easy} />
            </div>
          </div>
        </div>
      </div>
      {/* layout 2*/}
      <div className="bg-white py-12">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          {/* start line wap layout 2*/}
          <div className="flex flex-wrap gap-5">
            {/*left side*/}
            <div className="w-full md:w-1/2 ">
              <Video video={simply} />
            </div>

            {/* right side*/}
            <div className="w-full md:flex-1 flex justify-center flex-col items-center md:items-start">
              <TitleInfo
                Title="Lightning-fast websites"
                subT="PERFORMANCE AND SPEED"
                link="Learn more"
                dis="Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website."
              />
            </div>
          </div>
        </div>
      </div>
      {/* layout 3*/}
      <div className="bg-white py-12">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          {/* start line wap layout 1*/}
          <div className="flex flex-wrap gap-5">
            {/*left side*/}
            <div className="w-full md:flex-1 flex justify-center flex-col items-center md:items-start">
              <TitleInfo
                Title="WordPress made easy"
                subT="GREAT WORDPRESS EXPERIENCE"
                dis="Start your website with an automatic 1-click WordPress installation. The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure."
                link="Learn more"
              />
            </div>
            {/* right side*/}
            <div className="w-full md:w-1/2 ">
              <Video video={wordpress} />
            </div>
          </div>
        </div>
      </div>
      {/* layout 4*/}
      <div className="bg-white py-12">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          {/* start line wap layout 2*/}
          <div className="flex flex-wrap gap-5">
            {/*left side*/}
            <div className="w-full md:w-1/2 ">
              <Video video={chat} />
            </div>

            {/* right side*/}
            <div className="w-full md:flex-1 flex justify-center flex-col items-center md:items-start">
              <TitleInfo
                Title="24/7 Support"
                subT="PROFESSIONAL AND HANDS-ON"
                dis="Our team of experts will solve technical issues to get your websites up and running. Anytime."
                link="Contact Us"
              />
            </div>
          </div>
        </div>
      </div>
      {/*layout 5*/}
      <div className="bg-white py-12">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          {/* start line wap layout 1*/}
          <div className="flex flex-wrap gap-5">
            {/*left side*/}
            <div className="w-full md:flex-1 flex justify-center flex-col items-center md:items-start">
              <TitleInfo
                Title="From micro to large-scale"
                link="See all products"
                subT="FLEXIBLE AND SCALABLE"
                dis="Different projects require different technologies. Pick a plan that matches your current needs, then upgrade and scale as your website grows."
              />
            </div>
            {/* right side*/}
            <div className="w-full md:w-1/2 ">
              <Video video={Scal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExPlan;
