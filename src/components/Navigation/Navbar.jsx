import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Navbar = ({ setOpenMenu }) => {
  const navRef = useRef(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none"></div>

      <div className="relative flex items-center justify-between px-5 md:px-10 h-20">

        {/* Logo */}
        <Link to="/" className="z-10">
  <img
    src={logo}
    alt="Logo"
    className="w-12 lg:w-12 md:w-24 object-contain"
  />
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
          onClick={() => setOpenMenu(true)}
        >
          {/* Hover Fill */}
          <div
            ref={navRef}
            className="absolute bottom-0 left-0 w-full h-0 bg-[#C49A6C] transition-all duration-500"
          />

          {/* Hamburger */}
          <div className="relative z-10 flex flex-col gap-2">
            <div className="w-8 h-[2px] bg-white"></div>
            <div className="w-5 h-[2px] bg-white ml-auto"></div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;