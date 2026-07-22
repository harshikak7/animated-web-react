import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className="pb-8 flex justify-center gap-4">

      <Link
        to="/projects"
        className="border border-white rounded-full
        px-8 py-3
        uppercase
        text-white
        text-base md:text-lg
        hover:bg-white
        hover:text-black
        duration-300"
      >
        Projects
      </Link>

      <Link
        to="/agents"
        className="border border-white rounded-full
        px-8 py-3
        uppercase
        text-white
        text-base md:text-lg
        hover:bg-white
        hover:text-black
        duration-300"
      >
        Agents
      </Link>

    </div>
  );
};

export default HomeBottom;