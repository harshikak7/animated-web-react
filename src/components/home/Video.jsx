import React from "react";
import heroVideo from "../../assets/hero-video.mp4";

const Video = () => {
  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={heroVideo} type="video/mp4" />
    </video>
  );
};

export default Video;