import React from "react";
import NavLink from "./NavLink";

const Nav = ({ handleNavClick }) => (
  <nav>
    <NavLink text="home" handleNavClick={handleNavClick} />
    <NavLink text="login" handleNavClick={handleNavClick} />
    <NavLink text="signup" handleNavClick={handleNavClick} />
  </nav>
);

export default Nav;
