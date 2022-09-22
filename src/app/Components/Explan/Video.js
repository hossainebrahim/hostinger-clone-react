import React from "react";

const Video = ({ video }) => {
  return <video className="w-[100%]" autoPlay loop muted src={video}></video>;
};

export default Video;
