import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);

  return (
 <header className="fixed top-0 left-0 w-full z-50">

  {/* Top Gradient */}
  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none"></div>

  <div className="relative flex items-center justify-between px-5 md:px-10 h-20">

    {/* Logo */}
    <Link to="/" className="z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 103 44"
        className="w-24 md:w-28 fill-white transition-colors duration-300"
      >
        <path d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M0,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L0,0.0057591623 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 Z" />
      </svg>
    </Link>

    {/* Menu Button */}
    <div
      className="relative flex items-center justify-center
      w-20 h-16
      rounded-2xl
      bg-black/55 
      backdrop-blur-md
      border border-white/10
      overflow-hidden
      cursor-pointer"
      onMouseEnter={() => {
        navRef.current.style.height = "100%";
      }}
      onMouseLeave={() => {
        navRef.current.style.height = "0%";
      }}
    >
      {/* Hover Fill */}
      <div
        ref={navRef}
        className="absolute bottom-0 left-0 w-full h-0 bg-[#C49A6C] transition-all duration-500"
      />

      {/* Hamburger */}
      <div className="relative z-10 flex flex-col gap-2">
        <div className="w-8 h-[2px] bg-white transition-all"></div>
        <div className="w-5 h-[2px] bg-white ml-auto transition-all"></div>
      </div>
    </div>

  </div>

</header>
  );
};

export default Navbar;