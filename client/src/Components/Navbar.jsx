import React, { useState } from "react";
import { useDarkMode } from "./Hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(true);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Heroes of Foot sports</h1>
      <div className="dark-mode__toggle">
        <div
          className={darkMode ? "toggle toggled" : "toggle"}
        />
        <button onClick={toggleMode}>click for dark nav mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
