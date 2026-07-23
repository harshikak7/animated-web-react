import React from "react";
import homeImg from "../../assets/images/project1.jpg";
import projectsImg from "../../assets/images/project2.jpg";
import agentsImg from "../../assets/images/project3.jpg";
import contactImg from "../../assets/images/project4.jpg";
import { Link } from "react-router-dom";

const FullScreenNav = ({ setOpenMenu }) => {
  const navItems = [
    {
      title: "Home",
      image: homeImg,
    },
    {
      title: "Projects",
      image: projectsImg,
    },
    {
      title: "Agents",
      image: agentsImg,
    },
    {
      title: "Contact",
      image: contactImg,
    },
  ];
  return (
    <div id="fullnav" className="fixed inset-0 z-[9999] bg-black py-20">
      <div
        onClick={() => setOpenMenu(false)}
        className="absolute top-8 right-8 w-20 h-16 rounded-2xl border border-white/10 bg-black/55 backdrop-blur-md flex items-center justify-center cursor-pointer"
      >
        <div className="relative w-8 h-8">
          <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rotate-45"></span>
          <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -rotate-45"></span>
        </div>
      </div>
      <div id="all-links" className="mt-[8vh]">
       {navItems.map((item, i) => (
  <Link
    key={item.title}
    to={
      item.title === "Home"
        ? "/"
        : item.title === "Projects"
        ? "/projects"
        : item.title === "Agents"
        ? "/agents"
        : "/contact"
    }
    onClick={() => setOpenMenu(false)}
    className="block"
  >
    <div
      className={`link relative overflow-hidden ${
        i === navItems.length - 1
          ? "border-y border-white"
          : "border-t border-white"
      }`}
    >
      <h1 className="relative z-10 font-[font1] text-[18vw] md:text-[14vh] uppercase text-center leading-[0.9] py-5 md:pt-4 text-white">
  {item.title}
</h1>

      <div className="moveLink absolute top-0 left-0 w-full h-full z-20 overflow-hidden flex items-center">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="moveX flex items-center bg-[#F4E9D8] h-full"
          >
            <h2 className="font-[font1] text-[18vw] md:text-[14vh] uppercase py-5 md:pt-4 whitespace-nowrap">
  {item.title}
</h2>

            <img
  src={item.image}
  alt={item.title}
  className="h-16 w-28 md:h-[10vh] md:w-[26vh] rounded-full object-cover shrink-0"
/>
           <h2 className="font-[font1] text-[18vw] md:text-[14vh] uppercase py-5 md:pt-4 whitespace-nowrap">
  {item.title}
</h2>

           <img
  src={item.image}
  alt={item.title}
  className="h-16 w-28 md:h-[10vh] md:w-[26vh] rounded-full object-cover shrink-0"
/>

            <h2 className="font-[font1] text-[18vw] md:text-[14vh] uppercase py-5 md:pt-4 whitespace-nowrap">
  {item.title}
</h2>

           <img
  src={item.image}
  alt={item.title}
  className="h-16 w-28 md:h-[10vh] md:w-[26vh] rounded-full object-cover shrink-0"
/>
          </div>
        ))}
      </div>
    </div>
  </Link>
))}

      </div>
    </div>
  );
};


export default FullScreenNav;
