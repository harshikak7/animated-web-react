import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agents from "./pages/Agents";

import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import Contact from "./pages/Contact";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Navbar setOpenMenu={setOpenMenu} />

      {openMenu && (
        <FullScreenNav setOpenMenu={setOpenMenu} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;