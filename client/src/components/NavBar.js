import React from "react";
import { useDarkMode } from "./useDarkMode";

//below we are creating an event toggle that will modify state to be the opposite of whatever is currently the state
//below we are returning the top navbar for our app including a div that will be a toggle that uses a terniary to toggle the toggle
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Womens World Cup Sprint Challenge</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
