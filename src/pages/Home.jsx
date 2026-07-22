import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottom from "../components/home/HomeBottom";

const Home = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0">
        <Video />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">

        <HomeHeroText />

        <HomeBottom />

      </div>
    </section>
  );
};

export default Home;