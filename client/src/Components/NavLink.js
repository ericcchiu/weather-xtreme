import React from "react";

const NavLink = props => (
  <a onClick={() => props.handleNavClick(props.text)}>{props.text}</a>
);

export default NavLink;
